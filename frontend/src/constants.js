export const TIPURI_TERAPIE = [
  { value: "kinetoterapie", label: "Kinetoterapie" },
  { value: "electroterapie", label: "Electroterapie" },
  { value: "masaj", label: "Masaj terapeutic" },
];

export const ETICHETA_TIP = Object.fromEntries(
  TIPURI_TERAPIE.map((t) => [t.value, t.label])
);

export const ICON_TIP = {
  kinetoterapie: "#i-labuta",
  masaj: "#i-vulpe",
  electroterapie: "#i-fulger",
};