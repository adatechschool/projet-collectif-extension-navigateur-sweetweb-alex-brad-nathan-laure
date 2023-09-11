(() => {
    const button = document.getElementById('myCheckbox');
    button.addEventListener('click', function () {
        console.log('clicked')

        chrome.runtime.sendMessage({ greeting: 'Hello' }).then(response =>
            console.log(response))
    })
})()

function buttonSwitch() {
    console.log('switch')
    document.querySelector('#changeButtonState').innerHTML = `    <input id="myCheckbox" type="checkbox" value="yes" checked />
    <span class="slider round"></span>`
}

buttonSwitch()

