import { useState, useEffect, useCallback, useRef } from "react";

interface UseSteppedAnimationOptions {
  totalSteps: number;
  initialDelay?: number;
  stagger?: number;
  stepDelays?: Record<number, number>;
  autoStart?: boolean;
  skipToEnd?: boolean;
}

function getStaggerFromCSS(): number {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--anim-stagger")
    .trim();
  return parseInt(value, 10) || 600;
}

export function useSteppedAnimation({
  totalSteps,
  initialDelay = 300,
  stagger,
  stepDelays,
  autoStart = true,
  skipToEnd = false,
}: UseSteppedAnimationOptions) {
  const [step, setStep] = useState(skipToEnd ? totalSteps - 1 : 0);
  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isComplete = step >= totalSteps - 1;

  const clearPending = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    setStep(0);
    setIsRunning(true);
  }, []);

  const reset = useCallback(() => {
    clearPending();
    setStep(0);
    setIsRunning(false);
  }, [clearPending]);

  useEffect(() => {
    if (!isRunning) return;
    if (step >= totalSteps - 1) {
      setIsRunning(false);
      return;
    }

    const nextStep = step + 1;
    const delay =
      step === 0
        ? initialDelay
        : (stepDelays?.[nextStep] ?? stagger ?? getStaggerFromCSS());
    timeoutRef.current = setTimeout(() => {
      setStep((s) => s + 1);
    }, delay);

    return () => clearPending();
  }, [step, isRunning, totalSteps, initialDelay, stagger, clearPending]);

  useEffect(() => {
    if (autoStart) {
      const id = setTimeout(() => setIsRunning(true), 0);
      return () => clearTimeout(id);
    }
  }, [autoStart]);

  useEffect(() => {
    return () => clearPending();
  }, [clearPending]);

  return { step, isComplete, start, reset };
}
