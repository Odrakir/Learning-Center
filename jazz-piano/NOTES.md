# Working Notes

## About Ricardo
- Complete beginner at piano — no prior instrument experience, no music-reading background assumed.
- Goal is personal/solo playing, not performing or jamming with others. Keep lessons free of social/performance pressure framing.
- No keyboard/piano yet as of 2026-08-25. Lessons need to work via an on-screen interactive keyboard until he acquires one.
- Open-ended pace, no deadline. Optimize for retention over speed.

## Instrument recommendation (practical, not a "resource" — purchasing guidance, not knowledge)
- Minimum: a touch-sensitive 61-key keyboard (e.g. Yamaha PSR-E383 class).
- Better for long-term technique: a weighted 88-key digital piano (e.g. Casio CDP-S110 class) — worth it if he thinks he'll stick with it, since weighted keys build the finger technique that transfers to acoustic piano.
- Raise this gently after a lesson or two, once motivation is established — don't lead with a purchase ask.

## Teaching approach
- This is a skills-heavy topic (like yoga), not a knowledge-heavy one. Keep theory minimal and only teach what unlocks the next physical/practical skill.
- Interactive on-screen piano widgets (HTML/CSS/JS, click-to-play with real audio via Web Audio API — no external assets needed) are the main feedback loop until he has a real instrument. Keep building on the same widget pattern across lessons rather than reinventing it each time.
- Lesson 2 added a reusable "Chord Builder" widget: root highlighted, user toggles the other chord tones by clicking, "Check" validates against a target interval pattern and reveals correct spelling, plays the full voicing as a chord (staggered-start oscillators). Lesson 3 generalized it to take a `type` per round (min7 offsets [3,7,10] vs dom7 [4,7,10]) so rounds can interleave both chord colors instead of drilling one at a time.
- Lesson 3's core framing: root and 5th (+7 half steps) never move between maj7/dom7/min7 — only the 3rd and 7th shift. Flat the 7th → dom7; flat the 3rd too → min7. This "family tree" (branch off maj7 rather than three independent formulas) tested much cleaner than presenting three separate interval patterns side by side, and reference/chord-shapes.html now shows all three chords built on C stacked for direct visual comparison. Reuse this branching framing in Lesson 4 if useful.
- Also introduced lead-sheet chord symbol shorthand in Lesson 3 (Cmaj7 / Cm7 / C7) since it's needed for the lead-sheet-reading lesson later — worth checking he retained it before that lesson.
- Sequence: keyboard geography (pattern-based note-finding) → intervals (half/whole steps) → first jazz chords (maj7/min7/dom7 shapes) → ii-V-I → simple lead-sheet reading → first full standard.
- Follow the Hal Leonard Jazz Piano Method structure loosely as the backbone; Mark Levine's Jazz Piano Book is a later reference, not a starting point (confirmed via research — it assumes existing piano fluency).

## Lesson roadmap (backlog)
1. ✅ 0001 — Finding your way around the keyboard (black-key groupings, note names, middle C, octaves). *Delivered.*
2. ✅ 0002 — Half steps & whole steps + your first jazz chord: the major 7th shape (4-3-4 half-step pattern, drilled across F/G/D/A roots). *Delivered 2026-08-25.*
3. ✅ 0003 — Minor 7th and dominant 7th: framed as "flat the 7th, then flat the 3rd too" branching off maj7, drilled interleaved across D/G/E/C/A/F roots. *Delivered 2026-08-25.*
4. The ii–V–I: jazz's core progression (min7 → dom7 → maj7), played in one key. Natural next step — Lesson 3 already previewed Dm7/G7 as pieces of ii-V-I in C.
5. Reading a simple lead sheet (chord symbols + melody, first few bars of an easy standard). Lesson 3 already introduced Cmaj7/Cm7/C7 chord-symbol shorthand — build on that rather than reintroducing it.
6. First full standard, played through solo (candidate: "Autumn Leaves" or "Fly Me to the Moon" — pick based on which fits chords learned so far).

## Open questions to revisit
- Has he gotten a keyboard yet? Check in a future session — once he has one, lessons can shift from on-screen-only to "try this on your real instrument."
- Any specific songs/artists that drew him to jazz piano? Not yet asked — could sharpen song choice for the "first standard" lesson.
