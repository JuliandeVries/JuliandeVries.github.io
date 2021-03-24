var voornaam = prompt("wat is uw voornaam");
var element = document.getElementById("naam");
element.innerHTML = voornaam;

var achternaam = prompt("Wat is uw achternaam");
var element = document.getElementById("naam2");
element.innerHTML = achternaam;

document.querySelector("#titelnaam").innerHTML = "Hoi!" + " " + voornaam;

var email = prompt("Vul uw E-mail in");
var element = document.getElementById("mail");
element.innerHTML = email;

var woonplaats = prompt("Wat is uw woonplaats");
var element = document.getElementById("Woonplaats");
element.innerHTML = woonplaats;

var leeftijd = prompt("Wat is uw leeftijd");
var element = document.getElementById("leeftijd");
element.innerHTML = leeftijd;

if(leeftijd == 16){
    document.querySelector("table").style.backgroundColor = 'orange';
    document.querySelector("table").style.color = 'white';
}
if(leeftijd == 17){
    document.querySelector("table").style.backgroundColor = 'blue';
    document.querySelector("table").style.color = 'white';
}
if(leeftijd == 18){
    document.querySelector("table").style.backgroundColor = 'gold';
    document.querySelector("table").style.color = 'white';
}
if(leeftijd == 19){
    document.querySelector("table").style.backgroundColor = 'lime';
    document.querySelector("table").style.color = 'white';
}
if(leeftijd == null){
    document.querySelector("table").style.backgroundColor = 'red';
    document.querySelector("table").style.color = 'white';
}