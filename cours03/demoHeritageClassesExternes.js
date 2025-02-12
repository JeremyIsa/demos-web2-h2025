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

// Importation des classes (Essayons que la classe Chien, qui elle-même importe Animal)
import Animal from "./Classes/Animal.js";
import { Chien } from "./Classes/Chien.js"; // Ne fonctionne pas seul

// Utilisation des classes
const unAnimal = new Animal("Popcorn");
const monChien = new Chien("Rex", "Labrador");
console.log(monChien.nom); // Rex
console.log(monChien.race); // Labrador
unAnimal.faireDuBruit(); // Un bruit d'animal
monChien.faireDuBruit(); // Wouf! Wouf!
console.log(monChien.decrire()); // Cet animal s'appelle Rex. C'est un chien de race Labrador.
console.log(unAnimal.decrire()); //  Cet animal s'appelle Popcorn.

// Appartenance des objets
console.log(unAnimal instanceof Object);
console.log(unAnimal instanceof Animal);
console.log(unAnimal instanceof Chien);
console.log(monChien instanceof Object);
console.log(monChien instanceof Animal);
console.log(monChien instanceof Chien);

console.log(typeof unAnimal);
console.log(typeof monChien);
