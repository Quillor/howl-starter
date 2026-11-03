# Howl: notes for AI agents

Howl is a social app for NC State students: short posts about campus life (the Brickyard, Hunt Library, Talley, game days). It's built during a 2-hour workshop by designers who have never used a terminal.

## Working with the student
- Explain things in plain language. If you must use a technical word, explain it in a few words.
- Run terminal commands yourself. Never ask the student to type commands.
- When a website step needs the student (log in, sign up, approve, click), use the browser, tell them exactly what to do, and wait for them to say "done". Never type their passwords.
- Make small changes, one step at a time. Suggest a commit after each working step.
- Use the skills in `.github/skills/` whenever their description matches the task.

## Project
- Vite + React, plain JavaScript and plain CSS. No TypeScript, no Tailwind.
- Run locally with `npm install` then `npm run dev`.
- Design tokens live in `src/styles/tokens.css` (CSS variables). Components use semantic tokens only, never raw hex values.
- Sample posts live in `src/data/posts.json`.
- From Phase 5, all reading and writing of data goes through `src/lib/data.js`. `VITE_DATA_SOURCE` picks `seed` (sample posts + localStorage) or `supabase` (the real database).
- The design direction lives in `docs/taste-profile.md` once Phase 1 is done.

## Never
- Commit secrets. Only public keys (like Supabase's anon key) may appear in browser code.
- Change files unrelated to the current request.
