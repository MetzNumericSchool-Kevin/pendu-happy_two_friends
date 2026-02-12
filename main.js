const zoneLettre = document.querySelector("#letters-used");

//Mettre en place l'écouteur d'événements clavier
document.addEventListener("keypress", (event) => {
    // Afficher la lettre dans la zone "Lettres jouées" avec un badge vert
    zoneLettre.textContent += event["key"].toUpperCase() + " " ;
    console.log(event);
});