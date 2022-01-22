const titleInnerHTML = document.querySelector("title").innerHTML;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type == "load") {
    load();
  }
});

const load = () => {
  chrome.runtime.sendMessage({ type: "getWindowId" }, (windowId) => {
    const key = windowId.toString();
    console.log(key);

    chrome.storage.local.get([key], (item) => {
      if (item[key]) {
        document.querySelector(
          "title"
        ).innerHTML = `${item[key]} | ${titleInnerHTML}`;
      }
    });
  });
};

load();

export {};
