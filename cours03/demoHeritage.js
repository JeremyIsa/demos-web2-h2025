/*
Auteur  : Maxime Faucher
Date    : 4 février 2025
Sujet   : Démos sur les l'héritage de classes JavaScript

Références utiles
    https://www.youtube.com/watch?v=DqUPa0D2N78 
    https://www.programiz.com/javascript/inheritance


Notions importantes
    mots-clés 'extends' et 'super'
    vocabulaire : classe parent (ou mère)/ classe enfant, classe de base / classe dérivée
    redéfinition de méthode (overriding) pour préciser un comportement

*/

// Définition d'une classe parent
class Animal {
    constructor(nom="N/D") {
        this.nom = nom;
    }
    
    faireDuBruit() {
        console.log("Un bruit d'animal");
    }
    
    decrire() {
        return `Cet animal s'appelle ${this.nom}.`;
    }
}

// Définition d'une classe enfant qui hérite de Animal
class Chien extends Animal {
    constructor(nom, race) {
        super(nom); // Appelle le constructeur de la classe parent
        this.race = race;
    }
    
    faireDuBruit() { // cette méthode a été REDÉFINIE (overridden)
        console.log("Wouf! Wouf!");
    }
    
    decrire() {
        return super.decrire() + ` C'est un chien de race ${this.race}.`; // utiliser l'héritage dans la redéfinition de cette méthode
    }
}

// Utilisation des classes
const unAnimal = new Animal("Popcorn");
const monChien = new Chien("Rex", "Labrador");
console.log(monChien.nom); // Rex
console.log(monChien.race); // Labrador
unAnimal.faireDuBruit(); // Un bruit d'animal
monChien.faireDuBruit(); // Wouf! Wouf!
console.log(monChien.decrire()); // Cet animal s'appelle Rex. C'est un chien de race Labrador.
console.log(unAnimal.decrire()); // Cet animal s'appelle Popcorn.
