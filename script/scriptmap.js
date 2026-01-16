const output = document.getElementById("output");

let turni = new Map();

// 1. Creare Map con 3 turni e 3 studenti ciascuno
function inizializzaTurni() {
  turni.set("08:00-09:00", ["S01", "S02", "S03"]);
  turni.set("09:00-10:00", ["S04", "S05", "S06"]);
  turni.set("10:00-11:00", ["S07", "S08", "S09"]);
}

// 2. Stampa tutti i turni
function mostraTurni() {
  output.innerHTML = ""; // pulisco l'output prima
  for (let coppia of turni) {
    let orario = coppia[0];
    let studenti = coppia[1];
    output.innerHTML += "Turno " + orario + ": " + studenti.join(", ") + "\n";
  }
}

// 3. Calcoli conteggi
function mostraConteggi() {
  let numeroTurni = turni.size;
  let totaleStudenti = 0;
  for (let studenti of turni.values()) {
    totaleStudenti += studenti.length;
  }
  output.innerHTML += "\nNumero turni: " + numeroTurni;
  output.innerHTML += "\nNumero totale studenti: " + totaleStudenti + "\n";
}

// 4. Cerca studente
function cercaStudente(codice) {
  for (let coppia of turni) {
    let orario = coppia[0];
    let studenti = coppia[1];
    if (studenti.includes(codice)) {
      output.innerHTML += "\nStudente " + codice + " trovato nel turno " + orario + "\n";
      return;
    }
  }
  output.innerHTML += "\nStudente " + codice + " non presente in nessun turno\n";
}

// wrapper per input HTML
function cercaStudenteInput() {
  let codice = document.getElementById("cercaStudenteInput").value.toUpperCase();
  cercaStudente(codice);
}

// 9. Controllo doppia prenotazione
function studenteGiaPresente(codice) {
  for (let studenti of turni.values()) {
    if (studenti.includes(codice)) return true;
  }
  return false;
}

// 5. Aggiungi studente
function aggiungiStudente(orario, codice) {
  if (!turni.has(orario)) {
    output.innerHTML += "\nTurno " + orario + " inesistente\n";
    return;
  }

  if (studenteGiaPresente(codice)) {
    output.innerHTML += "\nErrore: studente " + codice + " già prenotato in un altro turno\n";
    return;
  }

  turni.get(orario).push(codice);
  output.innerHTML += "\nStudente " + codice + " aggiunto al turno " + orario + "\n";
}

// wrapper per input HTML
function aggiungiStudenteInput() {
  let codice = document.getElementById("nuovoStudenteInput").value.toUpperCase();
  let orario = document.getElementById("turnoAggiuntaInput").value;
  aggiungiStudente(orario, codice);
}

// 6. Rimuovi studente
function rimuoviStudente(orario, codice) {
  if (!turni.has(orario)) {
    output.innerHTML += "\nTurno " + orario + " inesistente\n";
    return;
  }

  let lista = turni.get(orario);
  let posizione = lista.indexOf(codice);
  if (posizione !== -1) {
    lista.splice(posizione, 1);
    output.innerHTML += "\nStudente " + codice + " rimosso dal turno " + orario + "\n";
  } else {
    output.innerHTML += "\nStudente " + codice + " non presente nel turno " + orario + "\n";
  }
}

// wrapper per input HTML
function rimuoviStudenteInput() {
  let codice = document.getElementById("studenteRimuovereInput").value.toUpperCase();
  let orario = document.getElementById("turnoRimozioneInput").value;
  rimuoviStudente(orario, codice);
}

// 8. Trova turno con più studenti
function turnoPiuAffollato() {
  let turnoMax = "";
  let maxStudenti = 0;
  for (let coppia of turni) {
    let orario = coppia[0];
    let studenti = coppia[1];
    if (studenti.length > maxStudenti) {
      maxStudenti = studenti.length;
      turnoMax = orario;
    }
  }
  output.innerHTML += "\nTurno con il maggior numero di studenti:\n";
  output.innerHTML += turnoMax + " (" + maxStudenti + " studenti)\n";
}

// 10. Filtra turni con almeno N studenti
function turniConMinimo(minimo) {
  output.innerHTML += "\nTurni con almeno " + minimo + " studenti:\n";
  for (let coppia of turni) {
    let orario = coppia[0];
    let studenti = coppia[1];
    if (studenti.length >= minimo) {
      output.innerHTML += orario + "\n";
    }
  }
}

// wrapper per input HTML
function mostraTurniConMinimoInput() {
  let minimo = parseInt(document.getElementById("minimoStudentiInput").value);
  turniConMinimo(minimo);
}

// avvio iniziale
inizializzaTurni();
mostraTurni();
mostraConteggi();
turnoPiuAffollato();
turniConMinimo(3);

