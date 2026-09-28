# PhysioCare

PhysioCare is a management application designed for physiotherapy clinics to monitor patient therapy sessions, assigned equipment, and appointment status. It allows physiotherapists to organize daily appointments efficiently by procedure type and recovery progress.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| session_name | text | required, patient name and treatment objective (max 100 chars) |
| completed | boolean | session status toggled from the list, default false |
| procedure_type` | fixed values | Laser, Tecar, Kineto |
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