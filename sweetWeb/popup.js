(() => {
    const button = document.getElementById('myCheckbox');
    button.addEventListener('click', function () {
        console.log('clicked')
        enabledDisabled()
        //appel de la fonction 

        chrome.runtime.sendMessage({ greeting: 'Hello' }).then(response =>
            console.log(response))
    })
})()

function enabledDisabled() {
    chrome.storage.local.get(["enabled"]).then((result) => {
        if (result.enabled === true) {
            chrome.storage.local.set({ enabled: false }).then(() => {
                console.log(result.enabled)
            })
        }
        else {
            chrome.storage.local.set({ enabled: true }).then(() => {
                console.log(result.enabled)
            })
        }
    })
}

function buttonSwitch() {
    console.log('switch')
    document.querySelector('#changeButtonState').innerHTML = `    <input id="myCheckbox" type="checkbox" value="yes" checked />
            <span class="slider round"></span>`
}

buttonSwitch()