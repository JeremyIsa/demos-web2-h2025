// Jérémy Isabelle
// 12 février 2025
// Modifications du DOM

// Cibler le paragraphe de l'entête (<header>)
let pEntete = document.querySelector('header p');

// Remplacer le contenu textuel de l'élément
pEntete.textContent = "Nouveau SUPER sous-titre";

// Ajouter un attribut (ici le id)
//pEntete.id = "pEntete"
pEntete.setAttribute('id', 'pEntete');
pEntete.removeAttribute('id');

// Modifications des propriétés CSS
const h1 = document.querySelector('h1');
console.log(h1.style);
h1.style.color = "blue";
h1.style.setProperty('color', '#FF0000');
h1.style.setProperty('border', '1px dashed green');

// Gestion des classes CSS
const pCol1 = document.querySelector('.container .row p');
//console.log(pCol1.classList);

// Ajouter une classe (.add)
pCol1.classList.add('text-success');
//Retirer une classe (.remove)
pCol1.classList.remove('text-success');
//Alterner une classe (.toggle)
pCol1.classList.add('text-success');
//Remplacer une classe par une autre (.replace)
pCol1.classList.replace('text-success', 'text-danger');
pCol1.classList.add('uneClasse')

// Afficher l'attribut class de notre élément
console.log(pCol1.className);

// Créer des éléments
// Étapes de création
// 1. Créer l'élément
// 2. Le modifier selon les besoins
// 3. L'ajouter au DOM à l'endroit souhaité 
// On utilise la méthode createElement() de l'objet document
let nouveauLI = document.createElement('li');
nouveauLI.textContent = "Élément ordonné 4";
nouveauLI.classList.add('text-warning', 'bg-success');
document.querySelector('ol').append(nouveauLI); // Ajoute l'élément à la fin
document.querySelector('ol').prepend(nouveauLI); // Ajoute l'élément au début
document.querySelectorAll('ol li').item(1).insertAdjacentElement('afterend', nouveauLI);

// Suppression d'un élément
// 1. Cibler l'élément
// 2. Appeler .remove()
// Exemple : Retirer le div de la deuxième colonne
let ElmASupprimer = document.querySelectorAll('.container .col-md-6').item(1).remove(); 