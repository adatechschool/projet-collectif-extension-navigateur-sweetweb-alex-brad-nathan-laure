// Importe le tableau contenant les mots méchants
// import { array } from "./dictionary";

// Insère une chaîne de caractère dans une Regex
function insertInRegex(textToAdd) {
    const testVar = textToAdd;
    const regex = new RegExp(`${testVar}`, 'gi');
    return regex
}

// fonction qui parcoure tous les éléments du DOM
function replaceText(element, toReplace) {
    // vérifie si l'élément parcouru a des noeuds enfants
    if (element.hasChildNodes()) {
        // Pour chacun des noeuds enfants rappelle la fonction (récursivité)
        element.childNodes.forEach((element) => {
            replaceText(element, toReplace)
        })
        // Si l'élément du noeud parcouru est bien de type texte, rentre dans la boucle
    } else if (element.nodeType === Text.TEXT_NODE) {
        // on remplace le texte qui correspond au regex
        element.textContent = element.textContent.replace(toReplace, '💗💗💗💗💗');

        // Option longueur mot (marche pas pour l'instant)
        // const wordLength = element.textContent.length;
        // console.log(wordLength)
        // let newWord = ''
        // for (i = 0; i < wordLength; i++) {
        //     newWord += '*'
        // }
        // console.log(newWord)

    }
}


const toReplace = insertInRegex('coronavirus')
console.log(toReplace)
replaceText(document.body, toReplace)