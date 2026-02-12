
// Au chargement de la page, sélectionner un mot aléatoire dans la liste
const listeMots = ["arbre", "table","livre","musique","soleil","fleur","riviere"
    ,"maison","chat","chien","fruit","pain","vin","ciel","vent","mer","bois","pierre"
    ,"route","porte"]

function randomIndex() {
    let max = listeMots.length;
    let min = 0;
    return Math.floor(Math.random() * (max - min) ) + min;
} 

const motATrouver = listeMots[randomIndex()]
console.log(motATrouver);

//Afficher le mot avec des underscores pour chaque lettre
const affichageMot = document.querySelector('.word-display');
let nombreLettres = motATrouver.length;
let nombreUnderscore = affichageMot.querySelectorAll('.letter-placeholder').length

affichageMot.removeChild(affichageMot.firstElementChild)
affichageMot.removeChild(affichageMot.firstElementChild)

for (let i = 2; i < nombreLettres - 1; i++) {
    let underscore = document.createElement('span');
    underscore.className = 'letter-placeholder';
    affichageMot.appendChild(underscore);
}



const zoneLettre = document.querySelector("#letters-used");
const lettreJouer = [];
//Mettre en place l'écouteur d'événements clavier
//Le joueur tape une lettre sur son clavier physique
document.addEventListener("keypress", (event) => {
    // Une lettre déjà jouée ne peut pas être rejouée
    if (lettreJouer.includes(event.key)) {
        alert("Cette Lettre a déjà été jouée.")
    //Seules les lettres de A à Z sont acceptées
    } else if (!/^[a-zA-Z]$/.test(event.key)) {
        alert("Votre saisis n'est pas une lettre.")
    }else {
        // Afficher la lettre dans la zone "Lettres jouées" avec un badge vert
        zoneLettre.textContent += event.key.toUpperCase() + " " ;
        lettreJouer.push(event["key"])};
        console.log(testLettre(event))
});







// Tester si la lettre est presente
function testLettre(lettre) {
    if (lettre in motATrouver) return true;
    else false;
}

// Si la lettre est dans le mot
let lettreActuelle = lettreJouer[-1];
console.log(testLettre(lettreActuelle));
