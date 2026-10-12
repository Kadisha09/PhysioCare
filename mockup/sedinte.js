// TopFizioKinetic - Etapa 2: logica pe date 

//  Pasul 2: datele de test și valorile permise 
const sedinte = [
  { id: 1, titlu: "Recuperare post-entorsă gleznă", efectuata: false, tip: "kinetoterapie" },
  { id: 2, titlu: "Masaj terapeutic zona cervicală", efectuata: true, tip: "masaj" },
  { id: 3, titlu: "Electroterapie lombară", efectuata: false, tip: "electroterapie" },
];

const TIPURI = ["kinetoterapie", "electroterapie", "masaj"];

//  Pasul 3: listarea titlurilor 
function listeazaTitluri(lista) {
  return lista.map((s) => s.titlu);
}

//  Pasul 4: numărarea ședințelor programate (cele neefectuate)
function numaraProgramate(lista) {
  return lista.filter((s) => !s.efectuata).length;
}

//  Pasul 5: căutarea după titlu, fără diferență între litere mari și mici
function cautaDupaTitlu(lista, text) {
  const cautat = text.toLowerCase();
  return lista.filter((s) => s.titlu.toLowerCase().includes(cautat));
}

//  Pasul 6: adăugarea cu validare 
// Id nou = cel mai mare id existent + 1 (lista.length + 1 ar produce id-uri duplicate după ștergere)
function nextId(lista) {
  return lista.reduce((max, s) => Math.max(max, s.id), 0) + 1;
}

function adaugaSedinta(lista, titlu, tip = "kinetoterapie") {
  const titluCurat = titlu.trim();

  if (titluCurat === "") {
    console.log("Titlul nu poate fi gol.");
    return lista; // lista neschimbată
  }
  if (!TIPURI.includes(tip)) {
    console.log("Tip de terapie invalid: " + tip);
    return lista; // lista neschimbată
  }

  const noua = { id: nextId(lista), titlu: titluCurat, efectuata: false, tip: tip };
  return [...lista, noua]; // array nou, originalul rămâne neschimbat
}

//  Pasul 7: comutarea stării și ștergerea 
function comutaEfectuata(lista, id) {
  return lista.map((s) => (s.id === id ? { ...s, efectuata: !s.efectuata } : s));
}

function stergeSedinta(lista, id) {
  return lista.filter((s) => s.id !== id);
}

//  Pasul 8: testele din consolă, grupate pe secțiuni 
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(sedinte).join(", "));
console.log("Programate:", numaraProgramate(sedinte));
console.log("Căutare 'masaj':", listeazaTitluri(cautaDupaTitlu(sedinte, "masaj")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaSedinta(sedinte, "Evaluare inițială", "kinetoterapie");
console.log("Lista nouă:", lista.length, "ședințe");
console.log("Originalul a rămas cu:", sedinte.length, "ședințe");

console.log("--- Modificare și ștergere ---");
lista = comutaEfectuata(lista, 1);
console.log("După bifarea id 1, programate:", numaraProgramate(lista));
lista = stergeSedinta(lista, 3);
console.log("După ștergerea id 3:", listeazaTitluri(lista).join(", "));

console.log("--- Validare ---");
adaugaSedinta(lista, "   ");
adaugaSedinta(lista, "Ceva", "urgenta");