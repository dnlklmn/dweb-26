import React from "react";
import DoDesignPost from "./DoDesignPost";
import DesignSystemsVibePost from "./DesignSystemsVibePost";
import AIWebsitePost from "./AIWebsitePost";

export interface NotesMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  component: React.ComponentType;
}

export const notesPosts: NotesMeta[] = [
  {
    slug: "ai-website",
    title: "A website for the AI age",
    date: "2026 Mar 10",
    description:
      "Most websites are made for humans. I added one constraint when rebuilding this portfolio: it should work as well for AI agents as it does for people.",
    component: AIWebsitePost,
  },
  {
    slug: "design-systems-make-vibe-coding-real",
    title: "A design system is documented decisions",
    date: "2026 Feb 18",
    description:
      "A design system isn't only a component library. When I structure tokens, components, and rules, I'm solidifying the choices I've made deliberately.",
    component: DesignSystemsVibePost,
  },
  {
    slug: "do-design",
    title: "Why I design again",
    date: "2025 Dec 29",
    description:
      "AI agents can have working software ready by lunch. What I've come to understand is that I was confusing activity with progress.",
    component: DoDesignPost,
  },
];

export function getNote(slug: string): NotesMeta | undefined {
  return notesPosts.find((p) => p.slug === slug);
}
