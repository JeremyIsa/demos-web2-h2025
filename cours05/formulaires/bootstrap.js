document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('myForm');

    form.addEventListener('submit', evt => {
        
        evt.preventDefault();
        evt.stopPropagation();
        if (!form.checkValidity()) {
            
        }

        form.classList.add('was-validated');            // Pour la validation Bootstrap
                                                        // 1. Avoir Bootstrap installé
                                                        // 2. Ajouter la classe 'needs-validation' au <form>
                                                        // 3. Ajouter l'attribut 'novalidate' sur le <form>

        // Validations personnalisées
        // Vérifions que les 2 mots de passe sont identiques
        const champmdp = document.getElementById('password');
        const champmdp2 = document.getElementById('confirmPassword');
        if (champmdp.value !== champmdp2.value) {
            champmdp2.classList.remove('is-valid')
            champmdp2.classList.add('is-invalid');
            champmdp2.focus();
            return;
        }
        else {
            champmdp2.classList.add('is-valid');
            champmdp2.classList.remove('is-invalid');
        }

        // Envoyer le formulaire valide
        let data = new FormData(form);
        for (const [cle, valeur]  of data.entries()) {
            console.log(cle, "=", valeur);
        }

        form.reset();
        form.classList.remove('was-validated');
        return;

    });

});