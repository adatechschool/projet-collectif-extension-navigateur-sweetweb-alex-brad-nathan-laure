// récupère le message du pop-up (pour f° remplacement des banwords)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab ? "from a content script" + sender.tab.url
      : "from the extension/popup",
    request
  );
  if (request.greeting === "Hello") {
    sendMessageToActiveTab('CouCou')
    sendResponse({ farewell: "Goodbyeeeeeeeee" });

  }
});

// récupère le message du pop-up (pour f° ajouter des banwords)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab ? "from a content script" + sender.tab.url
      : "from the extension/popup",
    request
  );
  if (!(request.greeting === 'Hello')) {
    sendMessageToActiveTab(request.banWord)
    console.log('banWord received :' + request.banWord)
  }
  sendResponse({ farewell: "Goodbyeeeeeeeee" });

});

// fonction pour envoyer message au script (récupère l'onglet actif, puis envoie le message vers cet onglet)
async function sendMessageToActiveTab(message) {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, message);
}
