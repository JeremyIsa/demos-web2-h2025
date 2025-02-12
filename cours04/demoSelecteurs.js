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
// Affiche l'élément sélectionné
// Affiche le type et le nom de noeud et le contenu HTML de l'élément sélectionné

// Sélectionne l'élément ayant l'ID 'inexistant'
// Affiche null


/****************************************************************
getElementsByClassName('uneClasse') :
    retourne une collection d'éléments (HTMLCollection) ayant la 
    classe 'uneClasse' si des éléments existent, sinon retourne 
    une collection vide
****************************************************************/
console.log("\n2. Sélecteurs par classe : getElementsByClassName");

// Sélectionne les éléments ayant la classe 'nav-link'
// Affiche la collection d'éléments sélectionnés
// Affiche le nombre d'éléments sélectionnés
// Affiche le premier élément sélectionné,
                                  // préférable à elmsClasse1[0] pour éviter les erreurs
// Parcourir les éléments d'une HTMLCollection avec boucle for... of

// Autre méthode en convertissant la HTMLCollection en tableau avec Array.from()

// Sélectionne les éléments ayant la classe 'inexistant'


// Sélectionne les éléments ayant les classes 'text-info' et 'text-uppercase'
// l'ordre est sans importance, mais la casse est importante

// Affiche le premier élément sélectionné


/****************************************************************
getElementsByTagName('uneBalise') :
    retourne une collection d'éléments de balise 'uneBalise'
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n3. Sélecteurs par balise : getElementByTagName");

// Sélectionner les éléments <a>

// Sélectionne les éléments <head>
// Affiche le nombre d'éléments <script>


/****************************************************************
querySelector('selecteurCSS') :
    retourne le premier élément correspondant au sélecteur CSS
    si un élément existe, sinon retourne null
****************************************************************/
console.log("\n4. Sélecteur CSS : querySelector");

// Sélectionne le premier élément <p>
// Affiche l'élément sélectionné

// Sélectionne le premier élément <li> du premier <ol>
// Affiche le contenu HTML de l'élément sélectionné
// Donne le même résultat que innerHTML, car le li ne contient pas de balises HTML


/****************************************************************
querySelectorAll('selecteurCSS') :
    retourne tous les éléments correspondant au sélecteur CSS
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n5. Sélecteur CSS : querySelectorAll");

// Sélectionne tous les éléments <p>
// Parcourir les éléments d'une NodeList
// Affiche le texte de chaque élément sélectionné

// Sélectionne tous les éléments <li> de tous les <ul>
// Affiche le nombre d'éléments <li> sélectionnés