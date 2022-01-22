import { getRandomEmoji } from "./utils";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type == "getWindowId") {
    sendResponse(sender.tab.windowId);
  }
});

chrome.storage.local.get("active", (item) => {
  if (item.active === undefined) {
    chrome.storage.local.set({ active: true });
  }
});

chrome.windows.onCreated.addListener((window) => {
  chrome.storage.local.set({
    [window.id.toString()]: getRandomEmoji(),
  });
});

chrome.tabs.onMoved.addListener((tabId) => {
  chrome.tabs.sendMessage(tabId, { type: "load" });
});

chrome.windows.onRemoved.addListener((windowId) => {
  chrome.storage.local.remove(windowId.toString());
});
