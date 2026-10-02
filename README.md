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

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
-

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