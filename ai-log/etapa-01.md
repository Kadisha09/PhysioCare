# Stage 1: AI log

## Tools
- Google Gemini

## Conversations
- https://share.gemini.google/70HjCfMmpdzQ

## Key requests
### 1. Data model mapping for PhysioCare
- Asked: How to map the 5 required TaskFlow fields to a physical therapy domain.
- Got: Suggested mapping patient name, session status, procedure stage, therapy category, and therapist.
- Changed or rejected: Kept the exact 2-column layout and core structure from the lab template.
### 2. Form validation
- Asked: How to prevent submitting empty fields in HTML without JavaScript.
- Got: Recommendations for native HTML5 attributes like `required` and placeholder setup on `<select>`.
- Changed or rejected: Kept only the `required` attribute on inputs to keep the markup minimal.
### 3. CSS variables for dark mode
- Asked: How CSS variables in `:root` and `@media (prefers-color-scheme: dark)` enable dark mode.
- Got: Explanation of redefining only color variables instead of duplicating CSS rules.
- Changed or rejected: Used `:root` variables in `style.css` to handle both themes cleanly.

## What I learned / what did not work
- Native `required` handles basic form blocking directly in HTML.
- The first `<option>` in a `<select>` needs `value=""` for `required` to work.
- CSS variables make responsive and dark mode styling much simpler to maintain without duplicated rules.
