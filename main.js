
// Au chargement de la page, sélectionner un mot aléatoire dans la liste
const listeMots = ["arbre", "table","livre","musique","soleil","fleur","riviere"
    ,"maison","chat","chien","fruit","pain","vin","ciel","vent","mer","bois","pierre"
    ,"route","porte"]

function randomIndex() {
    let max = listeMots.length;
    let min = 0;
    return Math.floor(Math.random() * (max - min) ) + min;
} 

let motATrouver = listeMots[randomIndex()]
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


let finJeu = false;
const zoneLettre = document.querySelector("#letters-used");
const lettreJouer = [];
//Mettre en place l'écouteur d'événements clavier
//Le joueur tape une lettre sur son clavier physique
document.addEventListener("keypress", (event) => {
    if (finJeu) return;

    // Vérification de la case
    const LowerEvent = event.key.toLowerCase()
    // Une lettre déjà jouée ne peut pas être rejouée
    if (lettreJouer.includes(LowerEvent)) {
        alert("Cette Lettre a déjà été jouée.")
    //Seules les lettres de A à Z sont acceptées
    } else if (!/^[a-zA-Z]$/.test(LowerEvent)) {
        alert("Votre saisis n'est pas une lettre.")
    }else {
        // Afficher la lettre dans la zone "Lettres jouées" avec un badge vert
        let spanLettre = document.createElement("span")
        spanLettre.textContent = LowerEvent.toUpperCase(), " ";

        bifurcation(LowerEvent, spanLettre);

        zoneLettre.appendChild(spanLettre)

        lettreJouer.push(LowerEvent)};

        setTimeout(() => testVictoire(), 100)
});



// Tester si la lettre est presente
function testLettre(lettre) {
    if (motATrouver.includes(lettre)) return true;
    else return false;
}

let victoireCompteur = 0;
// Si la lettre est dans le mot
function bonneLettre(lettre) {
    // Remplacer tous les underscores correspondants par la lettre trouvée
    for (let index = 0; index < nombreLettres; index++) {
        if (motATrouver[index] == lettre) {
            let lettreSucces = affichageMot.children[index];
            lettreSucces.textContent = lettre;
            lettreSucces.className = "";
            victoireCompteur++
        }   
    }
}

let compteur = 0;

// Si la lettre n'est pas dans le mot
function mauvaiseLettre() {
    // Incrémenter le compteur d'erreurs
    incrementError();
    let compteurErreur = document.querySelector(".stat-value");
    compteurErreur.textContent = compteur + "/5";
    // Afficher la partie suivante du dessin du pendu
    if (compteur >= 5) {
        setTimeout(() => {
            alert("Game Over looser!");
        finJeu = true;
        afficherMot()
        }, 100)
        
    }
}

function bifurcation(lettre, span) {
    if (testLettre(lettre)) {
        bonneLettre(lettre);
        span.className = "badge-success badge-lg"
    }
    else {
        mauvaiseLettre(lettre);
        span.className = "badge-error badge-lg";
    }
}

// Bouton Règles 
const sidebar = document.querySelector(".sidebar")
const sidebarbouton = sidebar.querySelectorAll(".card-body")[1]
const boutonRegle = sidebarbouton.lastElementChild
const boutonNouvellePartie = sidebarbouton.children[1]

boutonRegle.addEventListener("click", () => alert(`
    - Un mot secret est choisi.
    - On affiche un tiret par lettre du mot.
    - Le joueur propose une lettre.
    - Si la lettre est dans le mot → elle est révélée.
    - Sinon → on ajoute un élément du pendu.
    - Le joueur gagne s’il trouve toutes les lettres avant que le dessin soit complet.
    - Le joueur perd si le pendu est entièrement dessiné.`
));
console.log(boutonNouvellePartie)
boutonNouvellePartie.addEventListener('click', () => NouvellePartie())






function NouvellePartie() {
    compteur = 0;
    document.querySelector(".stat-value").textContent = compteur + "/5"
    const allcontainer = container.querySelectorAll(".💩💩💩💩💩");
    allcontainer.forEach(element => element.classList.replace("💩💩💩💩💩", "hidden"));
    motATrouver = listeMots[randomIndex()];
    finJeu = false;
}






















function afficherMot() {
    for (let index = 0; index < nombreLettres; index++) {
            let lettre = affichageMot.children[index];
            lettre.className = "";
            lettre.textContent = motATrouver[index];
    }
}






function testVictoire() {
    if (victoireCompteur >= nombreLettres) {
        alert("Felcitations!")
        finJeu = true;
    }
}

const container = document.querySelector(".hangman-container");

function incrementError() {
    compteur++
    let error = "error-" + compteur;

    container.querySelector("#" + error).classList.replace("hidden", "💩💩💩💩💩")
}