import { getRandomEmoji } from "./utils";

chrome.runtime.sendMessage({ type: "getTabId" }, (tabId) => {
  const key = tabId.toString();

  chrome.storage.local.get(key, (item) => {
    let emoji = item[key];
    if (emoji === undefined) {
      emoji = getRandomEmoji();
      chrome.storage.local.set({
        [key]: emoji,
      });
    }

    document.querySelector("title").prepend(`${emoji} | `);
  });
});

export {};
