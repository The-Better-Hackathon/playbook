# The Better Hackathon Playbook

A playbook for challenge-led hackathons that turn real industry problems into working prototypes, talent, and partnerships.

| Section | For | What's inside |
|---|---|---|
| **Organize** | Community organizers | Design Your Own in seven steps, ready-made models (Hack Your Region, AfroHacks, open source, conference, community pop-up), and track options |
| **Partner** | Companies, startups, universities, foundations, public sector | Why bring a challenge, what it takes, what you get back, and how to measure outcomes |
| **Participate** | Participants | The How to Win a Hackathon workshop, an interactive team workbook, submission and demo guides, resources |
| **Library** | Everyone | Challenge briefs and examples, formats, guides, starter kits, and crediting |

The site is built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deploys to GitHub Pages on every push to `main`.

## Run it locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000.

## Turn on GitHub Pages

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow in `.github/workflows/deploy.yml` does the rest.

## Where things live

```
docs/
  index.md                 Home
  start.md                 Start here
  organize/                Design Your Own (seven steps)
  models/                  Event models overview
  innovation/              The Innovation Model: Hack Your Region
  afrohacks/               AfroHacks
  open-source/             Open source hackathon
  conference/              Conference hackathon
  pop-up/                  Community pop-up
  partner/                 Partner track (five steps)
  participate/             How to Win, team workbook, submit and demo, decks
  challenges/              Challenge briefs, template, builder, examples
  library/                 Formats, guides, track options, starter kits, crediting
  assets/                  Styles, scripts, images, decks
```

## Build a playbook for your event

Use the [builder](https://the-better-hackathon.github.io/playbook/organize/build-your-playbook/) on the site, or add the [Build a Hackathon Playbook Skill](skills/build-hackathon-playbook/SKILL.md) to Claude and ask: *"Help me build a playbook for our hackathon."*

## Using the playbook

Anyone can use this playbook, and you can name your event anything you like, including AfroHacks. Please credit The Better Hackathon Playbook:

> Built with The Better Hackathon Playbook: https://the-better-hackathon.github.io/playbook/

If you run a Hack Your Region event based on the Innovation Model:

> Based on Hack Michigan: https://the-better-hackathon.github.io/playbook/innovation/

If you run an AfroHacks:

> Based on AfroHacks at AfroTech: https://the-better-hackathon.github.io/playbook/afrohacks/

## About

Created by Jenna Ritten ([@jritten](https://linktr.ee/jritten)): founder of Compass Detroit, co-lead of GDG Detroit, and creator of [Hack Michigan](https://www.hackmichigan.com/).
