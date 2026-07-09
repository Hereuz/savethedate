
const video = document.getElementById("saveTheDate");
const button = document.getElementById("rsvpButton");

/*
==========================================================
COLLE ICI LE LIEN DE TON GOOGLE FORM
==========================================================
*/

button.href = "https://www.google.fr/";

/*
==========================================================
Affichage du bouton à la fin de la vidéo
==========================================================
*/

video.addEventListener("ended", () => {

    button.classList.add("show");

});

/*
==========================================================
Tentative de lecture automatique
(certains navigateurs l'autorisent seulement en mode muet)
==========================================================
*/

video.play().catch(() => {

    console.log("Lecture automatique bloquée.");

});
