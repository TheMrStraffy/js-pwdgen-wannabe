const nome = prompt("Come ti chiami?");
const cognome = prompt("Di cognome?");
const colorePreferito = prompt("Che colore preferisci?");

const password = nome+cognome+colorePreferito+"22";

document.getElementById("password").innerHTML = password;