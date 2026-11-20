# Stage 8: AI log

## Tools
- Google Gemini

## Conversations
- https://share.gemini.google/O0GrEKHkI8ZW

## Key requests
I asked for help understanding how to configure `react-router-dom` so that the header and footer stay persistent across all pages, how to create a dynamic detail page (`/sedinte/:id`) when clicking on a session, why the main navigation link remained highlighted as active when visiting `/despre`, how to split component styles into CSS Modules (`.module.css`) without breaking the global light/dark theme variables, and how to fix the blank screen (`Invalid hook call`) error encountered in Vite after installing `react-router-dom`.

## What I learned / what did not work
- Using a parent `<Route element={<Layout />}>` with `<Outlet />` keeps the header, navigation bar, and footer persistent across routes, while `useParams()` reads the `:id` parameter on the detail page.
- Adding the `end` prop to the root `<NavLink to="/" end>` prevents the main route from staying marked as active when navigating to subroutes like `/despre`.
- Moving component-specific rules into `.module.css` files while keeping global CSS custom properties (`--bg`, `--ink`, etc.) in `src/index.css` scopes class names locally without breaking light/dark theme switching.
- Installing `react-router-dom` caused an `Invalid hook call` blank screen due to cached Vite dependency bundles in `node_modules/.vite`; clearing the Vite cache and aligning the `react`, `react-dom`, and `react-router-dom` packages resolved the issue.