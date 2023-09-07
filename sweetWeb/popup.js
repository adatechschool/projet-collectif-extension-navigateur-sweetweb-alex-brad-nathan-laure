(()=>{
    const button = document.getElementById('myCheckbox');
    button.addEventListener('click', function () {
        console.log('clicked')

        chrome.runtime.sendMessage({greeting:'Hello'}).then(response =>
            console.log(response))
        })
    })()
  
