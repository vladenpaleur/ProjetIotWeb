/**
 * Created by Priscillia on 04/05/2016.
 */

// Les données de capteurs triées par capteur et groupe
var grpCapteurs = {
    "maison":{
        "capteur 1": {
            data: [25, 10, 30],
            time: ("04-05-2016")
        },
        "capteur 2": {
            data: [35, 5, 40],
            time: ("10-05-2016")
        }
    },
    "garage": {
        "capteur 1": {
            data: [-4, 0, 5],
            time: ("13-05-2016")
        },
        "capteur 3": {
            data: [5, 15, 20],
            time: ("13-05-2016")
        }
    },
    "entreprise": {
        "capteur 4": {
            data: [20, 25, 30],
            time: ("13-05-2016")
        }
    }
};

var divDetailCapteur = document.getElementById("detailCapteur");

function afficheDetailsCapteurs(grp, capteur){
    divDetailCapteur.style.animation = "transitionBetweenSensors 1s forwards";
    divDetailCapteur.style.display = "inline-block";
    divDetailCapteur.innerHTML = "<h1>"+ grp +"</h1>" +
        "<h2>" + capteur + "</h2>" + "<p>" + [grp[capteur.data]] + "</p>";
}

function afficherCapteur(grp){
    if(divDetailCapteur.style.display == "inline-block") {
        divDetailCapteur.style.animation = "transitionBetweenSensors 1s backwards";
        divDetailCapteur.style.display = "none";
    }

    var sectionAffiche = document.getElementById("afficheCapteurs");
    sectionAffiche.innerHTML = "";

    for(var value in grpCapteurs[grp])
    {
        var conteneur = document.createElement("div");
        var titreCapteur = document.createElement("h3");
        var lienCapteur = document.createElement("a");
        lienCapteur.dataset.groupe = grp;
        lienCapteur.dataset.capteur = value;
        lienCapteur.innerHTML = value;
        titreCapteur.appendChild(lienCapteur);
        conteneur.appendChild(titreCapteur);
        lienCapteur.addEventListener('click', function()
        {
            afficheDetailsCapteurs(this.getAttribute("data-groupe"), this.getAttribute("data-capteur"));
        });// = "#"+tableauCapteurMaison[i][0];

        console.log(grpCapteurs[grp][value].data);
        for(var i = 0; i < grpCapteurs[grp][value].data.length; i++){
            var p = document.createElement("p");
            p.innerHTML = grpCapteurs[grp][value].data[i] + "&deg;";
            conteneur.appendChild(p);
        }
        sectionAffiche.appendChild(conteneur);
    }
}

function afficherCapteurMaison() {
    afficherCapteur("maison");
}

function afficherCapteurGarage() {
    afficherCapteur("garage");
}

function afficherCapteurEntreprise() {
    afficherCapteur("entreprise");
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



