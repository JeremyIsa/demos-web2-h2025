class Personne {
    constructor(nom="John Doe", age=0) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}

class Bidon {
    constructor(nom = 'Aucun') {
        this.nom = nom;
    }
}

export {Personne, Bidon};
