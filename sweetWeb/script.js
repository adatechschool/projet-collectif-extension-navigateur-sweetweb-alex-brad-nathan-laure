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

let toReplace = '';

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

const checkbox = document.getElementById("check")

checkbox.addEventListener("change", function() {
    if(checkbox.checked) {
        replaceText(document.body, toReplace)
        location.reload(true);
        // console.log("button click")
    } else {
        location.reload(true);
    }
})