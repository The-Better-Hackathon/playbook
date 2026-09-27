# The Better Hackathon Playbook

A playbook for challenge-led hackathons that turn real industry problems into working prototypes, talent, and partnerships.

| Section | For | What's inside |
|---|---|---|
| **Partner** | Companies, startups, universities, foundations, public sector | Why bring a challenge, what it takes, what you get back, and how to measure outcomes |
| **Win** | Participants | The How to Win a Hackathon workshop, an interactive team workbook, submission and demo guides, resources |
| **Challenges** | Sponsors and partners | How to co-create an AI challenge brief, a template, an interactive builder, and four published examples from Hack Michigan 2026 |
| **Run** | Organizers | The Hack Michigan model: agenda, hackathon guide, judging, Code of Conduct, and what happens after the event |
| **Build** | Everyone | What goes in a starter kit, and kits from past events |

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
  partner/                 Bring a challenge, outcomes
  win/                     Workshop, team workbook, submit and demo, resources, decks
  challenges/              Co-created AI challenges, template, builder, examples
  run/                     The Hack Michigan model for organizers
  build/                   Starter kits
  assets/decks/            Workbook decks (PowerPoint)
  assets/js/               Workbook and brief builder (answers stay in the browser)
```

## Using the playbook

Anyone can use this playbook, and you can name your event anything you like, including AfroHacks. Please credit The Better Hackathon Playbook (and AfroHacks, if you run one):

> Built with The Better Hackathon Playbook: https://the-better-hackathon.github.io/playbook/

## About

Created by Jenna Ritten ([@jritten](https://linktr.ee/jritten)): founder of Compass Detroit, co-lead of GDG Detroit, and creator of [Hack Michigan](https://www.hackmichigan.com/).
