
// Au chargement de la page, sélectionner un mot aléatoire dans la liste
const listeMots = ["arbre", "table","livre","musique","soleil","fleur","rivière"
    ,"maison","chat","chien","fruit","pain","vin","ciel","vent","mer","bois","pierre"
    ,"route","porte"]

function randomIndex() {
    let max = listeMots.length;
    let min = 0;
    return Math.floor(Math.random() * (max - min) ) + min;
} 

const motATrouver = listeMots[randomIndex()]


console.log(motATrouver);