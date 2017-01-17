var seuil;
var i;

var seuil = prompt("Combien de cases voulez-vous?")
if (seuil<1000){


for (var i = 1; i <= seuil ; i++) {
    document.getElementById('case').innerHTML += "<li>" +i+ "</li>";
}}else{
	alert("Nombre trop grand,maximum 1000 svp merci!")
}