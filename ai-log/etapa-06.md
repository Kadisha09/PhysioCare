# Stage 6: AI log

## Tools
- Google Gemini

## Conversations
- https://share.gemini.google/zs0nyDVr7C7Z

## Key requests
I requested guidance for migrating the session list from hardcoded React data to a mock REST API using `json-server@0.17.4` and `db.json` on port 3001, creating a centralized `src/api.js` module with `fetchSedinte()` and environment variable configuration (`VITE_API_URL`), loading the data on mount in `App.jsx` via `useEffect` with an `ignore` cleanup flag, and handling the three asynchronous UI states (`loading`, `error`, and success) along with dedicated error styling in `App.css`.

## What I learned / what did not work
- `fetch` does not reject on HTTP error statuses like 404 or 500; checking `res.ok` explicitly and throwing an error is required to catch server failures.
- In development mode, React mounts components twice, triggering two requests in the Network tab; using an `ignore` boolean flag in the `useEffect` cleanup function prevents setting state if the component unmounts before the response arrives.
- Installing `json-server` without pinning version `0.17.4` installs v1.x, which generates random string IDs instead of sequential numeric IDs.
