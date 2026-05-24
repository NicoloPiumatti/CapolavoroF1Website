let bottone = document.getElementById("btnPrincipale");
let risultato = document.getElementById("risultato");

let luce1 = document.getElementById("luce1");
let luce2 = document.getElementById("luce2");
let luce3 = document.getElementById("luce3");
let luce4 = document.getElementById("luce4");
let luce5 = document.getElementById("luce5");

let tempoInizio = 0;
let semaforiSpenti = false;
let giocoInCorso = false;
let timerSemaforo;

bottone.addEventListener("click", gestisciClick);

function spegniSemafori() {
    luce1.classList.remove("bg-danger");
    luce1.classList.add("bg-dark");
    luce2.classList.remove("bg-danger");
    luce2.classList.add("bg-dark");
    luce3.classList.remove("bg-danger");
    luce3.classList.add("bg-dark");
    luce4.classList.remove("bg-danger");
    luce4.classList.add("bg-dark");
    luce5.classList.remove("bg-danger");
    luce5.classList.add("bg-dark");
}

function gestisciClick() {
    if (!giocoInCorso) {
        giocoInCorso = true;
        semaforiSpenti = false;
        risultato.innerText = "Attendi i semafori...";
        risultato.className = "fw-bold text-white";

        bottone.innerText = "PREMI AL VIA!";
        bottone.classList.remove("btn-success");
        bottone.classList.add("btn-danger");

        setTimeout(function () {
            luce1.classList.remove("bg-dark");
            luce1.classList.add("bg-danger");
        }, 1000);
        setTimeout(function () { 
            luce2.classList.remove("bg-dark"); 
            luce2.classList.add("bg-danger"); 
        }, 2000);
        setTimeout(function () { 
            luce3.classList.remove("bg-dark"); 
            luce3.classList.add("bg-danger"); 
        }, 3000);
        setTimeout(function () { 
            luce4.classList.remove("bg-dark"); 
            luce4.classList.add("bg-danger"); 
        }, 4000);
        setTimeout(function () {
            luce5.classList.remove("bg-dark");
            luce5.classList.add("bg-danger");

            let attesaCasuale = Math.floor(Math.random() * 3000) + 1000;

            timerSemaforo = setTimeout(function () {
                spegniSemafori();
                semaforiSpenti = true;
                tempoInizio = Date.now();
            }, attesaCasuale);

        }, 5000);

        return;
    }

    if (giocoInCorso && !semaforiSpenti) {
        clearTimeout(timerSemaforo);
        spegniSemafori();
        risultato.innerText = "FALSA PARTENZA! Hai cliccato in anticipo.";
        risultato.className = "fw-bold text-danger";
        resetGioco();
        return;
    }

    if (giocoInCorso && semaforiSpenti) {
        let tempoFine = Date.now();
        let tempoReazione = (tempoFine - tempoInizio) / 1000;

        risultato.innerText = "Tempo di reazione: " + tempoReazione + " secondi!";
        risultato.className = "fw-bold text-success fs-2";
        resetGioco();
    }
}

function resetGioco() {
    giocoInCorso = false;
    bottone.innerText = "Start";
    bottone.classList.remove("btn-danger");
    bottone.classList.add("btn-success");
}