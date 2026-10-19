import SedintaCard from "./SedintaCard.jsx";

export default function SedintaList({ sedinte }) {
  // 1. Verificare listă goală
  if (!sedinte || sedinte.length === 0) {
    return <p className="empty">Nu există nicio ședință înregistrată.</p>;
  }

  // 2. Randarea listei prin map cu cheia stabilă 'key={sedinta.id}'
  return (
    <ul className="task-list">
      {sedinte.map((sedinta) => (
        <SedintaCard key={sedinta.id} sedinta={sedinta} />
      ))}
    </ul>
  );
}