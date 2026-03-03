# A design system is documented decisions

A design system isn't only a component library, it is a set of decisions, made explicit. When I structure design tokens, components, and rulesets, I'm solidifying the choices I've made regardign spacing, hierarchy, interaction patterns, error handling, etc.

Each token is a decision. Each component is a bundle of decisions. Each rule is a constraint I chose deliberately.

This matters a lot more now that I vibe-code most of my work.

### The problem with vibe coding without documented decisions

When I prompt an agent from scratch, it makes its own decisions. Every time. Spacing, color, layout, component structure all get reinvented per prompt. The first screen looks fine. The second looks fine. Together they look like two different products.

Worse: I couldn't tell what decisions were being made at all. The agent picked a button style, a spacing scale, a layout pattern — but none of it was recorded anywhere. If I wanted to change direction, I couldn't trace back to what I'd implicitly committed to. I was making decisions by accident and couldn't undo them on purpose.

### What changes with a design system in place

When my agents work within a design system, they're not making all sorts of decisions. The decisions are already documented in the tokens, components, and rules will be respected which let's me control what to experiment with and what to pin down.

This does two things:

**I'm always moving forward.** Every output builds on the same foundation. I'm not spending review cycles catching inconsistencies or wondering why this page feels different from that one. The system enforces coherence, so I can focus on whether the feature actually works.

**I can track decisions and measure their impact.** When a decision is explicit I can change it and see what happens across the whole product. If I change a rule I know what I expect, and can evaluate the impact. Implicit decisions can't be measured. Documented ones can.

### Decisions compound

This is the part I didn't appreciate early on. Each decision in a design system builds on the ones before it. A spacing scale informs component sizing. Component sizing informs layout rules. Layout rules inform page-level patterns.

When these decisions are documented, they compound in my favor — each new decision has a solid foundation. When they're not, they compound against me. Every agent prompt starts from zero, and the inconsistencies stack up faster than I can catch them.

### Vibe coding with a system

I still vibe-code. Prompt an agent, look at what comes back, iterate. The speed is still there.

The difference is that now the vibes have structure underneath them. I'm not guessing at whether things are consistent — the system handles that. I'm not losing track of what I've decided — it's in the tokens and rules. And when I want to change direction, I change the decision in one place and it propagates.

I build the system first. Then I vibe as hard as I want.
