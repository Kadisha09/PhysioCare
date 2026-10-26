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

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: Components and props

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