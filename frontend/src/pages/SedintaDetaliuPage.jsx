import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSedinta } from "../api.js";
import { ETICHETA_TIP } from "../constants.js";
import styles from "./SedintaDetaliuPage.module.css";

export default function SedintaDetaliuPage() {
  const { id } = useParams();
  const [sedinta, setSedinta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchSedinta(id)
      .then((data) => {
        if (!ignore) {
          setSedinta(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile ședinței...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Ședința nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la listă
      </Link>
      <h2
        className={sedinta.efectuata ? styles.done : undefined}
        data-testid="detail-title"
      >
        {sedinta.titlu}
      </h2>
      <dl className={styles.fields}>
        <dt>Tip terapie</dt>
        <dd>
          <span className={`badge badge-${sedinta.tip}`}>
            {ETICHETA_TIP[sedinta.tip] || sedinta.tip}
          </span>
        </dd>
        <dt>Status</dt>
        <dd>{sedinta.efectuata ? "Efectuată" : "Programată"}</dd>
        <dt>ID</dt>
        <dd>{sedinta.id}</dd>
      </dl>
    </section>
  );
}