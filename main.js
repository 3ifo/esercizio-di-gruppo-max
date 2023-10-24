/* let numeroUtente = prompt("scegli un numero da 1 a 10");
let numeroUtenteNumero = Number(numeroUtente);
let i = 1;
while (i <= 10) {
  let moltiplicazione = numeroUtenteNumero * i;
  console.log(numeroUtente + "x" + i + "=" + moltiplicazione);
  i++;
} */

/* Sostitutore di parole 

let prompt1 = prompt("Scrivi una frase");
let prompt2 = prompt("Scegli una parola da cambiare");
let prompt3 = prompt("Scegli un altra parola");

let fraseCambiata = prompt1.replaceAll(prompt2, prompt3);

console.log(fraseCambiata); */

/* Verifica http https .com 

let url = prompt("Scrivi un URL");
if (
  (url.startsWith("http://") || url.startsWith("https://")) &&
  url.endsWith(".com")
) {
  alert("tutto ok");
} else {
  alert("errore");
} */

/* Gioco dei dadi 

let dadoUtente = Math.floor(Math.random() * 6) + 1;
let dadoComputer = Math.floor(Math.random() * 6) + 1;
prompt("Schiacci un bottone per giocare");
let user = console.log(dadoUtente);
let computer = console.log(dadoComputer);

if (dadoUtente > dadoComputer) {
  alert("Hai vinto");
} else if (dadoUtente === dadoComputer) {
  alert("Pareggio");
} else {
  alert("Hai perso");
} */

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
let numeroUtente = prompt("Indovina il numero da 1 a 10");
console.log(numeroUtente);
let numeroUtenteNum = Number(numeroUtente);

if (numeroUtenteNum === randomNumber) {
  alert("Hai indovinato");
} else if (numeroUtenteNum < randomNumber) {
  alert("Prova più alto");
} else if (numeroUtenteNum > randomNumber) {
  alert("Prova più basso");
}
