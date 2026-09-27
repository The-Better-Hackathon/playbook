# Utility Pole Risk Profiling

**DTE Energy** · Hack Michigan 2026 · May 15–17 · TechTown Detroit

*Using public data and digital tools to identify the poles, segments, and conditions most likely to fail.*

## 1. The problem

Utility poles support critical electric and communications infrastructure across DTE's service territory. Their condition, and the condition of everything around them, directly determines whether the lights stay on, whether crews respond reactively or proactively, and whether outages last hours or days.

Traditional inspection cycles work on a schedule: a crew visits a section of territory on a rotation, looks at the poles, and moves on. This catches obvious problems, but it has two structural weaknesses. First, it misses early warning signs that only show up between visits: a tree that grew aggressively this season, soil saturation after a wet spring, a storm path that left invisible stress on the wood. Second, it can't prioritize. Every pole gets roughly the same attention, whether it sits in a clear right-of-way or under a canopy of mature oaks next to a flood-prone creek.

The result is a maintenance posture that's reactive by design. Crews respond to outages after they happen. Vegetation gets trimmed on a rotation, not in response to actual risk. Capital flows to replacements after failures, not before.

Meanwhile, the public data landscape has changed dramatically. Weather histories, satellite and aerial imagery, vegetation indices, flood maps, soil data, and terrain models are all open. The tools to make sense of them (machine learning, computer vision, GIS) are accessible to anyone with a laptop.

!!! quote "Key insight"
    Traditional inspection cycles can miss early warning signs or fail to prioritize the highest-risk areas.

## 2. Context: why now

DTE isn't asking teams to replace field inspections. The goal is a layer that complements them: something that tells crews where to look first, what to look for, and which conditions warrant intervention before the next storm.

- **Data access:** weather history, satellite imagery, vegetation indices, soil and flood data, and open geographic datasets are downloadable at the resolution utilities need.
- **Tool maturity:** ML, computer vision, and GIS that used to need specialist teams can be assembled by small groups over a weekend.
- **Operational pressure:** storm frequency, regulatory expectations, and customer tolerance for outages have all moved. Proactive maintenance is becoming a baseline expectation.

## 3. What good looks like

1. **Risk is assessed at a meaningful unit:** pole-level or circuit-segment-level. Granular enough to drive a work order, coarse enough to be tractable from public data.
2. **The drivers of risk are visible:** not just a score, but what's behind it: vegetation encroachment, storm exposure, terrain, age proxies, environmental stress.
3. **Recommendations are actionable:** the output says what to do (trim, inspect, reinforce, replace), not just where the problem is.
4. **Decisions are explainable:** operations and field teams can see why an asset scored the way it did, and trust it. No black boxes.
5. **The approach scales:** what works for a pilot circuit could work across the full service territory without re-engineering.

!!! success "The test"
    Could a maintenance planner change next week's schedule based on what your tool shows? If yes, you've moved DTE from reactive to predictive. If no, you've built a research artifact: interesting, but not the goal.

## 4. Data and resources

Built on public and synthetic data. No proprietary inputs required.

- **Environmental and weather:** wind speed, ice events, lightning strikes; long-term climate and precipitation; storm tracks and severity; forecasts and seasonal patterns.
- **Geospatial and imagery:** satellite imagery (Landsat, Sentinel, NAIP), aerial photography, vegetation indices (NDVI and similar), terrain and slope, soil and flood-risk maps, open infrastructure datasets.
- **Pole and equipment context:** pole types, age bands, and material assumptions (proxy modeling where asset data is limited), vegetation proximity and growth, location-based stress exposure.
- Synthetic data is fair game for filling gaps.

## 5. Evaluation and constraints

| Criterion | What judges look for |
|---|---|
| Impact | Meaningfully improves prioritization of maintenance and investment |
| Innovation | Creative use of public data, modeling, or emerging tools |
| Accuracy and logic | Sound risk factors and scoring approach |
| Usability | Clear, actionable outputs operational teams could use |
| Scalability | Plausible across the full service territory |
| Explainability | Interpretable decisions, no unjustified black-box scores |

**Constraints:** public or synthetic data only · design for incomplete and imperfect datasets · explainability over black-box accuracy · practical application over theoretical perfection.

## 6. Directions worth exploring

Optional. Strong teams may pursue one, or none and go deep on the core problem instead.

- **Computer vision on imagery:** detect vegetation proximity to lines from satellite or aerial imagery.
- **Predictive growth and storms:** model future vegetation growth or storm impact, not just present-day exposure.
- **Inspection workflow integration:** show how the output slots into inspection planning.
- **Mobile-friendly field outputs:** something crews could use on a tablet.

## 7. The key question

**How can accessible data and modern tools move utility maintenance from reactive to predictive, improving reliability and making the most of limited resources?**

Winner: [PoleProof](../../library/after.md#hack-michigan-2026-winners).
