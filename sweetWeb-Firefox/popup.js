// envoie un message au background (f° remplacement de texte)
(() => {
    const button = document.getElementById('myCheckbox');
    button.addEventListener('click', function () {
        console.log('clicked')
        // enabledDisabled()

        //appel des fonctions
        browser.runtime.sendMessage({ greeting: 'Hello' }).then(response =>
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
        browser.runtime.sendMessage({ banWord: `${test}` }).then(response =>
            console.log(response))
    })
})();



