# Stage 5: AI log

## Tools
- Google Gemini

## Conversations
- https://share.gemini.google/iMW5dvXvi7dG

## Key requests
I requested guidance for moving the data list into useState in App.jsx, implementing immutable functions for toggling (handleToggle with map and the spread operator) and deleting (handleDelete with filter), passing the handlers down via props to SedintaList and SedintaCard, computing the header counter as a derived value directly on render without redundant state, and adding an accessible theme toggle (light/dark) synchronized via the data-theme attribute on <html>.

## What I learned / what did not work
- Keeping a separate useState for counters causes desynchronization; computing them as derived values on render is the correct approach.
- Directly mutating the array (push, splice) does not trigger a re-render; state updates must be strictly immutable (map, filter).
