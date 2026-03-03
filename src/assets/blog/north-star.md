# north star

Bridging product and development
Evaluate against business goals

## Measure improvement compared to a baseline
Costs - are we paying too much compared to the value we produce
? Quality - is the quality increasing compared to ...
? Security - are we building with security compared to?

Need a way to measure productivity 
Productivity = getting closer to business goals

Define business goals to work towards
- user stories, jobs to be done

Increase value for the company
- better quality output
- cheaper
- more secure

Better quality:
- what's good?
- put a data set against outputs

How do you ensure you have good data
- representative, easy to measure against, aligned with business goals
- synthetic, organic

Make sure your setup is good
- make sure you work efficiently with AI
- productivity: results / cost (business goals?)
  - improve results <- define good results
  - decrease costs <- understand costs vs results

Define good results
- massage existing dataset (classify, filter, prevent rot, etc.)
- create new dataset (informed by productivity/business goals)

Who - give product/business control
- business - define goals and general approach
- product 
  - define user stories, jobs to be done, etc.
  - iterate until you your dataset is good (product -> eval)
- dev (now)
  - get output to meet dataset



app architecture should be steered by business goals
- alignment across data retrieval, RAG, context management, prompts, monitoring, and governance




///
# North Star

## Defining "Good" (why)
- datasets and evals should be a product artifact, not a dev artifact (eval-driven development framework)
- the bottleneck in AI improvement is the inability to agree on what "better" means
- business goals → product stories → dataset → evals → dev output

## Ownership (what)
- right now, devs typically own evals because they're technically implemented by devs
  - guessing what product wants
  - writing evals that confirm what they already built
- flip it around: product → dataset → dev

## Dataset Stewardship (how)
We help you define and maintain the criteria for good data, and then apply those criteria whether you're starting from scratch or have existing data
- dataset design & dataset maintenance
- a set of criteria that defines what "good data" looks like for this use case
- dataset charter
  - Coverage - What kinds of inputs should be represented
  - Balance - How edge cases should be weighted
  - Alignment - What the "good output" label actually means in business terms
  - Rot - When an example becomes stale and why
- whether you have data or not - charter is what you're really building -> the data follows from it

## Keeping the system honest

### Feeding real outcomes back (new signal)
- production data (what users actually do, where the model fails in the wild) should feed back into refining the dataset
- some ideas
  - explicit feedback (thumbs up/down) 
    - linked to the exact input, output, and context 
    - flows directly into a review queue
  - implicit behavioral signals
    - did the user retry the same request?
    - did the user edit the output significantly? 
    - did the user abandon the flow mid-task?
  - LLM-as-judge running on sampled production traffic 
    - running your eval on live outputs
    - flagging potential failures for human review rather than waiting for users to report them
  - questions:
    - who owns the review queue, and at what cadence do they process it?
    - for MVP: explicit feedback creates a reactive queue + LLM-as-judge creates a proactive one

### Keep evals grounded (signal quality)
- tying to business goals helps set the right initial direction, but it doesn't prevent drift over time
- some ideas
  - separate who defines the eval from who optimizes against it - product defines the dataset, devs meet it
  - periodic human calibration: business or product people rate a sample of real outputs,
    - 'calibration session' like a product ritual
  - layered metrics that are hard to game simultaneously
  - business outcome correlation audits: do eval score changes actually predict downstream business metrics

### Competition
- Braintrust, Langsmith, and Arize exist in this space but they're all dev-facing
- we are making this accessible to product and business stakeholders.
- think hard about the UX layer that translates "business goals" into something that can actually generate or curate a dataset [THAT'S OUR PROBLEM]
