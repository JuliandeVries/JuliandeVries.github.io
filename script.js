//voornaam
var voornaam = prompt("Wat is uw naam?");
var element = document.getElementById("id01");
 
//leeftijd
var leeftijd = prompt("hoe oud ben je");
var element = document.getElementById("id02");
 
if(leeftijd > 18){
    document.getElementById("kopje1").style.color = 'white';
    document.querySelector("body").style.backgroundColor = 'red';
}
else{
    document.querySelector("#kopje1").style.color = 'green';
}

document.querySelector("#kopje1").innerHTML = "Welkom," + " " + voornaam + " " + leeftijd;
