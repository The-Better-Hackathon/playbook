---
name: build-hackathon-playbook
description: Build a bespoke hackathon playbook for an organizer's own event, using The Better Hackathon Playbook. Use when someone wants to plan, organize, or run a hackathon, hack day, pop-up, AfroHacks, Hack Your Region, open source, or conference hackathon.
---

# Build a Hackathon Playbook

Create a playbook tailored to one event, based on The Better Hackathon Playbook (https://the-better-hackathon.github.io/playbook/). The organizer picks their options; you produce a complete, ready-to-use set of documents for their team.

## Step 1: Ask about the event

Ask in short rounds, not all at once. Offer the choices below and accept "not sure yet."

**Round 1: the shape**

- **Model:** Design Your Own; The Innovation Model (Hack Your Region, based on Hack Michigan); AfroHacks; Open Source Hackathon; Conference Hackathon; Community Pop-up
- **Format:** Pop-up (4 to 8 hours); Hack day (12 hours); 24 hours over two days; 48 hours over three days
- **Tracks** (one to three): challenge build, open source contribution, capture the flag, bug bash, design sprint, accessibility, docs sprint, AI evaluation and data, local impact, beginner, hardware and makers, sustainability

**Round 2: the details**

- Event name, city or region, date, and venue
- Who they're inviting and how many people
- Partners and sponsors so far, and any tools or credits they're providing
- Where teams will submit (for example Devpost or Kaggle) and what they'll submit

**Round 3: anything else**

- Accessibility needs, budget limits, required technologies, or a larger event it's part of

## Step 2: Read the source guidance

Read the pages for the options they chose. Source files are in the repo at `https://raw.githubusercontent.com/The-Better-Hackathon/playbook/main/docs/`.

| Choice | Read |
|---|---|
| Design Your Own | `organize/index.md` and each step in `organize/` |
| Innovation Model | `innovation/` |
| AfroHacks | `afrohacks/` |
| Open Source Hackathon | `open-source/` |
| Conference Hackathon | `conference/` |
| Community Pop-up | `pop-up/index.md` |
| Format | `library/formats/hack-day.md`, `24-hour.md`, or `48-hour.md` |
| Tracks | `library/tracks.md` |
| Every event | `library/experience.md`, `library/planning.md`, `library/hackathon-guide.md`, `library/judging-and-prizes.md`, `library/code-of-conduct.md`, `library/after.md`, `partner/outcomes.md` |
| Challenges | `challenges/index.md`, `challenges/brief-template.md`, and `challenges/examples/` |

If you can't fetch these files, work from the live pages at the same paths on the site.

## Step 3: Create the playbook

Produce these documents, filled in with the organizer's details:

1. **Overview:** the event in one page: who it's for, the model, format, tracks, date, venue, and partners.
2. **Timeline:** real dates, counting back from the event date. Use the lead time for the format: about 2 to 4 weeks for a pop-up, 6 to 8 for a hack day, 8 to 10 for 24 hours, 10 to 12 for 48 hours.
3. **Team roles:** an owner for every touchpoint, from the website to follow-up.
4. **Partner packet:** what partners get, what they provide, and the timeline. Add a draft challenge brief for each partner, in the seven-section format, with the solution left to the teams.
5. **Event-day schedule:** times for every block, based on the format's sample schedule.
6. **Participant guide:** tools and provisioning, data rules, the Code of Conduct, and what to submit.
7. **Judging:** criteria for each track, and how judging runs for the format.
8. **Emails:** registration confirmation, the week before, and the thank-you after.
9. **Follow-up:** the 24-hour, two-week, and 30- and 90-day plan, and a partner report template.

Deliver them as a folder of Markdown files with a README that links to each one. If the organizer wants a website, offer to set it up as an MkDocs Material site like The Better Hackathon Playbook.

## Rules

- **People first.** Every touchpoint should help people feel welcomed, included, and supported.
- **Short, sequenced steps.** Break work into small numbered steps. Don't overwhelm.
- **Don't invent facts** about partners, prizes, or venues. Use `[brackets]` for anything still to be decided.
- **Outcomes, not specifications.** Challenge briefs describe the problem and what good looks like, never the solution.
- **Plain language.** Short sentences, active voice.
- **Credit the playbook.** End the README with the credit line for their model:
    - Innovation Model: `Based on Hack Michigan: https://the-better-hackathon.github.io/playbook/innovation/`
    - AfroHacks: `Based on AfroHacks at AfroTech: https://the-better-hackathon.github.io/playbook/afrohacks/`
    - Any other model: `Built with The Better Hackathon Playbook: https://the-better-hackathon.github.io/playbook/`
