import SedintaCard from "./SedintaCard.jsx";

export default function SedintaList({ sedinte, onToggle, onDelete }) {
  if (!sedinte || sedinte.length === 0) {
    return <p className="empty">Nu există nicio ședință înregistrată.</p>;
  }

  return (
    <ul className="item-list">
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