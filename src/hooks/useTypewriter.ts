import { useState, useEffect, useRef } from "react";

export interface TypewriterPhrase {
  text: string;
  /** The substring to render in accent color (must appear in text) */
  accentWord: string;
}

interface UseTypewriterOptions {
  phrases: TypewriterPhrase[];
  /** ms per character when typing */
  typeSpeed?: number;
  /** ms per character when deleting */
  deleteSpeed?: number;
  /** ms to pause after fully typing a phrase */
  pauseAfterType?: number;
  /** ms to pause after fully deleting a phrase */
  pauseAfterDelete?: number;
  /** Don't start until this is true */
  enabled?: boolean;
}

export interface UseTypewriterResult {
  displayed: string;
  accentWord: string;
  currentPhrase: string;
  isTyping: boolean;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function useTypewriter({
  phrases,
  typeSpeed = 60,
  deleteSpeed = 30,
  pauseAfterType = 2200,
  pauseAfterDelete = 400,
  enabled = true,
}: UseTypewriterOptions): UseTypewriterResult {
  const [displayed, setDisplayed] = useState("");
  const [accentWord, setAccentWord] = useState(phrases[0]?.accentWord ?? "");
  const [isTyping, setIsTyping] = useState(false);
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const phase = useRef<
    "typing" | "pausing" | "deleting" | "pause-after-delete" | "false-start-deleting"
  >("typing");
  // How many chars to type before bailing on a false start (0 = no false start this round)
  const falseStartAt = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!enabled || phrases.length === 0) return;

    function tick() {
      const current = phrases[phraseIndex.current];

      if (phase.current === "typing") {
        setIsTyping(true);
        charIndex.current += 1;
        setDisplayed(current.text.slice(0, charIndex.current));
        setAccentWord(current.accentWord);

        // Hit the false-start bail-out point — start deleting without finishing
        if (falseStartAt.current > 0 && charIndex.current >= falseStartAt.current) {
          falseStartAt.current = 0;
          phase.current = "false-start-deleting";
          timer.current = setTimeout(tick, rand(80, 160));
          return;
        }

        if (charIndex.current >= current.text.length) {
          // Occasionally wait much longer before deleting
          const extraPause = Math.random() < 0.3 ? rand(1500, 4000) : 0;
          phase.current = "pausing";
          timer.current = setTimeout(tick, pauseAfterType + extraPause);
        } else {
          // Slight jitter on type speed for realism
          timer.current = setTimeout(tick, rand(typeSpeed * 0.6, typeSpeed * 1.5));
        }
      } else if (phase.current === "pausing") {
        setIsTyping(false);
        phase.current = "deleting";
        timer.current = setTimeout(tick, deleteSpeed);
      } else if (phase.current === "deleting") {
        setIsTyping(false);
        charIndex.current -= 1;
        setDisplayed(current.text.slice(0, charIndex.current));

        if (charIndex.current <= 0) {
          phase.current = "pause-after-delete";
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          // Decide now if the next phrase will be a false start
          const next = phrases[phraseIndex.current];
          if (Math.random() < 0.10 && next.text.length > 6) {
            // Type between 4 and ~40% of the next phrase before bailing
            falseStartAt.current = Math.floor(rand(4, next.text.length * 0.4 + 4));
          } else {
            falseStartAt.current = 0;
          }
          timer.current = setTimeout(tick, pauseAfterDelete);
        } else {
          timer.current = setTimeout(tick, rand(deleteSpeed * 0.7, deleteSpeed * 1.3));
        }
      } else if (phase.current === "false-start-deleting") {
        setIsTyping(false);
        charIndex.current -= 1;
        setDisplayed(current.text.slice(0, charIndex.current));

        if (charIndex.current <= 0) {
          phase.current = "pause-after-delete";
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          falseStartAt.current = 0;
          timer.current = setTimeout(tick, pauseAfterDelete);
        } else {
          timer.current = setTimeout(tick, rand(deleteSpeed * 0.7, deleteSpeed * 1.1));
        }
      } else {
        // pause-after-delete — occasionally hesitate before starting to type
        const preTypeDelay = Math.random() < 0.3 ? rand(500, 3000) : 0;
        phase.current = "typing";
        timer.current = setTimeout(tick, rand(typeSpeed * 0.8, typeSpeed * 1.2) + preTypeDelay);
      }
    }

    timer.current = setTimeout(tick, typeSpeed);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [enabled, phrases, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return {
    displayed,
    accentWord,
    currentPhrase: phrases[phraseIndex.current]?.text ?? "",
    isTyping,
  };
}
