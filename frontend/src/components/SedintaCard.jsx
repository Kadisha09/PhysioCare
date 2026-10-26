const CLASA_TIP = {
  kinetoterapie: "t-kineto",
  masaj: "t-masaj",
  electroterapie: "t-electro"
};

const ETICHETA_TIP = {
  kinetoterapie: "Kinetoterapie",
  masaj: "Masaj terapeutic",
  electroterapie: "Electroterapie"
};

const ICON_TIP = {
  kinetoterapie: "#i-labuta",
  masaj: "#i-vulpe",
  electroterapie: "#i-fulger"
};

export default function SedintaCard({ sedinta }) {
  const tipClasa = CLASA_TIP[sedinta.tip] || "";
  const iconHref = ICON_TIP[sedinta.tip] || "#i-labuta";
  const eticheta = ETICHETA_TIP[sedinta.tip] || sedinta.tip;

  return (
    <li className={`item-card ${tipClasa} ${sedinta.efectuata ? "done" : ""}`}>
      <div className="item-info">
        <span className="disc">
          <svg aria-hidden="true">
            <use href={iconHref} />
          </svg>
        </span>
        <div>
          <h3>{sedinta.titlu}</h3>
          <span className={`badge badge-${sedinta.tip}`}>{eticheta}</span>
        </div>
      </div>
      <span className="status">
        {sedinta.efectuata ? "Efectuată" : "Programată"}
      </span>
    </li>
  );
}