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
- Lesson 4 taught ii-V-I root-finding as a formula (ii = tonic +2 half steps, V = tonic +7) rather than teaching full major-scale degrees, to stay in scope with "keep theory minimal." Quiz drills a full C ii-V-I (review) then transfers the same formula to F (new key, mostly natural notes) — worked-example-then-transfer structure, worth reusing when introducing a new key-dependent formula again. Both keys' note ranges were hand-checked to stay within the widget's 2-octave (C3–B4) keyboard.
- Lesson 5 (lead-sheet reading) split the topic into two component skills: (a) reading chord symbols across bars — mostly REVIEW, so it's a low-effort click-to-explore widget on the real Fly Me to the Moon bars 1–4; and (b) reading a melody note off the treble staff → find the key — the genuinely NEW skill, given the effortful retrieval drill (8 notes, staff→keyboard click, immediate feedback). This "review-as-exploration, new-thing-as-drill" split kept working memory low while still adding one real skill.
- Song choice: **Fly Me to the Moon** in C. Chosen because bars 1–4 (Am7 | Dm7 | G7 | Cmaj7) use ONLY chord types he knows, contain the exact C ii-V-I from Lesson 4 (Dm7-G7-Cmaj7, with Am7=vi leading in), and stay in C (no key signature to read for a first melody). Big motivational payoff: "you can already read/play the opening of a real standard." Bars 5–8 add m7♭5 (half-diminished) — deliberately deferred; flagged in the ask-teacher box as the natural next question.
- Melody-reading scope kept deliberately tiny: treble staff, natural notes C4–B4 only (all within the widget keyboard's upper octave; C4 is the one ledger-line note). Taught landmark-note anchoring (E=bottom line, G=2nd line, B=middle line, count from nearest) rather than full sight-reading, per mission's "lead-sheet literacy is enough, sight-reading is out of scope."
- Honesty note: the "melody + chords together" play-through uses a SIMPLIFIED chord-tone melody (2 notes/bar), explicitly labeled as such — NOT the real Fly Me to the Moon melody (didn't want to assert specific copyrighted pitches I couldn't verify note-for-note). The CHORDS shown are accurate. If revisiting, could source the real melody from a trusted chart. New reference doc created: reference/reading-lead-sheets.html (anatomy diagram + landmark-note ladder + chord-symbol table + "how to read a bar" steps).
- New SVG staff-rendering pattern introduced this lesson (lines at fixed y, notehead = ellipse + stem, ledger line for middle C). Reusable for the next lesson if it shows notation. Keyboard widget + Web Audio helpers are the same shared pattern as Lessons 2–4.
- Sequence: keyboard geography (pattern-based note-finding) → intervals (half/whole steps) → first jazz chords (maj7/min7/dom7 shapes) → ii-V-I → simple lead-sheet reading → first full standard.
- Follow the Hal Leonard Jazz Piano Method structure loosely as the backbone; Mark Levine's Jazz Piano Book is a later reference, not a starting point (confirmed via research — it assumes existing piano fluency).

## Lesson roadmap (backlog)
1. ✅ 0001 — Finding your way around the keyboard (black-key groupings, note names, middle C, octaves). *Delivered.*
2. ✅ 0002 — Half steps & whole steps + your first jazz chord: the major 7th shape (4-3-4 half-step pattern, drilled across F/G/D/A roots). *Delivered 2026-08-25.*
3. ✅ 0003 — Minor 7th and dominant 7th: framed as "flat the 7th, then flat the 3rd too" branching off maj7, drilled interleaved across D/G/E/C/A/F roots. *Delivered 2026-08-25.*
4. ✅ 0004 — The ii–V–I: taught as tonic +2 (ii) / +7 (V) half-step formula, drilled as a full progression in C (review) then transferred to F (new key). *Delivered 2026-08-25.*
5. ✅ 0005 — Reading a simple lead sheet: anatomy of a lead sheet + treble-staff landmark-note reading, on Fly Me to the Moon bars 1–4 (Am7-Dm7-G7-Cmaj7 in C, embedding the Lesson-4 ii-V-I). *Delivered 2026-08-26.*
6. First full standard, played through solo. **Fly Me to the Moon is now the natural pick** — already seeded in Lesson 5, in C, opening bars known. Next lesson would extend to the full A section (introducing m7♭5 / half-diminished for the Bm7♭5 in bar 6) and the B section, then play the whole form. Alternatively "Autumn Leaves" if he wants a different tune.

## Open questions to revisit
- Has he gotten a keyboard yet? Check in a future session — once he has one, lessons can shift from on-screen-only to "try this on your real instrument."
- Any specific songs/artists that drew him to jazz piano? Not yet asked — could sharpen song choice for the "first standard" lesson.
