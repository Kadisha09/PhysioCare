# Stage 7: AI log

## Tools
- Google Gemini

## Conversations
- https://share.gemini.google/keJ1XRgC50Ie

## Key requests
I requested guidance for extending `src/api.js` with a centralized `request()` wrapper and CRUD functions (`createSedinta`, `updateSedinta`, `deleteSedinta`), building the controlled `SedintaForm` component with client-side validation (required title, max 100 characters), inline error display, and double-submit protection (`Se salvează...`), refactoring `handleAdd`, `handleToggle`, and `handleDelete` in `App.jsx` to persist changes on the server before updating React state, and configuring `tw.json` along with all required `data-testid` attributes for automated testing.

## What I learned / what did not work
- Updating React state only after `await` resolves guarantees that the UI reflects what the server actually saved (including the server-generated numeric `id`).
- Keeping `handleAdd` without a `try/catch` block in `App.jsx` allows network or server errors to bubble back up to `SedintaForm`, where the error is displayed near the inputs without clearing the user's typed text.
- Handling `res.status === 204` in `request()` prevents `res.json()` from throwing an `Unexpected end of JSON input` error on empty responses.