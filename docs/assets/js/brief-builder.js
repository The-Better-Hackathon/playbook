// Challenge brief sections, matching docs/challenges/brief-template.md.
window.PlaybookSchemas = window.PlaybookSchemas || {};
window.PlaybookSchemas.brief = {
  id: 'challenge-brief',
  title: 'AI Challenge Brief',
  titleField: 'title',
  skipEmpty: true,
  intro: 'Written with the AI Challenge Brief builder from The Better Hackathon Playbook.',
  sections: [
    { title: 'Cover', questions: [
      { id: 'title', label: 'Challenge title', short: true, placeholder: 'e.g. Utility Pole Risk Profiling' },
      { id: 'sponsor', label: 'Sponsor or partner', short: true, placeholder: 'e.g. DTE Energy' },
      { id: 'hook', label: 'One-line hook', help: 'The outcome in one sentence, not the solution.', placeholder: 'e.g. Using public data to find the poles most likely to fail.' },
    ] },
    { title: '1. The problem', help: 'Who has the problem, why it is hard, and what it costs today. No solutions here.', questions: [
      { id: 'problem', label: 'The problem', help: 'Two to four short paragraphs. Describe the current state and why it falls short.' },
      { id: 'insight', label: 'Key insight', help: 'One or two sentences a team should remember all weekend.' },
    ] },
    { title: '2. Context: why now', help: 'What has changed that makes this solvable in a weekend.', questions: [
      { id: 'context', label: 'What’s changed', help: 'Data access, tool maturity, market or operational pressure. Two or three short points.' },
      { id: 'constraints_hard', label: 'Hard constraints (if any)', help: 'e.g. no engineering staff, under $50/month, deployable in 30 days. Each constraint should rule out a kind of solution on purpose.' },
    ] },
    { title: '3. What good looks like', help: 'Outcomes, not specifications. Hit these and the implementation is up to the team.', questions: [
      { id: 'outcomes', label: 'Outcomes to aim for', help: 'Three to five numbered outcomes, each with a short explanation.' },
      { id: 'test', label: 'The test', help: 'One question a judge can ask of any demo. e.g. “Could a maintenance planner change next week’s schedule based on your tool?”' },
    ] },
    { title: '4. Data and resources', questions: [
      { id: 'data', label: 'What teams have to work with', help: 'Datasets, APIs, baselines, and where to find them. Say what is public, synthetic, or provided.' },
      { id: 'gaps', label: 'Known gaps worth going deep on', help: 'Where the data is thin or stale and a strong team could stand out.' },
      { id: 'scope', label: 'In scope / out of scope (optional)', help: 'What belongs in the solution and what deliberately does not.' },
    ] },
    { title: '5. Evaluation and constraints', questions: [
      { id: 'criteria', label: 'Evaluation criteria', help: 'Four to six criteria, one line each (e.g. Impact, Innovation, Accuracy, Usability, Scalability, Explainability).' },
      { id: 'constraints', label: 'Constraints', help: 'Non-negotiables: data rules, privacy, explainability, humans-in-the-loop, geography.' },
    ] },
    { title: '6. Directions worth exploring', questions: [
      { id: 'stretch', label: 'Stretch ideas', help: 'Optional directions, framed as invitations, not requirements. None should be the only path.' },
      { id: 'scenarios', label: 'Example scenarios (optional)', help: 'Real questions or situations to design and demo against.' },
    ] },
    { title: '7. The key question', questions: [
      { id: 'key_question', label: 'The key question', help: 'One question that defines success. End with who owns the answer: “The product is yours to invent.”' },
    ] },
  ],
};
