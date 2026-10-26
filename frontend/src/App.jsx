import { useState } from "react";
import SedintaList from "./components/SedintaList.jsx";
import "./App.css";

const SEDINTE_INITIALE = [
  { id: 1, titlu: "Recuperare post-entorsă gleznă", efectuata: false, tip: "kinetoterapie" },
  { id: 2, titlu: "Masaj terapeutic zona cervicală", efectuata: true, tip: "masaj" },
  { id: 3, titlu: "Electroterapie lombară", efectuata: false, tip: "electroterapie" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [sedinte, setSedinte] = useState(SEDINTE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setSedinte((prev) =>
      prev.map((s) => (s.id === id ? { ...s, efectuata: !s.efectuata } : s))
    );
  }

  function handleDelete(id) {
    setSedinte((prev) => prev.filter((s) => s.id !== id));
  }

  // Comutare temă 
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Valoare derivată la fiecare randare
  const programate = sedinte.filter((s) => !s.efectuata).length;

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <symbol id="pin" viewBox="0 0 20 40">
            <path d="M10 0 L17 15 H13 L19 28 H11 V40 H9 V28 H1 L7 15 H3Z" style={{ fill: "var(--pine)" }} />
          </symbol>
          <symbol id="jeep" viewBox="0 0 120 60">
            <path d="M22 28 L33 9 H84 L95 28Z" style={{ fill: "var(--car)" }} />
            <rect x="8" y="26" width="104" height="18" rx="5" style={{ fill: "var(--car)" }} />
            <path d="M33 25 L40 13 H58 V25Z M62 13 H81 L88 25 H62Z" style={{ fill: "var(--glass-win)" }} />
            <path d="M38 6 H80" strokeWidth="3" strokeLinecap="round" style={{ stroke: "var(--rack)" }} />
            <circle cx="6" cy="34" r="8" style={{ fill: "var(--tire)" }} />
            <circle cx="111" cy="33" r="3" fill="#ffe9a8" />
            <circle cx="30" cy="46" r="13" style={{ fill: "var(--tire)" }} />
            <circle cx="30" cy="46" r="11" fill="none" strokeWidth="3" strokeDasharray="4 4" style={{ stroke: "var(--hub)" }} />
            <circle cx="30" cy="46" r="4.5" style={{ fill: "var(--hub)" }} />
            <circle cx="90" cy="46" r="13" style={{ fill: "var(--tire)" }} />
            <circle cx="90" cy="46" r="11" fill="none" strokeWidth="3" strokeDasharray="4 4" style={{ stroke: "var(--hub)" }} />
            <circle cx="90" cy="46" r="4.5" style={{ fill: "var(--hub)" }} />
          </symbol>
          <symbol id="i-labuta" viewBox="0 0 40 40">
            <ellipse cx="20" cy="27" rx="10" ry="8.5" fill="currentColor" />
            <ellipse cx="8" cy="16" rx="4" ry="5.5" transform="rotate(-18 8 16)" fill="currentColor" />
            <ellipse cx="16" cy="9" rx="4" ry="5.5" fill="currentColor" />
            <ellipse cx="24" cy="9" rx="4" ry="5.5" fill="currentColor" />
            <ellipse cx="32" cy="16" rx="4" ry="5.5" transform="rotate(18 32 16)" fill="currentColor" />
          </symbol>
          <symbol id="i-fulger" viewBox="0 0 40 40">
            <path d="M24 2 L8 23 H19 L15 38 L33 15 H22Z" fill="currentColor" />
          </symbol>
          <symbol id="i-vulpe" viewBox="0 0 40 40">
            <path d="M4 6 L14 12 H26 L36 6 C37 20 31 32 20 37 C9 32 3 20 4 6Z" fill="currentColor" />
            <path d="M12 26 C15 31 18 34 20 35 C22 34 25 31 28 26 C24 29 16 29 12 26Z" style={{ fill: "var(--disc)" }} />
            <circle cx="20" cy="33" r="2" fill="#1c1f22" />
            <circle cx="14" cy="21" r="1.8" style={{ fill: "var(--disc)" }} />
            <circle cx="26" cy="21" r="1.8" style={{ fill: "var(--disc)" }} />
          </symbol>
          <symbol id="vulpe" viewBox="0 0 120 92">
            <path d="M78 86 C114 90 120 54 100 38 C106 62 94 74 74 76Z" style={{ fill: "var(--fox)" }} />
            <path d="M100 38 C109 47 113 60 109 73 C106 61 102 49 100 38Z" fill="#fff" />
            <path d="M32 92 C30 72 40 62 55 62 C70 62 80 72 78 92Z" style={{ fill: "var(--fox)" }} />
            <path d="M46 92 C48 76 52 66 55 63 C58 66 62 76 64 92Z" fill="#fff" />
            <path d="M26 30 L36 5 L50 24 H60 L74 5 L84 30 C84 50 70 62 55 64 C40 62 26 50 26 30Z" style={{ fill: "var(--fox)" }} />
            <path d="M26 38 C34 44 44 56 55 64 C40 62 28 52 26 38Z M84 38 C76 44 66 56 55 64 C70 62 82 52 84 38Z" fill="#fff" />
            <path d="M41 36 L49 40 M69 36 L61 40" strokeWidth="3" strokeLinecap="round" style={{ stroke: "var(--fox-dark)" }} />
            <ellipse cx="55" cy="61" rx="4.5" ry="3.2" style={{ fill: "var(--fox-dark)" }} />
          </symbol>
          <symbol id="urs" viewBox="0 0 200 200">
            <ellipse cx="100" cy="142" rx="62" ry="52" style={{ fill: "var(--bear)" }} />
            <ellipse cx="100" cy="154" rx="34" ry="32" style={{ fill: "var(--bear-light)" }} opacity=".5" />
            <ellipse cx="46" cy="142" rx="15" ry="32" transform="rotate(14 46 142)" style={{ fill: "var(--bear)" }} />
            <ellipse cx="154" cy="142" rx="15" ry="32" transform="rotate(-14 154 142)" style={{ fill: "var(--bear)" }} />
            <ellipse cx="68" cy="190" rx="25" ry="9" style={{ fill: "var(--bear-dark)" }} />
            <ellipse cx="132" cy="190" rx="25" ry="9" style={{ fill: "var(--bear-dark)" }} />
            <circle cx="64" cy="44" r="15" style={{ fill: "var(--bear)" }} />
            <circle cx="136" cy="44" r="15" style={{ fill: "var(--bear)" }} />
            <circle cx="64" cy="46" r="7" style={{ fill: "var(--muzzle)" }} />
            <circle cx="136" cy="46" r="7" style={{ fill: "var(--muzzle)" }} />
            <circle cx="100" cy="80" r="43" style={{ fill: "var(--bear)" }} />
            <ellipse cx="100" cy="97" rx="20" ry="15" style={{ fill: "var(--muzzle)" }} />
            <ellipse cx="100" cy="89" rx="8" ry="5.5" fill="#1b110c" />
            <path d="M100 95 V101 M92 104 Q100 110 108 104" stroke="#1b110c" strokeWidth="2.4" fill="none" strokeLinecap="round" />
            <g className="ochi">
              <circle cx="81" cy="72" r="4.2" fill="#1b110c" />
              <circle cx="119" cy="72" r="4.2" fill="#1b110c" />
            </g>
          </symbol>
          <radialGradient id="halo">
            <stop offset="0" stopOpacity=".95" style={{ stopColor: "var(--sun-glow)" }} />
            <stop offset=".45" stopOpacity=".45" style={{ stopColor: "var(--sun-glow)" }} />
            <stop offset="1" stopOpacity="0" style={{ stopColor: "var(--sun-glow)" }} />
          </radialGradient>
          <linearGradient id="cet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopOpacity="0" style={{ stopColor: "var(--fog)" }} />
            <stop offset=".45" stopOpacity=".9" style={{ stopColor: "var(--fog)" }} />
            <stop offset="1" stopOpacity=".6" style={{ stopColor: "var(--fog)" }} />
          </linearGradient>
        </defs>
      </svg>

      <header className="app-header">
        {/* Butonul de comutare din Etapa 5 */}
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        <svg className="scene" viewBox="0 0 1000 380" preserveAspectRatio="xMidYMax meet" role="img" aria-label="Munți cu zăpadă, un lac, o cabană cu o mașină de off-road, un urs brun și o vulpe, sub un soare mare">
          <g className="soare" transform="translate(690 90)">
            <circle r="150" fill="url(#halo)" />
            <g className="raze" strokeWidth="4" strokeLinecap="round" style={{ stroke: "var(--sun-ray)" }}>
              <line y1="-58" y2="-86" />
              <line y1="-58" y2="-86" transform="rotate(30)" />
              <line y1="-58" y2="-86" transform="rotate(60)" />
              <line y1="-58" y2="-86" transform="rotate(90)" />
              <line y1="-58" y2="-86" transform="rotate(120)" />
              <line y1="-58" y2="-86" transform="rotate(150)" />
              <line y1="-58" y2="-86" transform="rotate(180)" />
              <line y1="-58" y2="-86" transform="rotate(210)" />
              <line y1="-58" y2="-86" transform="rotate(240)" />
              <line y1="-58" y2="-86" transform="rotate(270)" />
              <line y1="-58" y2="-86" transform="rotate(300)" />
              <line y1="-58" y2="-86" transform="rotate(330)" />
            </g>
            <circle r="42" style={{ fill: "var(--sun)" }} />
          </g>

          <path d="M-1500 230 H0 L80 150 L130 185 L220 108 L300 190 L380 140 L470 200 L560 118 L650 190 L760 98 L850 170 L930 130 L1000 180 H2500 V380H-1500Z" style={{ fill: "var(--far)" }} />
          <g style={{ fill: "var(--snow)" }} opacity=".95">
            <path d="M80 150 L96 172 L82 166 L68 174Z" />
            <path d="M220 108 L240 134 L222 128 L206 138Z" />
            <path d="M380 140 L394 160 L382 156 L368 164Z" />
            <path d="M560 118 L580 146 L562 140 L546 150Z" />
            <path d="M760 98 L782 128 L762 120 L744 132Z" />
            <path d="M930 130 L946 152 L932 146 L918 154Z" />
          </g>
          <path d="M-1500 285 H0 L100 212 L190 252 L300 192 L420 262 L520 200 L600 250 L1000 240 H2500 V380H-1500Z" style={{ fill: "var(--mid)" }} />
          <path d="M600 304 L740 236 L860 266 L1000 222 H2500 V380H600Z" style={{ fill: "var(--mid2)" }} />

          <path d="M250 300 C330 266 620 262 720 296 C640 330 360 336 250 300Z" style={{ fill: "var(--lake)" }} />
          <path d="M300 300 C380 278 600 276 680 296 C600 316 380 320 300 300Z" style={{ fill: "var(--lake-dark)" }} opacity=".35" />
          <g fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.6" strokeLinecap="round">
            <path d="M330 292 q30 -5 60 0 M450 284 q40 -5 80 0 M520 304 q40 -5 90 0 M380 310 q30 -4 60 0" />
          </g>

          <path d="M-1500 346 H0 C150 330 300 346 480 338 C640 330 740 306 1000 300 H2500 V380H-1500Z" style={{ fill: "var(--ground)" }} />
          <use href="#pin" x="262" y="300" width="20" height="40" />
          <use href="#pin" x="284" y="308" width="16" height="32" />
          <use href="#pin" x="688" y="270" width="20" height="40" />
          <use href="#pin" x="880" y="262" width="22" height="44" />
          <use href="#pin" x="904" y="272" width="18" height="36" />
          <use href="#pin" x="934" y="258" width="26" height="52" />

          <g className="cabana">
            <rect x="788" y="284" width="74" height="30" style={{ fill: "var(--wood)" }} />
            <path d="M788 292 H862 M788 300 H862 M788 308 H862" strokeWidth="1.2" opacity=".6" style={{ stroke: "var(--wood-dark)" }} />
            <rect x="845" y="250" width="8" height="18" style={{ fill: "var(--wood-dark)" }} />
            <path d="M776 286 L825 248 L874 286Z" style={{ fill: "var(--roof)" }} />
            <path d="M790 278 L825 251 L860 278 L852 278 L825 258 L798 278Z" style={{ fill: "var(--snow)" }} />
            <path d="M838 314 V298 C838 290 852 290 852 298 V314Z" style={{ fill: "var(--roof)" }} />
            <rect x="796" y="292" width="16" height="14" style={{ fill: "var(--win)" }} />
            <path d="M804 292 V306 M796 299 H812" strokeWidth="1.5" style={{ stroke: "var(--wood-dark)" }} />
            <rect x="832" y="314" width="26" height="4" style={{ fill: "var(--wood-dark)" }} />
            <g className="fum" fill="#fff" opacity=".6">
              <circle cx="849" cy="244" r="4" />
              <circle cx="853" cy="236" r="5.5" />
              <circle cx="850" cy="226" r="7" />
            </g>
          </g>

          <use href="#jeep" x="716" y="288" width="54" height="27" />
          <use href="#vulpe" x="440" y="298" width="86" height="66" />
          <use href="#urs" x="14" y="150" width="220" height="220" />
        </svg>

        <div className="header-text">
          <h1>TopFizioKinetic</h1>
          <p className="tagline">Recuperare cu răbdare și pași siguri!</p>
          <p className="app-count">
            {sedinte.length} ședințe, dintre care {programate} programate
          </p>
        </div>
      </header>

      <main className="container">
        <section className="panel panel-form">
          <h2>Adaugă ședință</h2>
          <form className="item-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Titlu ședință
              <input type="text" name="titlu" maxLength={100} placeholder="Ex: Recuperare post-entorsă gleznă" />
            </label>
            <label>
              Tip terapie
              <select name="tip" defaultValue="kinetoterapie">
                <option value="kinetoterapie">Kinetoterapie</option>
                <option value="electroterapie">Electroterapie</option>
                <option value="masaj">Masaj terapeutic</option>
              </select>
            </label>
            <button type="submit">Adaugă</button>
          </form>
        </section>

        <section className="panel panel-list">
          <h2>Ședințele mele</h2>
          <SedintaList
            sedinte={sedinte}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <footer className="app-footer">
        <p className="motto">Un pas după altul, până în vârf.</p>
      </footer>
    </>
  );
}