const toggleDivAutre = (evt) => {
    //console.log(evt.target);
    const genre = evt.target.value
    console.log(genre);
    const divGenre = document.getElementById("div-autregenre")
    if (genre === "autre") {
        // On veut montrer le div-autregenre
        divGenre.style.display = "block"
    }
    else {
        divGenre.style.display = "none"
    }
}

const chargement = () => {

    // Écouteur d'évènement sur le 'change' du radio
    // pour pouvoir montrer ou cacher le div-autregenre
    const inputGenre = document.querySelectorAll("input[name=genre]").forEach(
        input => input.addEventListener('change', toggleDivAutre));


    // Intercepter l'envoi du formulaire

    const form = document.getElementById("formulaire")
    form.addEventListener('submit', evt => {

        // Prévenir le comportement par défaut et la propagation des évènements
        evt.preventDefault();
        evt.stopPropagation();
        //console.log(evt.target);
        const formData = new FormData(form)
        console.log(formData);
        for(const [name, value] of formData.entries()){
            console.log(`${name} : ${value}`);
        }

        // Validations particulières
        // Vérifier si l'utilisateur est majeur
        const age = document.getElementById("age").value
        if (age < 18) {
            console.log("Impossible de continuer");
        }
        else {
            console.log("All good!");
        }

        //Vérifier si les deux mots de passe sont identiques
        const mdp1 = document.getElementById('motdepasse').value
        const mdp2 = document.getElementById('motdepasse2').value
        if (mdp1 !== mdp2) {
            console.log("Les deux mots de passe doivent être identiques");
        }

    })
}

document.addEventListener('DOMContentLoaded', chargement)
