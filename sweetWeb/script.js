let banWords = ["darmanin",
    "macron",
    "zemmour",
    "le pen",
    "manif pour tous",
    "islamogauchiste",
    "réponses fermes",
    "forces de l'ordre",
    "sanctions",
    "interdiction",
    "violences policières",
    "violamment réprimée",
    "eco-terroristes",
    "assassinat",
    "surveillance",
    "répression",
    "condamnations",
    "criminalisation",
    "dissoudre",
    "démocrature",
    "dictature",
    "grenades assourdissantes",
    "désencerclement",
    "museler",
]

// récupérer la requête provenant du background (f° remplacement de texte)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log(
    //     sender.tab ? "from a content script" + sender.tab.url : "from the extension/popup", request);
    if (request === 'CouCou') {
        replaceText(document.body, toReplace)
    }
})

// récupérer la requête provenant du background (f° ajouter banword)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(
        sender.tab ? "from a content script" + sender.tab.url : "from the extension/popup", request);
    if (request != 'CouCou') {
        // mettre dans le local storage
        chrome.storage.local.set({ testing: `${request}` }).then(() => {
            console.log('value is set')
            chrome.storage.local.get(["testing"]).then((result) => {
                console.log("[SCRIPT] Value currently is  " + result.testing);
                let tempo = result.testing;
                console.log(tempo + ' of type:' + typeof (tempo));

                banWords.push(tempo);
            });
        })
    }
})

const toReplace = ""

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

        for (i = 0; i < banWords.length; i++) {
            toReplace = insertInRegex(banWords[i])
            console.log(toReplace)
            element.textContent = element.textContent.replace(toReplace, '💗💗💗💗💗');
        }
    }
}





