# Why I design again

AI agents can have working software ready by lunch, so why not just keep generating until I'm happy with the outcome? Prompt something, look at what comes back, iterate. The feedback loop felt immediate.

What I've come to understand is that I was confusing activity with progress.

### What design actually does

Design is a decision-making framework. It reduces the solution space and turns vague ambition into a well-defined problem. Before anyone writes a line of code, design answers the questions I tried to skip: what are we building, and what aren't we? For whom, and what do they actually need? Why this approach over the alternatives? What are the constraints?

### What I kept getting wrong: coherence isn't correctness

A well-built output can still be solving the wrong problem. 

Evaluating whether it's right takes just as long as it ever did, I'd just pushed that work downstream, where it's harder to fix.

In multi-agent workflows, this compounds. One agent's output becomes another's input, and a bad assumption in problem framing cascades through every layer. Each piece looks reasonable in isolation, but the whole thing is pointed the wrong direction.

The worst part: it looks like momentum. Commits landing, PRs opening, demos running. I was drifting far from the actual problem while everything felt like progress.

### What I do differently now

I do it like before AI: I think before I commit development resources.

I frame the problem before decomposing work into agent-sized tasks. How you break work apart is itself a design decision, and a clear problem frame means each agent gets a well-scoped task rather than an invitation to wander.

I write explicit acceptance criteria. The more precisely I define what done looks like, the more useful the first output becomes.

When multiple agents collaborate, I design the interfaces between them rather than letting those boundaries emerge from the output. Which agent owns which decisions? Where does one's authority end?

I treat constraints as a first-class artifact. What the system should not do matters as much as what it should. Agents are eager to please, they'll extend scope and add features I never asked for. Constraints keep the work focused.
None of this is new. It used to be called software architecture, product thinking, system design. Now it all collapses into the same discipline: deciding carefully before prompting widely.

### Why this matters more now, not less

As execution gets commoditized, the value of what I bring shifts toward judgment and intent, knowing what's worth building, recognizing when a solution is genuinely good versus merely functional, being able to articulate clearly what I'm trying to achieve and why.

When I skip design, I produce more waste and make it harder to evaluate what I'm getting back. When I invest in it upfront, agents are aligned, outputs can be evaluated against clear criteria and review burden drops because intent was explicit from the start.

AI didn't make design obsolete. It made it the highest-leverage thing I can spend time on.
