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

async function sendMessageToActiveTab(message) {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

  const response = await chrome.tabs.sendMessage(tab.id, message);

}
