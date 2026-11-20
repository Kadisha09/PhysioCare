import { Link } from "react-router-dom";
import { ETICHETA_TIP, ICON_TIP } from "../constants.js";
import styles from "./SedintaCard.module.css";

export default function SedintaCard({ sedinta, onToggle, onDelete }) {
  const tipClasa = styles[sedinta.tip] || "";
  const iconHref = ICON_TIP[sedinta.tip] || "#i-labuta";
  const eticheta = ETICHETA_TIP[sedinta.tip] || sedinta.tip;

  return (
    <li
      className={`${styles.card} ${tipClasa} ${sedinta.efectuata ? styles.done : ""}`}
      data-testid="item"
      data-id={sedinta.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={sedinta.efectuata}
          onChange={() => onToggle(sedinta.id)}
          aria-label={`Marchează ${sedinta.titlu}`}
          data-testid="item-toggle"
        />
        <div className={styles.info}>
          <span className={styles.disc}>
            <svg aria-hidden="true">
              <use href={iconHref} />
            </svg>
          </span>
          <div>
            <Link
              to={`/sedinte/${sedinta.id}`}
              className={styles.title}
              data-testid="item-link"
            >
              {sedinta.titlu}
            </Link>
            <span className={`badge badge-${sedinta.tip}`}>{eticheta}</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <span className={styles.status}>
          {sedinta.efectuata ? "Efectuată" : "Programată"}
        </span>
        <button
          type="button"
          className="btn-danger"
          onClick={() => onDelete(sedinta.id)}
          aria-label={`Șterge ${sedinta.titlu}`}
          data-testid="item-delete"
        >
          Șterge
        </button>
      </div>
    </li>
  );
}