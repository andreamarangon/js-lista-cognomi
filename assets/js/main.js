//chiedo all'utente il suo cognome
var cognome = prompt("qual è il tuo cognome?");

//trasformo l'eventuale prima lettera minuscola in maiuscola
cognome = cognome[0].toUpperCase() + cognome.substring(1);

//creo un array con altri cognomi
var lista_cognomi = ['Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];

//aggiungo cognome alla lista
lista_cognomi.push(cognome);

//metto i cognomi in ordine alfabetico
lista_cognomi.sort();

//stampo una lista ordinata alfabeticamente con ciclo for
for (var i = 0; i < lista_cognomi.length; i++) {
  document.getElementById('lista').innerHTML += "<li>" + lista_cognomi[i] + "</li>";
}

//stampo posizione "umana" della lista in cui il nuovo utente si trova
var posizione_umana = lista_cognomi.indexOf(cognome) + 1;
document.getElementById('posizione').innerHTML ='Il tuo cognome è in ' + posizione_umana + '° posizione';
