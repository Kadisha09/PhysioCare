import { useState } from "react";
import { TIPURI_TERAPIE } from "../constants.js";
import styles from "./SedintaForm.module.css";

const TITLU_MAX = 100;

export default function SedintaForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [tip, setTip] = useState("kinetoterapie");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul ședinței este obligatoriu.";
    if (t.length > TITLU_MAX) {
      return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onAdd({ titlu: titlu.trim(), tip, efectuata: false });
      setTitlu("");
      setTip("kinetoterapie");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Titlu ședință
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Recuperare post-entorsă gleznă"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Tip terapie
        <select
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          data-testid="form-tip"
        >
          {TIPURI_TERAPIE.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button
        type="submit"
        className="btn"
        disabled={trimite}
        data-testid="form-submit"
      >
        {trimite ? "Se salvează..." : "Adaugă"}
      </button>
    </form>
  );
}