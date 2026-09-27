// Playbook builder: organizers pick their options and get a tailored event plan
// in Markdown, plus a ready-to-paste prompt for an AI assistant.
(function () {
  const SITE = 'https://the-better-hackathon.github.io/playbook/';

  const MODELS = {
    design: { name: 'Design Your Own', url: 'organize/', credit: 'Built with The Better Hackathon Playbook: ' + SITE,
      steps: [['Choose your format', 'organize/format/'], ['Decide how people take part', 'organize/participation/'], ['Bring in partners', 'organize/partners/'], ['Design the experience', 'organize/experience/'], ['Prepare', 'organize/prepare/'], ['Host the day', 'organize/host/'], ['Follow up and celebrate', 'organize/follow-up/']] },
    innovation: { name: 'The Innovation Model (Hack Your Region)', url: 'innovation/', credit: 'Based on Hack Michigan: ' + SITE + 'innovation/',
      steps: [["Rally your region's partners", 'innovation/partners/'], ['Co-create industry challenges', 'innovation/challenges/'], ['Choose your format', 'innovation/format/'], ['Host the event', 'innovation/host/'], ['Winners take the stage', 'innovation/stage/'], ['Report outcomes', 'innovation/outcomes/']] },
    afrohacks: { name: 'AfroHacks', url: 'afrohacks/', credit: 'Based on AfroHacks at AfroTech: ' + SITE + 'afrohacks/',
      steps: [['Gather your community', 'afrohacks/community/'], ['Choose your format and place', 'afrohacks/format/'], ['Set up the two paths', 'afrohacks/two-paths/'], ['Create a space where people belong', 'afrohacks/belonging/'], ['Host the day', 'afrohacks/host/'], ['Celebrate and keep going', 'afrohacks/keep-going/']] },
    opensource: { name: 'Open Source Hackathon', url: 'open-source/', credit: 'Built with The Better Hackathon Playbook: ' + SITE + 'open-source/',
      steps: [['Recruit projects and maintainers', 'open-source/projects/'], ['Write maintainer challenges', 'open-source/challenges/'], ['Set the open source rules', 'open-source/rules/'], ['Get contributors ready', 'open-source/ready/'], ['Host and judge', 'open-source/host/'], ['Keep contributors coming back', 'open-source/keep-going/']] },
    conference: { name: 'Conference Hackathon', url: 'conference/', credit: 'Built with The Better Hackathon Playbook: ' + SITE + 'conference/',
      steps: [['Partner with the conference', 'conference/partner/'], ['Plan around the schedule', 'conference/schedule/'], ['Tie challenges to the conference', 'conference/challenges/'], ['Register and provision', 'conference/register/'], ['Host the hackathon', 'conference/host/'], ['Demo on the main stage', 'conference/main-stage/']] },
    popup: { name: 'Community Pop-up', url: 'pop-up/', credit: 'Built with The Better Hackathon Playbook: ' + SITE + 'pop-up/',
      steps: [['Confirm the space', 'pop-up/'], ['Tell people what to bring', 'pop-up/'], ['Assign a greeter', 'pop-up/'], ['Run the day', 'pop-up/'], ['Post the next date', 'pop-up/']] },
  };

  const FORMATS = {
    popup: ['Pop-up (4 to 8 hours)', 'pop-up/', '2 to 4 weeks'],
    hackday: ['Hack day (12 hours)', 'library/formats/hack-day/', '6 to 8 weeks'],
    h24: ['24 hours (2 days)', 'library/formats/24-hour/', '8 to 10 weeks'],
    h48: ['48 hours (3 days)', 'library/formats/48-hour/', '10 to 12 weeks'],
  };

  const TRACKS = {
    build: ['Challenge build', 'Challenge briefs, tools and credits, a starter kit', "The challenge's criteria and its test"],
    oss: ['Open source contribution', 'Projects, maintainers, starter issues, a setup session', 'Impact, quality, following the project process, collaboration'],
    ctf: ['Capture the flag', 'A scoring platform, challenges at several levels, an isolated environment, rules of engagement', 'Scoreboard points, plus a write-up prize'],
    bugbash: ['Bug bash', 'A test build, a bug report template, a triage team', 'Severity, reproducibility, report quality, fixes'],
    design: ['Design sprint', 'A design challenge, access to real users, design tools', 'User understanding, usability, accessibility, storytelling'],
    a11y: ['Accessibility', 'Target sites or projects, checklists and tools, testers who use assistive technology', 'Severity of issues found and fixed, quality of fixes'],
    docs: ['Docs sprint', 'A list of documentation gaps, style guides', 'Accuracy, clarity, faster onboarding'],
    aieval: ['AI evaluation and data', 'Open models and datasets, compute or credits, evaluation frameworks', 'Rigor, reproducibility, documentation'],
    local: ['Local impact', 'Community partners with real needs', 'Local relevance, working prototype, a path after the event'],
    beginner: ['Beginner', 'A starter template, dedicated mentors, a short build guide', 'Learning and completion'],
    hardware: ['Hardware and makers', 'A hardware library, safety rules, a maker space', 'A working device, creativity, usefulness'],
    sustain: ['Sustainability', 'Utility, city, or foundation partners, public environmental data', "The challenge's criteria and measurable impact"],
  };

  const AUDIENCES = ['Students', 'Early-career builders', 'Working professionals', 'Designers and researchers', 'Open source contributors', 'First-time hackers', 'Community members', 'Employees of one organization'];

  const FIELDS = [
    ['name', 'Event name', 'e.g. Hack Ohio, AfroHacks Atlanta'],
    ['where', 'City, campus, or region', 'e.g. Columbus, Ohio'],
    ['date', 'Event date', 'e.g. March 14, 2027'],
    ['venue', 'Venue', 'e.g. Downtown library, innovation hub'],
    ['partners', 'Partners and sponsors (so far)', 'e.g. a regional utility, a university, a cloud provider'],
    ['size', 'Expected participants', 'e.g. 100'],
  ];

  function el(tag, attrs, kids) {
    const n = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    });
    (kids || []).forEach(k => k && n.appendChild(k));
    return n;
  }

  function load() { try { return JSON.parse(localStorage.getItem('playbook:builder') || '{}'); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem('playbook:builder', JSON.stringify(s)); } catch (e) { /* storage unavailable */ } }

  function plan(s) {
    const m = MODELS[s.model || 'design'];
    const f = FORMATS[s.format || 'hackday'];
    const tracks = (s.tracks || []).map(t => TRACKS[t]).filter(Boolean);
    const name = s.name || 'Our Hackathon';
    const L = [];
    L.push('# ' + name + ' Playbook', '');
    const facts = [['Model', '[' + m.name + '](' + SITE + m.url + ')'], ['Format', '[' + f[0] + '](' + SITE + f[1] + ')'],
      ['Where', s.where], ['Date', s.date], ['Venue', s.venue], ['Participants', s.size],
      ['Audience', (s.audience || []).join(', ')], ['Partners', s.partners]];
    L.push('| | |', '|---|---|');
    facts.forEach(([k, v]) => L.push('| **' + k + '** | ' + (v || '_To decide_') + ' |'));
    L.push('', '## Your path', '');
    m.steps.forEach(([t, u], i) => L.push((i + 1) + '. [' + t + '](' + SITE + u + ')'));
    L.push('', '## Timeline', '', 'Start planning about **' + f[2].toLowerCase() + '** before ' + (s.date || 'the event') + '.', '');
    L.push('| When | What |', '|---|---|');
    if ((s.format || 'hackday') === 'popup') {
      L.push('| 2 to 4 weeks out | Confirm the space, date, and greeters; share what to bring |', '| Event day | Welcome circle, build, show and tell |', '| After | Post photos and the next date |');
    } else {
      L.push('| ' + f[2] + ' out | Team, partners, and challenges |', '| 4 to 6 weeks out | Publish challenges, rules, judging criteria, and registration |', '| 1 to 2 weeks out | Send the hackathon guide; provision accounts and credits |', '| Event | Run the [schedule](' + SITE + f[1] + ') |', '| 2 weeks after | Celebrate winners; send partner reports |', '| 30 and 90 days | Check in with teams |');
    }
    if (tracks.length) {
      L.push('', '## Tracks', '', '| Track | Prepare | Judge on |', '|---|---|---|');
      tracks.forEach(t => L.push('| **' + t[0] + '** | ' + t[1] + ' | ' + t[2] + ' |'));
      L.push('', 'Details: [Track options](' + SITE + 'library/tracks/)');
    }
    L.push('', '## Checklists', '',
      '- [ ] [Participant experience](' + SITE + 'library/experience/): an owner for every touchpoint',
      '- [ ] [Planning checklist](' + SITE + 'library/planning/): for your planning meetings',
      '- [ ] [Hackathon guide](' + SITE + 'library/hackathon-guide/): tools, provisioning, and data rules',
      '- [ ] [Judging and prizes](' + SITE + 'library/judging-and-prizes/)',
      '- [ ] [Code of Conduct](' + SITE + 'library/code-of-conduct/)',
      '- [ ] [Team workbook](' + SITE + 'participate/workbook/) for participants',
      '- [ ] [Outcomes](' + SITE + 'partner/outcomes/) to measure and report');
    if (s.notes) L.push('', '## Notes', '', s.notes);
    L.push('', '---', '', m.credit);
    return L.join('\n') + '\n';
  }

  function prompt(s) {
    const m = MODELS[s.model || 'design'];
    const f = FORMATS[s.format || 'hackday'];
    const tracks = (s.tracks || []).map(t => TRACKS[t][0]);
    return [
      'Use The Better Hackathon Playbook (' + SITE + ') to create a bespoke playbook for our event.',
      '',
      'Event: ' + (s.name || '[event name]'),
      'Where: ' + (s.where || '[city, campus, or region]'),
      'Date: ' + (s.date || '[date]'),
      'Venue: ' + (s.venue || '[venue]'),
      'Expected participants: ' + (s.size || '[number]'),
      'Audience: ' + ((s.audience || []).join(', ') || '[who we are inviting]'),
      'Model: ' + m.name + ' (' + SITE + m.url + ')',
      'Format: ' + f[0] + ' (' + SITE + f[1] + ')',
      'Tracks: ' + (tracks.join(', ') || 'Challenge build'),
      'Partners and sponsors so far: ' + (s.partners || '[partners]'),
      ...(s.notes ? ['Notes: ' + s.notes] : []),
      '',
      'Create these, following the steps and guidance of the model and format above:',
      '1. A one-page overview of the event',
      '2. A planning timeline with real dates, counting back from the event date',
      '3. Team roles, with an owner for every participant touchpoint',
      '4. A partner packet and a draft challenge brief for each partner, with the solution left to the teams',
      '5. A detailed event-day schedule with times',
      '6. A participant hackathon guide: tools, provisioning, data rules, and what to submit',
      '7. Judging criteria for each track',
      '8. Emails: registration confirmation, the week before, and the thank-you after',
      '9. A follow-up plan and a partner report template',
      '',
      'Keep it people-first. Break everything into short, sequenced steps. Use [brackets] for anything we still need to decide, and do not invent facts about our partners.',
      'End with this credit line: ' + m.credit,
    ].join('\n') + '\n';
  }

  function download(name, text) {
    const a = el('a', { href: URL.createObjectURL(new Blob([text], { type: 'text/markdown' })), download: name });
    document.body.appendChild(a); a.click(); a.remove();
  }

  function render(mount) {
    let s = load();
    if (!s.model) s.model = 'design';
    if (!s.format) s.format = 'hackday';
    if (!s.tracks) s.tracks = ['build'];

    const out = el('pre', { class: 'pb-output' });
    const pr = el('pre', { class: 'pb-output' });
    const status = el('span', { class: 'pb-status' });
    function update() { save(s); out.textContent = plan(s); pr.textContent = prompt(s); }

    function radios(key, opts) {
      return el('div', { class: 'pb-choices' }, Object.entries(opts).map(([k, v]) => {
        const id = 'pb-' + key + '-' + k;
        const i = el('input', { type: 'radio', name: key, id: id, value: k });
        i.checked = s[key] === k;
        i.addEventListener('change', () => { s[key] = k; update(); });
        return el('label', { for: id, class: 'pb-choice' }, [i, el('span', { text: typeof v === 'string' ? v : (v.name || v[0]) })]);
      }));
    }
    function checks(key, opts) {
      return el('div', { class: 'pb-choices' }, opts.map(([k, label]) => {
        const id = 'pb-' + key + '-' + k.replace(/\W/g, '');
        const i = el('input', { type: 'checkbox', id: id });
        i.checked = (s[key] || []).includes(k);
        i.addEventListener('change', () => {
          const set = new Set(s[key] || []);
          i.checked ? set.add(k) : set.delete(k);
          s[key] = Array.from(set); update();
        });
        return el('label', { for: id, class: 'pb-choice' }, [i, el('span', { text: label })]);
      }));
    }
    let secIdx = 0;
    function section(title, help, body) {
      return el('div', { class: 'pb-section', 'data-i': String(secIdx++ % 5) }, [el('h3', { text: title }), help ? el('p', { class: 'pb-help', text: help }) : null, body]);
    }

    const details = el('div', {}, FIELDS.map(([k, label, ph]) => {
      const id = 'pb-f-' + k;
      const i = el('input', { type: 'text', id: id, placeholder: ph });
      i.value = s[k] || '';
      i.addEventListener('input', () => { s[k] = i.value; update(); });
      return el('div', { class: 'pb-q' }, [el('label', { for: id, text: label }), i]);
    }));
    const notesId = 'pb-f-notes';
    const notes = el('textarea', { id: notesId, placeholder: 'Anything else: themes, constraints, accessibility needs, budget' });
    notes.value = s.notes || '';
    notes.addEventListener('input', () => { s.notes = notes.value; update(); });
    details.appendChild(el('div', { class: 'pb-q' }, [el('label', { for: notesId, text: 'Notes' }), notes]));

    [section('1. Choose a model', 'Start from a ready-made model, or design your own.', radios('model', MODELS)),
     section('2. Choose a format', null, radios('format', Object.fromEntries(Object.entries(FORMATS).map(([k, v]) => [k, v[0]])))),
     section('3. Choose tracks', 'Pick one to three.', checks('tracks', Object.entries(TRACKS).map(([k, v]) => [k, v[0]]))),
     section('4. Who are you inviting?', null, checks('audience', AUDIENCES.map(a => [a, a]))),
     section('5. Event details', 'Fill in what you know. Leave the rest blank.', details),
    ].forEach(n => mount.appendChild(n));

    mount.appendChild(el('h2', { text: 'Your playbook plan', id: 'your-playbook-plan' }));
    mount.appendChild(el('div', { class: 'pb-toolbar' }, [
      el('button', { class: 'primary', text: 'Download plan', onclick: () => download(((s.name || 'hackathon') + '-playbook').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.md', plan(s)) }),
      el('button', { text: 'Copy plan', onclick: async () => { try { await navigator.clipboard.writeText(plan(s)); status.textContent = 'Plan copied.'; } catch (e) { status.textContent = 'Copy failed. Use Download instead.'; } } }),
      status,
    ]));
    mount.appendChild(out);

    mount.appendChild(el('h2', { text: 'Your AI prompt', id: 'your-ai-prompt' }));
    mount.appendChild(el('p', { text: 'Paste this into Claude or another AI assistant to turn your plan into a full playbook: timeline, roles, schedule, briefs, emails, and more.' }));
    mount.appendChild(el('div', { class: 'pb-toolbar' }, [
      el('button', { class: 'primary', text: 'Copy prompt', onclick: async () => { try { await navigator.clipboard.writeText(prompt(s)); status.textContent = 'Prompt copied.'; } catch (e) { status.textContent = 'Copy failed. Select the text below instead.'; } } }),
    ]));
    mount.appendChild(pr);
    update();
  }

  function boot() {
    document.querySelectorAll('[data-playbook-builder]').forEach(m => {
      if (m.dataset.ready) return;
      m.dataset.ready = '1';
      render(m);
    });
  }
  if (window.document$) window.document$.subscribe(boot);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
