# Innovation Ecosystem Discovery

**StartMidwest** · Hack Michigan 2026 · May 15–17 · TechTown Detroit

*Making the scattered resources Midwest founders need instantly discoverable, and keeping that picture true over time.*

## 1. The problem

Michigan loses thousands of tech graduates and early-stage founders to the coasts every year. One reason is fixable: when a founder here looks for help (a grant to hire their first employee, a hardware accelerator, a co-working space with wet-lab access, a relocation tax credit), the information is fragmented across city portals, state agency sites, university pages, regional foundations, and event platforms. None of it is in one place. Most of it isn't on the first page of Google. A lot of it has changed since it was published.

Coastal ecosystems have the same fragmentation, but they have density, network effects, and a culture of pointing newcomers at the right resource. The Midwest has the resources; the discovery layer is missing.

There's a second, harder layer underneath. The moment any directory is published, it starts decaying. Programs close, deadlines pass, URLs break, new accelerators launch. A directory that's six months old is half-wrong. The baseline teams start from is over a year old, and part of the challenge is figuring out how a system like this stays honest over time.

!!! quote "Key insight"
    When a real founder uses your tool, do they get to a moment where they say "wait, that exists? How have I never heard of this?"

## 2. Context: what counts as solved

Returning a result isn't the bar. Three things have to work together:

- **Coverage:** find what Google can't. A founder who already searched shouldn't get the same answers back.
- **Relevance:** real fit to the founder's stage, geography, demographics, and need, not keyword matches.
- **Explanation:** plain language and a clear next step, without five pages of bureaucratic copy.

**Freshness matters as much as discovery.** AI does the legwork (re-fetching sources, detecting meaningful changes, summarizing them, proposing new entries, flagging dead programs) and humans approve the truth. Every record carries provenance: source, last-verified date, what changed, and who approved it.

## 3. What good looks like

StartMidwest wants a dual-sided platform:

1. **A conversational discovery tool for founders** with actionable next steps.
2. **Change detection** that diffs sources and surfaces meaningful updates.
3. **A review queue** where curators approve, edit, or reject AI proposals.
4. **A state-agnostic architecture:** Michigan first, replicable to other states with config, not code.

!!! success "The test"
    Of the ~100 Michigan records in the baseline, how many can the system confidently say are still active today, and what does that report look like?

## 4. Data and resources

**Ready to use (Michigan):** pitch competitions (~21), accelerators (~25), state capital sources (~6), coworking spaces (~27), events (~18), other funding (~30, use selectively).

**Known gaps worth going deep on:** freshness and maintenance (the centerpiece) · government paperwork and filings · hiring and workforce programs · mentorship (SBDC, SCORE, university office hours) · tax credits and incentives · sustainability programs · reach beyond Michigan.

**External sources to mine:** startdtw.com, Ohio Startup Network events, bullishonchicago.com, state economic development corporations (MEDC, IEDC, JobsOhio, WEDC, DCEO), university entrepreneurship centers, SBDC networks, SCORE chapters, and Luma, Eventbrite, and Meetup feeds.

**In scope:** grants and non-dilutive funding, tax credits and incentives, accelerators and fellowships, co-working and lab spaces, events, government filings, hiring programs, mentorship.
**Out of scope:** startups and investors (StartMidwest has those databases), paid services, generic national resources, anything where the founder feels pitched rather than helped.

## 5. Evaluation and constraints

| Criterion | What judges look for |
|---|---|
| Coverage | Resources that aren't on the first page of Google |
| Relevance | Real fit to the founder asking |
| Explanation | The founder understands what it is and the next step |
| Freshness | The system can honestly say what's still active and what changed |
| Operator experience | Fast curation, visible provenance, reviewable AI updates |
| Architecture | Works for another state with config, not rewrites |

**Constraints:** Michigan first · humans approve the truth (AI proposes, curators decide) · every record carries provenance · honor the in-scope and out-of-scope boundary.

## 6. Directions worth exploring

Aggregation + RAG with citations · agentic search · hybrid retrieval · a conversational profile that personalizes answers · change detection with LLM summaries · source discovery from feeds · a second-state demo (IL, OH, WI) · a founder digest or public "what changed" feed.

**Scenarios to design against:** *"I'm a solo founder in Ann Arbor working on an AI tool for small manufacturers. What's available to me in the next 90 days?"* · *"A pitch competition changed its prize and deadline. Does the system catch it?"* · *"A new accelerator launched in Grand Rapids last week. How does it enter the system?"*

## 7. The key question

**When a real Midwest founder uses your tool, do they get to the moment where they say "wait, that exists? How have I never heard of this?"** If yes, you've closed the visibility gap. The architecture is yours to design.

Winner: [Trestle](../../run/after.md#hack-michigan-2026-winners).
