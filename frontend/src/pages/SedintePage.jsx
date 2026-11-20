import { useEffect, useState } from "react";
import SedintaList from "../components/SedintaList.jsx";
import SedintaForm from "../components/SedintaForm.jsx";
import {
  createSedinta,
  deleteSedinta,
  fetchSedinte,
  updateSedinta,
} from "../api.js";
import styles from "./SedintePage.module.css";

export default function SedintePage() {
  const [sedinte, setSedinte] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchSedinte();
        if (!ignore) setSedinte(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(sedinta) {
    const creata = await createSedinta(sedinta);
    setSedinte((prev) => [...prev, creata]);
  }

  async function handleToggle(id) {
    const sedinta = sedinte.find((s) => s.id === id);
    try {
      const actualizata = await updateSedinta(id, {
        efectuata: !sedinta.efectuata,
      });
      setSedinte((prev) =>
        prev.map((s) => (s.id === id ? actualizata : s))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteSedinta(id);
      setSedinte((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const programate = sedinte.filter((s) => !s.efectuata).length;

  return (
    <div className={styles.grid}>
      <section className={`panel ${styles.formPanel}`}>
        <h2>Adaugă ședință</h2>
        <SedintaForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Ședințele mele</h2>
        <p className={styles.summary}>
          {sedinte.length} ședințe, dintre care {programate} programate
        </p>

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă ședințele...
          </p>
        )}
        {error && (
          <p className="error" data-testid="error">
            Nu am putut încărca datele: {error}
          </p>
        )}
        {!loading && (
          <SedintaList
            sedinte={sedinte}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}