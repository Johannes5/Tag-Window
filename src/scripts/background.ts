import { getRandomEmoji } from "./utils";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type == "getTabId") {
    sendResponse(sender.tab.id);
  }
});

chrome.tabs.onCreated.addListener((tab) => {
  chrome.storage.local.set({
    [tab.id.toString()]: getRandomEmoji(),
  });
});

chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.storage.local.remove(tabId.toString());
});
