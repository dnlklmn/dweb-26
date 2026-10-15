# Portfolio gaps — rolling note

What a recruiter or HR agent can and cannot learn from this site. Working list;
update as items land. Everything agent-facing is generated from
`content/portfolio.mjs` — edit there, run `npm run build`.

## Done

- [x] **Every route readable without JavaScript.** `scripts/prerender.mjs` writes
      all 18 routes with real titles, meta, JSON-LD and body text. Before this a
      plain `curl` of any case study returned an empty `<div id="root">`.
- [x] **`llms.txt` / `llms-full.txt` complete.** All 10 case studies, all 4 notes.
      Was 5 and 2.
- [x] **Outcomes on 7 of 10 case studies.** Solar Wallet, SatoshiPay and One
      Family stay without one — the evidence is gone and a guess is worse.
- [x] **Employment history in the agent surfaces.** 11 roles with dates,
      locations and descriptions, in both mirrors and the prerendered `/about`.
      Previously only a list of company names, so tenure and progression were
      unanswerable.
- [x] **Email** `hey@danielkalman.design` in both mirrors, the prerendered
      `/about`, and the `Person` JSON-LD.

## Daniel's queue

- [ ] **Education** — absent everywhere. Several ATS filters hard-fail on it.
- [ ] **Work authorisation** — absent. "Berlin" is stated; right-to-work is not.
- [ ] **Languages** — absent. The only matches on the site are "design language"
      and "language model".
- [ ] **Quarters note** — now present in the Experience list. Decide whether it
      also belongs in the curated `OVERVIEW.previous` highlights, which still
      omits both Quarters and TOTL.
- [ ] **Scope / seniority signal** — see the note below; headcount is probably
      the wrong metric for an IC.

## Open questions

- **Reframe the three weakest outcome lines?** Read in aggregate, the seven
  outcomes tally as 2 alive, 3 shipped-then-retired, 2 never adopted. An
  unsympathetic summariser gets "lots of prototyping, little durable impact" —
  every word sourced from our own copy. The stronger claim available is usually
  *what the work settled*, not whether the artifact survived. Not changed yet;
  wants a before/after review.
- **Polkadot `Implementations`** — the page documents Open Gov Delegation
  Dashboard, Validator Selector and Asset Menu Demo, each with a screenshot.
  Multisig Commander and the staking dashboard are mentioned but not documented.
  The page heading says "Validator Picker" while its own screenshot reads
  "Validator Selector".

## Timeline artefacts now machine-readable

Adding dates means a screening agent will compute these. None are errors we can
fix from here — Daniel should confirm each is correct and intended:

- **Parity (Oct 2021 – Jan 2024) overlaps Radicle (May 2023 – Jun 2025)** by
  about eight months.
- **TOTL (Jan 2015 – Jul 2017) overlaps Dotloop (Jan 2015 – Apr 2015) and
  Linkurious (Jan 2017 – Jul 2017).** Plausible for concurrent consulting, but
  it reads as three simultaneous jobs unless labelled.
- **Gap: Jul 2017 – Mar 2018**, roughly eight months with no entry.
- Earliest entry is Jul 2011, which supports "15+ years" only if pre-2011 work
  counts. Worth checking the claim lines up with the visible record.

## On scope, for an IC

Team size is the wrong number. Nobody screening an IC cares how many people sat
nearby; they care how far the work travelled and who had to be persuaded. The
site already contains that evidence but never frames it as scope:

- how many products or teams adopted a system (three Radicle clients; five
  Polkadot products)
- how many engineers implemented the designs
- cross-team influence without authority — the Polkadot case study already
  mentions org-wide design alignment, biweekly design-system syncs and open
  office hours, which is exactly this
- what was decided because of the work, and what the wrong call would have cost
