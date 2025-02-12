// Auteur:  Maxime Faucher
// Date: 2024-02-11
// Sujet: Démo sur les sélecteurs en JavaScript

/*

Références: https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
            https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName
            https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByTagName
            https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
            https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll

*/

/****************************************************************
getElementById('unID') : 
    retourne l'élément (HTMLElement) ayant l'ID 'unID' si 
    l'élément existe, sinon retourne null
****************************************************************/
console.log("\n1. Sélecteurs par ID : getElementById");

// Sélectionne l'élément ayant l'ID 'pied'
let pied = document.getElementById('pied');
// Affiche l'élément sélectionné
console.log(pied);
// Affiche le type et le nom de noeud et le contenu HTML de l'élément sélectionné
console.log(pied.nodeType, pied.nodeName, pied.innerHTML, pied.textContent);
// Sélectionne l'élément ayant l'ID 'inexistant'
let elmInexistant = document.getElementById('inexistant');
// Affiche null
if(elmInexistant === null)
    console.log("Il n'existe pas d'element#inexistant")
else
    console.log(elmInexistant);

/****************************************************************
getElementsByClassName('uneClasse') :
    retourne une collection d'éléments (HTMLCollection) ayant la 
    classe 'uneClasse' si des éléments existent, sinon retourne 
    une collection vide
****************************************************************/
console.log("\n2. Sélecteurs par classe : getElementsByClassName");

// Sélectionne les éléments ayant la classe 'nav-link'
const elmsClasse1 = document.getElementsByClassName('nav-link');
// Affiche la collection d'éléments sélectionnés
console.log(elmsClasse1);
// Affiche le nombre d'éléments sélectionnés
console.log(elmsClasse1.length);
// Affiche le premier élément sélectionné,
console.log(elmsClasse1.item(0)); // préférable à elmsClasse1[0] pour éviter les erreurs
// Parcourir les éléments d'une HTMLCollection avec boucle for... of
for(const elm of elmsClasse1) {
    console.log(elm.textContent);
}
// Autre méthode en convertissant la HTMLCollection en tableau avec Array.from()
Array.from(elmsClasse1).forEach(elm => console.log(elm.textContent));
// Sélectionne les éléments ayant la classe 'inexistant'
const elmsClasse2 = document.getElementsByClassName('inexistant');
console.log(elmsClasse2);
// Sélectionne les éléments ayant les classes 'text-info' et 'text-uppercase'
// l'ordre est sans importance, mais la casse est importante
const elmsClasse3 = document.getElementsByClassName('text-info text-uppercase');
// Affiche le premier élément sélectionné
console.log(elmsClasse3.item(0).textContent);

/****************************************************************
getElementsByTagName('uneBalise') :
    retourne une collection d'éléments de balise 'uneBalise'
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n3. Sélecteurs par balise : getElementByTagName");

// Sélectionner les éléments <a>
const liens = document.getElementsByTagName('a');
console.log("La page contient", liens.length, "balises <a>");
Array.from(liens).forEach(elm => console.log(elm.innerText));
// Sélectionne les éléments <head>
const tete = document.getElementsByTagName('head');
console.log(tete.item(0));
// Affiche le nombre d'éléments <script>
console.log(document.getElementsByTagName('script').length, "balises script dans la page");

/****************************************************************
querySelector('selecteurCSS') :
    retourne le premier élément (HTMLElement) correspondant au sélecteur CSS
    si un élément existe, sinon retourne null
****************************************************************/
console.log("\n4. Sélecteur CSS : querySelector");

// Sélectionne le premier élément <p>
let premierP = document.querySelector('p');
// Affiche l'élément sélectionné
console.log("Le premier p de la page est", premierP.textContent);
// Sélectionne le premier élément <li> du premier <ol>
let premierLiOl = document.querySelector("ol li");
// Affiche le contenu HTML de l'élément sélectionné
console.log("Le premier ol li de la page est", premierLiOl.innerHTML);
// Donne le même résultat que innerHTML, car le li ne contient pas de balises HTML
console.log("Le premier ol li de la page est", premierLiOl.textContent);

/****************************************************************
querySelectorAll('selecteurCSS') :
    retourne tous les éléments correspondant au sélecteur CSS (sous forme de NodeList)
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n5. Sélecteur CSS : querySelectorAll");

// Sélectionne tous les éléments <p>
let tousLesP = document.querySelectorAll('p');
for(const unP of tousLesP) {
    console.log(unP.textContent);
}
// Parcourir les éléments d'une NodeList
tousLesP.forEach(e => console.log(e)); // Affiche le texte de chaque élément sélectionné

// Sélectionne tous les éléments <li> de tous les <ul>
let lis = document.querySelectorAll('ul li');
// Affiche le nombre d'éléments <li> sélectionnés
console.log("Il y a", lis.length, "éléments li dans des ul.");