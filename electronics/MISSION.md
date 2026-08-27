# Mission: Electronics, Ending in a Crumb-Collecting Robot

## Why
Ricardo wants to build a small autonomous robot that drives around the dining
table after a meal and sweeps up crumbs — a Roomba shrunk to tabletop scale.
He is starting from zero electronics knowledge, and he wants to *actually
understand* the circuits rather than wire up modules he can't reason about.
The robot is the forcing function; the real prize is being able to look at a
circuit, know what every part is doing, and design his own.

## Success looks like
- Reads a schematic and can say what each component does and why it's there.
- Predicts voltage and current anywhere in a simple DC circuit before building it — and sizes a resistor correctly for a given part.
- Explains, from first principles, how a transistor lets a tiny logic signal switch a big motor current — and why an H-bridge can reverse that motor.
- Drives a DC motor at a chosen speed and direction from a microcontroller, using PWM through a motor driver.
- Reads a sensor that detects the table edge, so the robot doesn't drive off it.
- Works out a power budget: what battery, how much current everything draws, how long it runs.
- Designs and builds the complete robot — differential drive, edge sensing, crumb collection — and can explain every wire in it.

## Constraints
- **Zero prior electronics.** No components, no multimeter, no soldering iron yet. Start at "what is voltage."
- **Screen-only for now.** Lessons must teach through interactive in-browser widgets and free circuit simulators. Hardware gets bought once the fundamentals prove they'll stick — the course should say clearly when that moment arrives.
- **Strong software background.** Ricardo is a software engineer. Code, logic, abstraction, debugging and datasheets-as-API-docs can be assumed; the *physics* is the new part. Don't teach programming.
- **Understanding over speed.** He explicitly chose real foundations over a fast path to a working robot. Theory is welcome when it earns its place — but it earns its place by explaining something the robot needs.
- **One session a week.** Every lesson must be self-contained and open with a recap, because a week of forgetting sits between them. Reference docs and retrieval practice carry the weight between sessions.

## Out of scope
- AC theory, mains voltage, and anything with a shock hazard. This is a low-voltage battery project throughout.
- PCB design and manufacture — breadboard and modules are the target build.
- Advanced analog (op-amp design, filters, RF) beyond what the robot's sensors need.
- Mechanical/CAD design of the chassis and brush. Real, but a different discipline; buy or improvise the body.
- SLAM, computer vision, and path planning. The robot may wander semi-randomly like an early Roomba — that's a success, not a compromise.

## Status
- **Defined:** 2026-08-27.
- **Revisions:** none yet.
