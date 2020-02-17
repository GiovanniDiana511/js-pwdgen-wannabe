var nomeUtente = prompt('Come ti chiami?');
document.getElementById('nome-utente').innerHTML = ' ' + nomeUtente;

var cognomeUtente = prompt('Qual è il tuo cognome?');
document.getElementById('cognome-utente').innerHTML = ' ' + cognomeUtente;

var coloreUtente = prompt('Qual è il tuo colore preferito?');
document.getElementById('colore-utente').innerHTML = ' ' + coloreUtente;

var data = new Date();
var annoCorrente = data.getFullYear();
document.getElementById('anno-corrente').innerHTML = ' ' + annoCorrente;

var passwordCompleta = nomeUtente + ';' + cognomeUtente + ';' + coloreUtente + ';' + annoCorrente;
document.getElementById('password-utente').innerHTML = ' ' + passwordCompleta;

document.getElementById('pwd-complete').setAttribute('class','visible');
