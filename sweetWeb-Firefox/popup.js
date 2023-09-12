(() => {
    const button = document.getElementById('myCheckbox');
    button.addEventListener('click', function () {
        console.log('clicked')
        enabledDisabled()
         //appel de la fonction 
        browser.runtime.sendMessage({greeting:'Hello'}).then(response =>
            console.log(response))
    })
})()

function enabledDisabled() {
    browser.storage.local.get(["enabled"]).then((result) => {
        if (result.enabled === true) {
            browser.storage.local.set({ enabled: false }).then(() => {
                console.log(result.enabled)
            })
        }
        else {
            browser.storage.local.set({ enabled: true }).then(() => {
                console.log(result.enabled)
            })
        }
    })
}

// function buttonSwitch() {
//     console.log('switch')
//     browser.storage.local.get(["enabled"]).then((result) => {
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



