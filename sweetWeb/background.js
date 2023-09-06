let isActivated = true;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if (message.action === 'toggleActivation'){
        isActivated = !isActivated
        sendResponse({activated: isActivated});
    }
})