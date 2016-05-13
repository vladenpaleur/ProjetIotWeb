/**
 * Created by Priscillia on 04/05/2016.
 */

var tableauCapteurMaison = [["Capteur 1", 25, 10, 30, ("04-05-2016")], ["Capteur 2", 35, 5, 40, ("04-05-2016")]];
var tableauCapteurGarage = [["Capteur 1", -4, 0, 15, ("10-05-2016")], ["Capteur 3", -10, 5, 20, ("10-05-2016")]];
var tableauCapteurEntreprise = [["Capteur 4", 5, 20, 80, ("10-05-2016")]];

/*function ajouterCapteurMaison (capteurInfos){
    tableauCapteurMaison.add(capteurInfos);
}*/


var divDetailCapteur = document.getElementById("detailCapteur");

function afficheDetailsCapteursMaison(capteur)
{
    divDetailCapteur.style.animation = "transitionBetweenSensors 1s forwards";
    divDetailCapteur.style.display = "inline-block";
    divDetailCapteur.innerHTML = tableauCapteurMaison[capteur][0];
}


function afficherCapteurMaison() {
    if(divDetailCapteur.style.display == "inline-block") {
        divDetailCapteur.style.animation = "transitionBetweenSensors 1s backwards";
        divDetailCapteur.style.display = "none";
    }
    var sectionAffiche = document.getElementById("afficheCapteurs");
    sectionAffiche.innerHTML = "";

    for(var i=0; i<tableauCapteurMaison.length; i++)
    {
        var conteneur = document.createElement("div");
        var titreCapteur = document.createElement("h3");
        var lienCapteur = document.createElement("a");
        lienCapteur.data = i;
        lienCapteur.addEventListener('click', function()
        {
            afficheDetailsCapteursMaison(this.data);
            console.log(this.data);
        });// = "#"+tableauCapteurMaison[i][0];
        lienCapteur.innerHTML = tableauCapteurMaison[i][0];
        var temperatureCapteur = document.createElement("p");
        temperatureCapteur.innerHTML = tableauCapteurMaison[i][1]+"&deg;";
        var minimumCapteur = document.createElement("p");
        minimumCapteur.innerHTML = tableauCapteurMaison[i][2]+"&deg;";
        var maximumCapteur = document.createElement("p");
        maximumCapteur.innerHTML = tableauCapteurMaison[i][3]+"&deg;";

        titreCapteur.appendChild(lienCapteur);
        conteneur.appendChild(titreCapteur);
        conteneur.appendChild(temperatureCapteur);
        conteneur.appendChild(minimumCapteur);
        conteneur.appendChild(maximumCapteur);

        sectionAffiche.appendChild(conteneur);
    }


}

function afficheDetailsCapteursGarage(capteur)
{
    divDetailCapteur.style.animation = "transitionBetweenSensors 1s forwards";
    divDetailCapteur.style.display = "inline-block";
    divDetailCapteur.innerHTML = tableauCapteurGarage[capteur][0];
}

function afficherCapteurGarage() {
    if (divDetailCapteur.style.display == "inline-block") {
        divDetailCapteur.style.animation = "transitionBetweenSensors 1s backwards";
        divDetailCapteur.style.display = "none";
    }

    var sectionAffiche = document.getElementById("afficheCapteurs");
    sectionAffiche.innerHTML = "";

    for (var i = 0; i < tableauCapteurGarage.length; i++) {
        var conteneur = document.createElement("div");
        var titreCapteur = document.createElement("h3");
        var lienCapteur = document.createElement("a");
        lienCapteur.data = i;
        lienCapteur.addEventListener('click', function () {
            afficheDetailsCapteursGarage(this.data);
            console.log(this.data);
        });

        lienCapteur.innerHTML = tableauCapteurGarage[i][0];
        var temperatureCapteur = document.createElement("p");
        temperatureCapteur.innerHTML = tableauCapteurGarage[i][1] + "&deg;";
        var minimumCapteur = document.createElement("p");
        minimumCapteur.innerHTML = tableauCapteurGarage[i][2] + "&deg;";
        var maximumCapteur = document.createElement("p");
        maximumCapteur.innerHTML = tableauCapteurGarage[i][3] + "&deg;";

        titreCapteur.appendChild(lienCapteur);
        conteneur.appendChild(titreCapteur);
        conteneur.appendChild(temperatureCapteur);
        conteneur.appendChild(minimumCapteur);
        conteneur.appendChild(maximumCapteur);

        sectionAffiche.appendChild(conteneur);


    }
}

function afficheDetailsCapteursEntreprise(capteur)
{
    divDetailCapteur.style.animation = "transitionBetweenSensors 1s forwards";
    divDetailCapteur.style.display = "inline-block";
    divDetailCapteur.innerHTML = tableauCapteurEntreprise[capteur][0];
}

function afficherCapteurEntreprise() {
    if(divDetailCapteur.style.display == "inline-block") {
        divDetailCapteur.style.animation = "transitionBetweenSensors 1s backwards";
        divDetailCapteur.style.display = "none";
    }
    var sectionAffiche = document.getElementById("afficheCapteurs");
    sectionAffiche.innerHTML = "";

    for (var i = 0; i < tableauCapteurEntreprise.length; i++) {
        var conteneur = document.createElement("div");
        var titreCapteur = document.createElement("h3");
        var lienCapteur = document.createElement("a");
        lienCapteur.data = i;
        lienCapteur.addEventListener('click', function()
        {
            afficheDetailsCapteursEntreprise(this.data);
            console.log(this.data);
        });
        lienCapteur.innerHTML = tableauCapteurEntreprise[i][0];
        var temperatureCapteur = document.createElement("p");
        temperatureCapteur.innerHTML = tableauCapteurEntreprise[i][1] + "&deg;";
        var minimumCapteur = document.createElement("p");
        minimumCapteur.innerHTML = tableauCapteurEntreprise[i][2] + "&deg;";
        var maximumCapteur = document.createElement("p");
        maximumCapteur.innerHTML = tableauCapteurEntreprise[i][3] + "&deg;";

        titreCapteur.appendChild(lienCapteur);
        conteneur.appendChild(titreCapteur);
        conteneur.appendChild(temperatureCapteur);
        conteneur.appendChild(minimumCapteur);
        conteneur.appendChild(maximumCapteur);

        sectionAffiche.appendChild(conteneur);


    }

}

var btn = document.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if(this.id == "groupe1") {
            afficherCapteurMaison(this);
        }
        else if(this.id == "groupe2"){
            afficherCapteurGarage(this);
        }
        else if (this.id == "groupe3"){
            afficherCapteurEntreprise(this);
        }
    }, false);
}


function ajouterGroupe(nomBouton){
    var navAffiche = document.getElementsByTagName("nav")[0];

    var bouton = document.createElement("button");
    bouton.className = "btn btn-success";

    var label = document.createElement("label");
    label.textContent = nomBouton;

    bouton.appendChild(label);
    navAffiche.appendChild(bouton);
}

var boutonAjouter = document.getElementById("ajouterGroupe");
boutonAjouter.addEventListener("click", function(){
    var input = document.getElementById("nomBouton");
    if(input.value != "") {
        ajouterGroupe(input.value);
    }
    input.value = "";
});



