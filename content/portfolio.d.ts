export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  tags: string[];
  company: string;
  role: string;
  url: string;
  demo?: string;
  demoLabel?: string;
  summary: string;
  problem: string;
  process: string;
  /** Did it ship, what changed because of it, and which part was Daniel's. */
  outcome?: string;
  mvp?: string;
  principles?: string[];
  highlights?: string[];
  tech: string[];
  bestFor: string[];
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  url: string;
  description: string;
  content: string;
}

export interface Route {
  path: string;
  title: string;
  description: string;
  priority: string;
  caseStudy?: CaseStudy;
  note?: Note;
}

export const SITE: { url: string; title: string; description: string };
export const OVERVIEW: {
  name: string;
  title: string;
  experience: string;
  location: string;
  current: string;
  previous: string[];
  philosophy: string;
  skills: string[];
  available: boolean;
  contact: string;
  links: Record<string, string>;
};
export const CASE_STUDIES: CaseStudy[];
export const NOTES: Note[];
export const ROUTES: Route[];
export const caseStudyBySlug: Record<string, CaseStudy>;
export const noteBySlug: Record<string, Note>;
