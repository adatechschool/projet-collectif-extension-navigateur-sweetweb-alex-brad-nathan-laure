// envoie un message au background (f° remplacement de texte)
(() => {
    const button = document.getElementById('myCheckbox');
    button.addEventListener('click', function () {
        console.log('clicked')
        // enabledDisabled()

        //appel des fonctions
        chrome.runtime.sendMessage({ greeting: 'Hello' }).then(response =>
            console.log(response))
    })
})();

// envoie un message au background (f° ajouter des banwords)
(() => {
    const banWordButton = document.getElementById('banWordButton');
    banWordButton.addEventListener('click', function () {
        console.log('banword is coming');
        let test = '';
        test = window.prompt('Enter a banword you want to add to block it:');
        console.log('essai 2', test)
        chrome.runtime.sendMessage({ banWord: `${test}` }).then(response =>
            console.log(response))
    })
})();




// function enabledDisabled() {
//     chrome.storage.local.get(["enabled"]).then((result) => {
//         if (result.enabled === true) {
//             chrome.storage.local.set({ enabled: false }).then(() => {
//                 console.log(result.enabled)
//             })
//         }
//         else {
//             chrome.storage.local.set({ enabled: true }).then(() => {
//                 console.log(result.enabled)
//             })
//         }
//     })
// }


// function addToBanWord() {
//     let wordToBan = document.querySelector('#textToBan').value
//     console.log(wordToBan)
// }



// function buttonSwitch() {
//     console.log('switch')
//     chrome.storage.local.get(["enabled"]).then((result) => {
//         if (result.enabled === true) {
//             console.log('True -> button checked')
//             document.querySelector('#changeButtonState').innerHTML = `    <input id="myCheckbox" type="checkbox" value="yes" checked />
//             <span class="slider round"></span>`
//         } else {
//             console.log('False -> button unchecked')
//             document.querySelector('#changeButtonState').innerHTML = `    <input id="myCheckbox" type="checkbox" value="yes" />
//             <span class="slider round"></span>`
//         }
//     })
// }
