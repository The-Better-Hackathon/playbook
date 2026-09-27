// Team workbook questions. Keep in sync with the workbook slides in the deck.
window.PlaybookSchemas = window.PlaybookSchemas || {};
window.PlaybookSchemas.workbook = {
  id: 'team-workbook',
  title: 'Team Workbook',
  titleField: 'project',
  intro: 'Built with the How to Win a Hackathon team workbook from The Better Hackathon Playbook.',
  sections: [
    { title: 'Event and team', questions: [
      { id: 'project', label: 'Project or team name', short: true, placeholder: 'e.g. Team Dunamis: ShoreWatch' },
      { id: 'event', label: 'Event info', help: 'Event, dates, tracks or challenges, sponsor tools and credits, what to submit, where, the deadline, presentation length, and judging criteria.' },
      { id: 'team', label: 'Meet your team', help: 'For each teammate: name and pronouns, program or role, skills you bring, something you love, a quirk.' },
    ] },
    { title: 'Step 1: Come up with an idea', questions: [
      { id: 'challenge', label: 'Which challenge are you solving?', help: 'Name the challenge or track and the partner behind it. Copy its test (the one question judges will ask of every demo).' },
      { id: 'theme', label: 'What’s the problem, in your own words?', help: 'Restate the challenge the way the person who has the problem would say it.' },
      { id: 'user', label: 'Who’s the user?', help: 'Name one real person or role. What does their day look like? What frustrates them?' },
      { id: 'matters', label: 'Why does this matter?', help: 'What happens if nobody solves this? Who is affected, and how often?' },
      { id: 'care', label: 'Why do we care?', help: 'Why does your team care about this problem? Judges only get as excited as you are.' },
      { id: 'problem', label: 'Problem statement', help: '“[User] struggles to [task] because [reason], which costs them [impact].”' },
    ] },
    { title: 'Step 2: Research the idea', questions: [
      { id: 'impact_data', label: 'What is the impact?', help: 'Two data points that show how big this problem is, each with its source.' },
      { id: 'existing', label: 'What solutions already exist?', help: 'Apps, tools, or services people use today: what each does, with a link.' },
      { id: 'failing', label: 'Where are they failing?', help: 'Where do existing solutions fall short for your user? Cost, access, speed, trust, language?' },
      { id: 'better', label: 'Do it better', help: 'In one sentence: how is your solution better for your user?' },
      { id: 'ai_users', label: 'How does your AI impact users?', help: 'What will your AI do for users, and what could go wrong for them if it gets something wrong?' },
      { id: 'ai_bias', label: 'What biases might come in?', help: 'Think about your data, your model, and who is missing from both.' },
      { id: 'ai_mitigate', label: 'How will you reduce bias?', help: 'Test with different users, add human review, show sources, let users correct it.' },
    ] },
    { title: 'Step 3: Finalize your idea', questions: [
      { id: 'biz_value', label: 'What’s the business value?', help: 'Who would pay for, fund, or adopt this, and why?' },
      { id: 'outcome', label: 'What’s the impact?', help: 'If this works, what changes for your user? How would you measure it?' },
      { id: 'realistic', label: 'Is it realistic?', help: 'Can your team build a working version in the time you have, with the skills and tools you have?' },
      { id: 'innovate', label: 'Did you innovate?', help: 'What is new here? What does your solution do that others don’t?' },
      { id: 'market', label: 'Market: size your target market', help: 'Who is your market, about how many people or organizations, and where are they?' },
      { id: 'revenue', label: 'Market: revenue potential and scale', help: 'What would people pay or save? How would this grow beyond your first users?' },
      { id: 'competitors', label: 'Top competitors', help: 'Competitor, key features, and where it falls short.' },
      { id: 'gaps', label: 'Gaps you can fill', help: 'What is your edge? Why would a user switch to you?' },
      { id: 'monetize', label: 'Monetization strategy', help: 'Freemium, subscription, ads, one-time purchase, licensing, grants? Pick what fits your users.' },
      { id: 'costs', label: 'Costs and revenue', help: 'Rough numbers are fine. What it costs to run, and what it could bring in or save.' },
    ] },
    { title: 'Step 4: Determine the MVP', questions: [
      { id: 'ai_tools', label: 'Which AI frameworks or models?', help: 'Models, APIs, or frameworks you might use. Start with sponsor tools and credits.' },
      { id: 'oss', label: 'Which open-source tools?', help: 'Libraries, templates, datasets, or starter projects you can build on. Check licenses.' },
      { id: 'scope', label: 'What’s the scope?', help: 'In the MVP this weekend vs. later (document it, don’t build it). Keep it simple: skip login, one main flow, at most one extra feature.' },
    ] },
    { title: 'Step 5: Hack it out', questions: [
      { id: 'roles', label: 'Team roles', help: 'Team lead (decisions, timeline, submission) · Builders (repo, APIs, MVP) · Design/UX (main view and flow) · Research + pitch lead (data, deck, presenting). Who owns what?' },
      { id: 'plan', label: 'Build plan', help: 'Times for each checkpoint: idea locked, MVP working end to end, feature freeze, demo video recorded, submitted.' },
      { id: 'rules', label: 'Tech and data rules', help: 'Only data you’re allowed to use (source + license) · no personal information · no API keys in the repo · which AI tools you used, and for what.' },
    ] },
    { title: 'Step 6: Build a pitch deck', questions: [
      { id: 'passion', label: 'Be passionate', help: '“The problem we are solving is important to us because…”' },
      { id: 'story', label: 'Tell a story', help: 'Hero (your user) · Problem (the crisis) · Solution (the resolution) · Demo (the adventure) · Next steps (the future).' },
    ] },
    { title: 'Step 7: Practice the demo', questions: [
      { id: 'video', label: '60-second demo video script', help: '0:00 user · 0:10 problem · 0:20 three clicks through the solution · 0:50 impact.' },
      { id: 'feedback', label: 'Apply their feedback', help: 'What another team told you, what you’ll change, and who owns it.' },
      { id: 'questions', label: 'Anticipate questions', help: 'What did you build it on? How are you different? How will you sustain it? Add your own.' },
    ] },
    { title: 'Step 8: Submit on time', questions: [
      { id: 'judging', label: 'Judging criteria map', help: 'For each criterion: what judges want, and how your project shows it. Then answer: how does your project pass the challenge’s test?' },
      { id: 'next', label: 'What happens next?', help: 'If the partner loved it, what would the next step be? A pilot, a user test, more data, a follow-up meeting?' },
      { id: 'checklist', label: 'Submission checklist', help: 'Repo URL (public, with README) · demo video URL · problem and solution statements · technologies used · submitted before the deadline.' },
    ] },
  ],
};
