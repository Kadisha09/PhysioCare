const ETICHETE_TIP = {
  fizioterapie: "Fizioterapie",
  kinetoterapie: "Kinetoterapie",
  masaj: "Masaj terapeutic",
  electroterapie: "Electroterapie",
  recuperare: "Recuperare"
};

export default function SedintaCard({ sedinta }) {
  return (
    <li className={sedinta.efectuata ? "task-card done" : "task-card"}>
      <div>
        <h3>{sedinta.titlu}</h3>
        <span className={`badge badge-${sedinta.tip}`}>
          {ETICHETE_TIP[sedinta.tip] || sedinta.tip}
        </span>
      </div>
      <span className="status">
        {sedinta.efectuata ? "Efectuată" : "Programată"}
      </span>
    </li>
  );
}