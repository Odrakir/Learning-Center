# Working Notes — Electronics

## About Ricardo (established 2026-08-27, at course creation)
- **Zero prior electronics.** Start from "what is voltage." No components, no
  multimeter, no soldering iron, nothing bought yet.
- **Strong software engineer.** Assume comfort with code, abstraction, logic,
  debugging, and reading specs as API docs. Do *not* teach programming — when
  Arduino code appears, explain the *electrical* meaning of each line, not the
  C++ syntax. Analogies to software systems land well and are worth using.
- **Screen-only for now, by choice.** Hardware comes later, once the
  fundamentals prove they'll stick. So every lesson needs an in-browser
  feedback loop; there is no breadboard to fall back on.
- **Understanding over speed**, explicitly chosen over "straight to the robot."
  He wants to be able to design circuits afterwards, not just wire up modules.
  Theory is welcome — but it must earn its place by explaining something the
  robot needs.
- **One session a week.** Lessons must be self-contained with a recap at the
  top. Assume a week of forgetting between sessions; lean on reference docs
  and spaced retrieval.

## Teaching approach
- This is a **knowledge-heavy** topic with a skills payload at the end — the
  opposite balance to the jazz-piano course. Concepts have to be genuinely
  understood before the build phase, but every concept gets an interactive
  feedback loop so it isn't passive reading.
- **Widget pattern established in Lesson 1** (reuse and extend rather than
  reinventing per lesson):
  1. *Live SVG circuit simulator* — components drawn in SVG, sliders for
     parameters, animated charge carriers along an SVG `<path>` positioned via
     `getPointAtLength`, speed ∝ current (sqrt-compressed so a 1000:1 current
     range stays watchable). Live readouts + a danger state when a rating is
     exceeded.
  2. *Predict-then-check numeric drill* — interleaved across the rearrangements
     of an equation so he must decide *which* form applies, not run one on
     autopilot. Typed answer, ±2% tolerance, immediate feedback showing the
     worked line.
  3. *Concept MCQ* — options held to equal word count and near-equal character
     count, per the skill's rule, so formatting never leaks the answer.
- **Framing that worked in Lesson 1** and is worth carrying forward: *"the
  circuit decides the current, not the battery."* This is the load-bearing
  correction against the near-universal beginner belief that a battery pushes a
  fixed current, and nearly every later topic (motor stall current, LED
  resistors, driver sizing, power budget) is a consequence of it.
- Every abstract quantity gets tied to a **specific robot consequence** in the
  same breath — e.g. power ratings introduced via "what happens when the motor
  stalls." Keeps it from feeling like a physics class.
- Falstad (CircuitJS) is positioned as *his* lab bench, with the lesson widgets
  framed explicitly as miniature imitations of it. Push him toward building
  each lesson's circuit there himself — that's the closest thing to hands-on
  available while screen-only.
- Deliberately flagged at the end of Lesson 1 that **not everything obeys Ohm's
  law** (LEDs, motors, transistors). Setting up that "disobedience is what makes
  them useful" framing early should make the semiconductor lessons land better.

## Lesson roadmap (backlog)
1. ✅ 0001 — Voltage, current, resistance, Ohm's law. Live V/R simulator,
   6-round interleaved drill, 3 concept questions. *Delivered 2026-08-27.*
2. Series & parallel + the **voltage divider**. The divider is the priority —
   it's the circuit under most sensors, so it pays off twice. Kirchhoff's laws
   informally (what goes in comes out) rather than as named laws.
3. **Power, batteries, heat.** P = VI, I²R; amp-hours; why the motor is the
   whole power budget. Natural place to introduce stall current properly.
4. **Diodes and LEDs** — the first non-ohmic part. Forward voltage, why the
   resistor calculation is (Vsupply − Vf)/I, and reverse protection (which the
   motor circuit will need later).
5. **Capacitors** — charge storage, time constants, decoupling. Motivate with
   "the microcontroller resets when the motors start," a real robot failure.
6. **Transistors as switches** — the pivotal lesson. Small current controls big
   current; why a 20 mA pin can command a 1 A motor. MOSFET-first is probably
   the better teaching order for a beginner than BJT-first.
7. **The H-bridge** — built from lesson 6's switches, by hand, before revealing
   that you buy it as a chip. Big payoff moment: reversing a motor.
8. **Digital logic & the microcontroller** — HIGH/LOW, GPIO, pin current limits,
   ground as shared reference. Where Tinkercad Circuits takes over from Falstad.
9. **PWM** — speed control from a binary pin. Ties to duty cycle and to the
   motor driver's inputs.
10. **Sensors** — switches and debouncing, IR reflectance as the **cliff/edge
    sensor** (mission-critical: don't drive off the table), maybe ultrasonic.
    Built on the voltage divider from lesson 2.
11. **Motor drivers as ICs & reading a datasheet** — TB6612FNG vs L298N, with
    the datasheet treated as API documentation (should land well given his
    background).
12. **Power budget & the full schematic** — the whole robot on one page,
    every number justified. *This is the natural "now go buy the parts" moment.*
13. **The build** — assembly, the control loop, the crumb-collection mechanism.

## Open questions to revisit
- **When does he want to buy hardware?** He chose screen-only "until I'm
  convinced I'll stick with it." Check in around lesson 4–6; by lesson 8
  (microcontroller) the simulator genuinely starts limiting what he can learn.
  Have a concrete shopping list ready — don't make him research it.
- **Is there a real table/robot constraint?** Table dimensions, whether it needs
  to dock or charge, whether it should be battery-swappable. Would sharpen the
  mechanical and power decisions in lessons 12–13.
- **Sweep vs. vacuum** for crumb collection — unresolved, and the least
  documented part of the mission (see RESOURCES.md Gaps). A rotating brush into
  a low bin is almost certainly simpler than any suction at this scale, but this
  needs a real source before it's asserted.
- **Language.** He asked in English and the lessons are in English, but three
  other courses in this repo (china, thailand, wine) are in Spanish. Worth
  confirming English is the preference here rather than assuming.
- **Not yet asked:** does he want the robot to be genuinely autonomous, or is
  remote-controlled an acceptable milestone on the way? Affects how much
  sensing/logic the later lessons need.
