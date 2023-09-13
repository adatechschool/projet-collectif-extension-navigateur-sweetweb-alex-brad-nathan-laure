let banWords = ["darmanin",
    "macron",
    "zemmour",
    "le pen",
    "manif pour tous",
]

const toReplace = ""

// récupérer la requête provenant du background (f° remplacement de texte)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request === 'CouCou') {
        addToBanWords()
        replaceText(document.body, toReplace)
    }
})

// récupérer la requête provenant du background (f° ajouter banword)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(
        sender.tab ? "from a content script" + sender.tab.url : "from the extension/popup", request);
    if (request != 'CouCou') {
        // mettre dans le local storage
        let storedStrings = checkLocalStorage();
        stockLocalStorage(request, storedStrings);
        addToBanWords(storedStrings)
    }
})

// récupèration des éléments du localStorage à partir de la clé : storedStrings
// et si le localStorage est vide ==> création d'un tableau vide
function checkLocalStorage() {
    let storedStrings = localStorage.getItem('storedStrings');
    storedStrings = storedStrings ? JSON.parse(storedStrings) : [];
    console.log('essai', storedStrings)
    return storedStrings;
}

// Ajout du newBanWord dans le localStorage
// transformation en chaine de caractères Json
function stockLocalStorage(newBanWord, storedStrings) {
    storedStrings.push(newBanWord);
    localStorage.setItem('storedStrings', JSON.stringify(storedStrings));
}

// spread operator ("...") ==> concaténation de deux tableaux pour en faire un seul
function addToBanWords() {
    const storedWords = JSON.parse(localStorage.getItem('storedStrings')) || [];
    banWords = [...banWords, ...storedWords];
}


// Insère une chaîne de caractère dans une Regex
function insertInRegex(textToAdd) {
    const testVar = textToAdd;
    const regex = new RegExp(`${testVar}`, 'gi');
    return regex
}

// fonction qui parcourt tous les éléments du DOM
function replaceText(element, toReplace) {
    // vérifie si l'élément parcouru a des noeuds enfants
    if (element.hasChildNodes()) {
        // Pour chacun des noeuds enfants rappelle la fonction (récursivité)
        element.childNodes.forEach((element) => {
            replaceText(element, toReplace)
        })
        // Si l'élément du noeud parcouru est bien de type texte, rentre dans la boucle
    } else if (element.nodeType === Text.TEXT_NODE) {
        for (i = 0; i < banWords.length; i++) {
            toReplace = insertInRegex(banWords[i])
            console.log(toReplace)
            element.textContent = element.textContent.replace(toReplace, '💗🦄💗😻💗🐕💗');
        }
    }
}
