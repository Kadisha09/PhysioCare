# PhysioCare

PhysioCare is a management application designed for physiotherapy clinics to monitor patient therapy sessions, assigned equipment, and appointment status. It allows physiotherapists to organize daily appointments efficiently by procedure type and recovery progress.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| session_name | text | required, patient name and treatment objective (max 100 chars) |
| completed | boolean | session status toggled from the list, default false |
| procedure_type | fixed values | Laser, Tecar, Kineto |
| department | relation | Ortopedie, Recuperare Sportiva, Neurologie |
| therapist | relation | the therapist assigned to the session |

Sample data used across all stages:
1. Kinetoterapie - Recuperare ligament, active, Kineto
2. Terapie Laser - Dureri lombare, done, Laser
3. Terapie Tecar - Tendinita umar, active, Tecar

## AI usage

| Tool | Used for |
| :--- | :--- |
| Gemini | Structuring HTML sematics, and drafting documentation |

Details per stage: see the `ai-log/` folder.

## How to run

Open `index.html` directly in any modern web browser. No build step, no server required.

## Stage 2: data logic
Plain JavaScript, no DOM. `sedinte.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173/).

## Stage 4: components
The list is rendered from the data, through two components:
- `SedintaList` receives the whole array and renders one card per item
- `SedintaCard` receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

## Stage 6: data from a mock API
The list is served by json-server from `db.json`. The app fetches it on load
and shows a loading state and an error state.
 npm run api # terminal 1, http://localhost:3001
 npm run dev # terminal 2, http://localhost:5173

## Stage 7: form and validation
Tasks can be added from the page. The form is controlled and validated,
and every change (add, toggle, delete) goes to the API before it shows up
in the list.

## Stage 8: routing and detail page
Three pages behind React Router: the list, a detail page at `/tasks/:id`,
and an about page, plus a 404 page. Component styles moved to CSS Modules.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [ ] Stage 9: own backend with Express

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/Kadisha09/PhysioCare/blob/26259ef0f0e129116d34046f97a10cb4d2596f6f/index.html#L10-L65 | open the page |
| S1-R5 | finished card looks different |  https://github.com/Kadisha09/PhysioCare/blob/26259ef0f0e129116d34046f97a10cb4d2596f6f/style.css#L162-L169 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/Kadisha09/PhysioCare/blob/26259ef0f0e129116d34046f97a10cb4d2596f6f/style.css#L171-L175 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | https://github.com/Kadisha09/PhysioCare/blob/26259ef0f0e129116d34046f97a10cb4d2596f6f/style.css#L177-L191 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | https://github.com/Kadisha09/PhysioCare/commit/26259ef0f0e129116d34046f97a10cb4d2596f6f | commit history |


## Verification table 2

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | https://github.com/Kadisha09/PhysioCare/blob/15a2ec7a3c09587223bb7c990b3be345d3f2764d/index.html#L217 | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | https://github.com/Kadisha09/PhysioCare/blob/15a2ec7a3c09587223bb7c990b3be345d3f2764d/sedinte.js#L4-L8 | read |
| S2-R3 | list, count, search, add, toggle, delete | https://github.com/Kadisha09/PhysioCare/blob/15a2ec7a3c09587223bb7c990b3be345d3f2764d/sedinte.js#L12-L57| console output |
| S2-R4 | add rejects empty name and invalid tag | https://github.com/Kadisha09/PhysioCare/blob/15a2ec7a3c09587223bb7c990b3be345d3f2764d/sedinte.js#L37-L44 | last 2 console lines |
| S2-R5 | original array unchanged after add | https://github.com/Kadisha09/PhysioCare/blob/15a2ec7a3c09587223bb7c990b3be345d3f2764d/sedinte.js#L68| console line |
| S2-R6 | README Stage 2 section + AI log |https://github.com/Kadisha09/PhysioCare/blob/51af01791ac942a4e8e1794f2df64f1a307498f1/README.md?plain=1#L32git status-L39 | https://github.com/Kadisha09/PhysioCare/blob/51af01791ac942a4e8e1794f2df64f1a307498f1/ai-log/etapa-02.md?plain=1#L1-L28 | read |
| S2-R7 | commit “Stage 2” pushed | https://github.com/Kadisha09/PhysioCare/commit/15a2ec7a3c09587223bb7c990b3be345d3f2764d | commit history |



## Verification table 3
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S3-R1 | npm run dev starts without errors | [frontend/package.json]https://github.com/Kadisha09/PhysioCare/blob/c92198820f58ab30d9eb169814ae574f11b848ef/frontend/package.json#L1-L27 | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L153-L164] https://github.com/Kadisha09/PhysioCare/blob/c92198820f58ab30d9eb169814ae574f11b848ef/frontend/src/App.jsx#L153-L164| edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx#L1-L5]https://github.com/Kadisha09/PhysioCare/blob/c92198820f58ab30d9eb169814ae574f11b848ef/frontend/src/App.jsx#L1-L5 | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css] https://github.com/Kadisha09/PhysioCare/blob/c92198820f58ab30d9eb169814ae574f11b848ef/frontend/src/App.css | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore]https://github.com/Kadisha09/PhysioCare/blob/c92198820f58ab30d9eb169814ae574f11b848ef/frontend/.gitignore#L10 | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md]https://github.com/Kadisha09/PhysioCare/blob/c92198820f58ab30d9eb169814ae574f11b848ef/README.md?plain=1#L36-L49, [ai-log/etapa-03.md] https://github.com/Kadisha09/PhysioCare/blob/c92198820f58ab30d9eb169814ae574f11b848ef/ai-log/etapa-03.md | read |
| S3-R7 | commit “Stage 3” pushed | https://github.com/Kadisha09/PhysioCare/commit/a7abf91649f0cd8f696f44b2a5a677ed4a07e8a5 | commit history |



## Verification table 4
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/]https://github.com/Kadisha09/PhysioCare/tree/main/frontend/src/components | open folder |
| S4-R2 | card receives data through props | [SedintaCard.jsx#L19-L42]https://github.com/Kadisha09/PhysioCare/blob/86180ccecfc35d6564edc85e92812a449f38dc24/frontend/src/components/SedintaCard.jsx#L19-L42 | read |
| S4-R3 | map + key={id}, no console warnings | [SedintaList.jsx#L10-L14]https://github.com/Kadisha09/PhysioCare/blob/86180ccecfc35d6564edc85e92812a449f38dc24/frontend/src/components/SedintaList.jsx#L10-L14 | F12, Console |
| S4-R4 | message for empty list | [SedintaList.jsx#L4-L6]https://github.com/Kadisha09/PhysioCare/blob/86180ccecfc35d6564edc85e92812a449f38dc24/frontend/src/components/SedintaList.jsx#L4-L6 | set array to [] |
| S4-R5 | state changes the card look | [SedintaCard.jsx#L25]https://github.com/Kadisha09/PhysioCare/blob/86180ccecfc35d6564edc85e92812a449f38dc24/frontend/src/components/SedintaCard.jsx#L25 | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md]https://github.com/Kadisha09/PhysioCare/blob/main/README.md, [ai-log/etapa-04.md]https://github.com/Kadisha09/PhysioCare/blob/main/ai-log/etapa-04.md | read |
| S4-R7 | commit “Stage 4” pushed | [commit Stage 4]https://github.com/Kadisha09/PhysioCare/commit/86180ccecfc35d6564edc85e92812a449f38dc24 | commit history |


## Verification table 5
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S5-R1 | list kept in useState, in App | [App.jsx#L16] https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/App.jsx#L16 | read |
| S5-R2 | toggling changes state and card look | [App.jsx#L..-L19-L23]https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/App.jsx#L19-L23, [SedintaCard.jsx#L25-L31]https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/components/SedintaCard.jsx#L25-L31 | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx#L25-L27]https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/App.jsx#L25-L27, [SedintaCard.jsx#L49-L56]https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/components/SedintaCard.jsx#L49-L56 | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx#L37]https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/App.jsx#L37 | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx#L19-L27]https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/App.jsx#L19-L27| read |
| S5-R6 | light / dark toggle: state + data-theme on html | [App.jsx#L30-L34] https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/App.jsx#L30-L34, [App.css#L127-L177]https://github.com/Kadisha09/PhysioCare/blob/d71e3b13ef76d8cfa613d720aa4e0ccc1839a4b2/frontend/src/App.css#L127-L177 | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md]https://github.com/Kadisha09/PhysioCare/blob/main/README.md#stage-5-local-state-and-events, [ai-log/etapa-05.md]https://github.com/Kadisha09/PhysioCare/blob/main/ai-log/etapa-05.md | F12, Console |
| S5-R8 | commit “Stage 5” pushed | [commit Stage 5]https://github.com/Kadisha09/PhysioCare/commit/31f8a866bcdb5b13416eb4551faa773f05bf1a0e | commit history |


## Verification table 6

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S6-R1 | `npm run api` starts, route shows JSON | https://github.com/Kadisha09/PhysioCare/blob/b9975d6ed60a34ceef8fa6141640eb9796e96313/frontend/package.json#L11 , https://github.com/Kadisha09/PhysioCare/blob/main/frontend/db.json | open `http://localhost:3001/sedinte` |
| S6-R2 | data no longer in React code | https://github.com/Kadisha09/PhysioCare/blob/b9975d6ed60a34ceef8fa6141640eb9796e96313/frontend/src/App.jsx#L11 | read |
| S6-R3 | loading message while waiting | https://github.com/Kadisha09/PhysioCare/blob/b9975d6ed60a34ceef8fa6141640eb9796e96313/frontend/src/App.jsx#L243 | `--delay 4000` |
| S6-R4 | error message when API is down | https://github.com/Kadisha09/PhysioCare/blob/b9975d6ed60a34ceef8fa6141640eb9796e96313/frontend/src/App.jsx#L244-L248 | stop `npm run api`, refresh |
| S6-R5 | `fetch` only in `api.js`, URL from env | https://github.com/Kadisha09/PhysioCare/blob/b9975d6ed60a34ceef8fa6141640eb9796e96313/frontend/src/api.js#L1-L10, https://github.com/Kadisha09/PhysioCare/blob/b9975d6ed60a34ceef8fa6141640eb9796e96313/frontend/.env.example#L1-L2 | search for `fetch` |
| S6-R6 | README Stage 6 section + AI log | https://github.com/Kadisha09/PhysioCare/blob/main/README.md, https://github.com/Kadisha09/PhysioCare/blob/main/ai-log/etapa-06.md | read |
| S6-R7 | commit `"Stage 6"` pushed | https://github.com/Kadisha09/PhysioCare/commit/711026db1bcafb780e33b9897a8880c1f90255f2, https://github.com/Kadisha09/PhysioCare/commit/b9975d6ed60a34ceef8fa6141640eb9796e96313 | commit history |

## Verification table 7

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S7-R1 | controlled form: `value` + `onChange` on every field | https://github.com/Kadisha09/PhysioCare/blob/bddb0e2adf64960655070a5fe2bd602c3a2bdbbf/frontend/src/components/SedintaForm.jsx#L54-L80| read |
| S7-R2 | empty title shows an error, nothing is sent | https://github.com/Kadisha09/PhysioCare/blob/bddb0e2adf64960655070a5fe2bd602c3a2bdbbf/frontend/src/components/SedintaForm.jsx#L17-L24| submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh | https://github.com/Kadisha09/PhysioCare/blob/bddb0e2adf64960655070a5fe2bd602c3a2bdbbf/frontend/src/App.jsx#L43-L46, https://github.com/Kadisha09/PhysioCare/blob/bddb0e2adf64960655070a5fe2bd602c3a2bdbbf/frontend/src/api.js#L24-L29 | add, refresh |
| S7-R4 | toggle and delete survive refresh | https://github.com/Kadisha09/PhysioCare/blob/bddb0e2adf64960655070a5fe2bd602c3a2bdbbf/frontend/src/App.jsx#L48-L69 | toggle/delete, refresh |
| S7-R5 | button disabled while sending, form cleared only on success | https://github.com/Kadisha09/PhysioCare/blob/bddb0e2adf64960655070a5fe2bd602c3a2bdbbf/frontend/src/components/SedintaForm.jsx#L26-L45 | `--delay 3000`; stop API and submit |
| S7-R6 | `tw.json` and the `data-testid` attributes | https://github.com/Kadisha09/PhysioCare/blob/main/tw.json, https://github.com/Kadisha09/PhysioCare/blob/bddb0e2adf64960655070a5fe2bd602c3a2bdbbf/frontend/src/components/SedintaCard.jsx#L24-L64 | `querySelectorAll` in the console |
| S7-R7 | README Stage 7 section + AI log |https://github.com/Kadisha09/PhysioCare/blob/main/README.md, https://github.com/Kadisha09/PhysioCare/blob/main/ai-log/etapa-07.md | read |
| S7-R8 | commit `"Stage 7"` pushed | https://github.com/Kadisha09/PhysioCare/commit/bddb0e2adf64960655070a5fe2bd602c3a2bdbbf| commit history |

## Verification table 8

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S8-R1 | header navigation changes page without reload | https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/App.jsx#L10-L17, https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/components/Layout.jsx#L254-L261 | click links, watch Network |
| S8-R2 | click on an item opens its detail page | https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/components/SedintaCard.jsx#L31-L37, https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/pages/SedintaDetaliuPage.jsx#L7-L32 | click a title |
| S8-R3 | refresh on the detail URL works; missing id shows an error | https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/pages/SedintaDetaliuPage.jsx#L42-L51 | refresh `/sedinte/1`, open `/sedinte/999` |
| S8-R4 | unknown URL shows the app 404 page | https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/App.jsx#L15, https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/pages/NotFoundPage.jsx#L3-L10 | open `/ceva` |
| S8-R5 | each component has its `.module.css`; `index.css` only shared styles | https://github.com/Kadisha09/PhysioCare/tree/main/frontend/src/components, https://github.com/Kadisha09/PhysioCare/tree/main/frontend/src/pages, https://github.com/Kadisha09/PhysioCare/blob/main/frontend/src/index.css | read |
| S8-R6 | `data-testid` attributes from tables 7.3 and 8.2; detail route `/<resource>/:id` | https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/components/Layout.jsx#L254, https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/components/SedintaCard.jsx#L34,https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/pages/SedintaDetaliuPage.jsx#L54-L60, https://github.com/Kadisha09/PhysioCare/blob/370bd843138b382aff3231fd14010534da1f842a/frontend/src/pages/NotFoundPage.jsx#L5| `querySelector` in the console |
| S8-R7 | README Stage 8 section + AI log |https://github.com/Kadisha09/PhysioCare/blob/main/README.md, https://github.com/Kadisha09/PhysioCare/blob/main/ai-log/etapa-08.md | read |
| S8-R8 | commit `"Stage 8"` pushed |https://github.com/Kadisha09/PhysioCare/commit/5c6a97f4b7d2d56d2689eb1b4ce9dad7af92b70f | commit history |