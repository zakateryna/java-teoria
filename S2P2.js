// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy


// 1. totale del carrello

let totaleCarrello = 0
for (let i = 0; i < prices.length; i++) {
  totaleCarrello += prices[i]
}

// 2. Se l'utente è ambassador, sconto del 30%
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  totaleCarrello *= 0.7
}

// 3. Aggiunta della spedizione (se necessario)
if (totaleCarrello <= 100) {
  totaleCarrello += shippingCost
}

// 4. totale finale
console.log(`Totale per ${utenteCheEffettuaLAcquisto.name} ${utenteCheEffettuaLAcquisto.lastName}: €${totaleCarrello.toFixed(2)}`)


//ARRAY DI UTENTI

const utenti = []
utenti.push(marco)
utenti.push(paul)
utenti.push(amy)

// 5. se sono ambassador
for (let i = 0; i < utenti.length; i++) {
  const utente = utenti[i]
  if (utente.isAmbassador) {
    console.log(`${utente.name} ${utente.lastName} è un ambassador`)
  } else {
    console.log(`${utente.name} ${utente.lastName} non è un ambassador`)
  }
}

// 6. solo ambassador
const ambassadorOnly = []

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador) {
    ambassadorOnly.push(utenti[i])
  }
}

// 7. ambassador trovati
console.log("Ambassador trovati:", ambassadorOnly.map(u => u.name + " " + u.lastName).join(", "))