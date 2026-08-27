# Electronics Resources

Curated for a from-zero, understanding-first path toward a tabletop
crumb-collecting robot. Screen-only for now — simulators do the work a
breadboard would normally do.

## Knowledge — Foundations

- [SparkFun Learn: Voltage, Current, Resistance, and Ohm's Law](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law/all)
  The single best short introduction to the three core quantities, with the
  water analogy done properly and worked Ohm's law examples. Use for: the
  absolute first concepts, and as the primary source for Lesson 1.
- [SparkFun Learn: Resistors](https://learn.sparkfun.com/tutorials/resistors/all)
  Resistor types, colour codes, power ratings, and series/parallel behaviour.
  Use for: sizing resistors and reading their markings.
- [SparkFun Learn: Series and Parallel Circuits](https://learn.sparkfun.com/tutorials/series-and-parallel-circuits/all)
  Clear treatment of how voltage and current divide. Use for: voltage
  dividers, and for reasoning about anything with more than one component.
- [_Lessons in Electric Circuits_ — Tony R. Kuphaldt (6 volumes, free)](https://www.ibiblio.org/kuphaldt/electricCircuits/)
  Open-licensed textbook series: Vol I DC, II AC, III Semiconductors, IV
  Digital, V Reference. Genuinely rigorous and free. Use for: the "but *why*"
  question whenever a tutorial hand-waves. Vol I and III are the relevant ones.
- [All About Circuits — Textbook](https://www.allaboutcircuits.com/textbook/)
  A polished, well-illustrated web development of the Kuphaldt material.
  Use for: a more readable version of the same DC/semiconductor theory.

## Knowledge — Simulators (the lab bench, while there's no hardware)

- [Falstad / CircuitJS1 circuit simulator](https://www.falstad.com/circuit/)
  Runs in the browser, no account, animates current flow as moving dots and
  shows live voltages and waveforms. The best tool in existence for *seeing*
  what a circuit does. Use for: every foundational circuit — Ohm's law,
  dividers, capacitors, transistors, H-bridges. Circuits share as URLs.
- [Tinkercad Circuits](https://www.tinkercad.com/circuits)
  Virtual breadboard with a simulated Arduino, real component models, and
  code. Free with an Autodesk account. Use for: later lessons — wiring
  practice, microcontroller + motor driver + sensor, before buying anything.

## Knowledge — Video

- [Ben Eater](https://www.youtube.com/@BenEater)
  Builds computers from logic gates on breadboards, explaining every signal.
  Unmatched at *why a circuit works*. Use for: digital logic, clocks, buses —
  and as the model of how deeply this can be understood.
- [GreatScott!](https://www.youtube.com/@greatscottlab)
  Short, project-driven hobbyist electronics with real component reasoning.
  Use for: practical component choices — motor drivers, batteries, regulators.
- [EEVblog — Dave Jones](https://www.youtube.com/@EEVblog)
  Working-engineer perspective, teardowns, and a fundamentals series. Use
  for: measurement, multimeters, and sanity-checking hobbyist folklore.

## Knowledge — Robot-specific (needed later, listed now so the arc is visible)

- [Adafruit Learning System](https://learn.adafruit.com/)
  Large library of engineer-written guides with excellent diagrams. Use for:
  motors, drivers, sensors, battery/power topics when the build starts.
- Motor driver choice: the classic **L298N** module (BJT-based, ~2 A/channel,
  drops 1.4–3 V internally) versus the modern **TB6612FNG** (MOSFET-based,
  ~0.5 V drop, far more efficient, best under ~1.2 A continuous). For a small
  battery-powered tabletop robot the TB6612FNG is the better default.
  Confirm against the actual motor's stall current when we get there.
  ([Hackster comparison](https://www.hackster.io/news/tb6612fng-motor-driver-better-than-the-l298n-7499a7574e63))

## Wisdom (Communities)

- [r/AskElectronics](https://www.reddit.com/r/AskElectronics/)
  ~900k members, strongly moderated toward real technical answers. Use for:
  "is this circuit going to blow up", component identification, design review.
  Post a schematic, not a photo of a breadboard.
- [Electronics Stack Exchange](https://electronics.stackexchange.com/)
  Higher bar, archival quality answers. Use for: precise, well-formed
  questions where the answer should outlive the thread.
- [r/robotics](https://www.reddit.com/r/robotics/) and [r/arduino](https://www.reddit.com/r/arduino/)
  Use for: the robot-level questions — chassis, drive, sensing, and the
  inevitable "why does my motor reset my microcontroller."
- [EEVblog Forum — Beginners](https://www.eevblog.com/forum/)
  Long-form, experienced hobbyists and professionals. Use for: patient help
  with fundamentals without the churn of a subreddit.

## Gaps

- No confirmed high-trust source yet on **crumb/debris collection mechanisms**
  at tabletop scale (brush geometry, bin design, sweeping vs. vacuum). This is
  the least-documented part of the mission — search target before the build
  phase, and a good first question for r/robotics.
- No confirmed beginner source yet on **table-edge detection** specifically
  (IR reflectance sensors used as cliff sensors, as Roombas do). Needed around
  the sensors lesson.
- No source vetted yet for **battery safety** with LiPo/Li-ion at hobby scale.
  Must be settled before any battery is purchased.
