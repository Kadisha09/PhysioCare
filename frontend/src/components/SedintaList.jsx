import SedintaCard from "./SedintaCard.jsx";
import styles from "./SedintaList.module.css";

export default function SedintaList({ sedinte, onToggle, onDelete }) {
  if (!sedinte || sedinte.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există nicio ședință înregistrată.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {sedinte.map((sedinta) => (
        <SedintaCard
          key={sedinta.id}
          sedinta={sedinta}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}