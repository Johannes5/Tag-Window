interface ContentState {
  title?: string;
  observer?: MutationObserver;
}

const state: ContentState = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type == "load") {
    if (state.observer) {
      state.observer.disconnect();
    }
    load();
  }
});

const check = (emoji: string) => {
  if (!state.title && document.title) {
    state.title = document.title;
  }

  if (state.title && !document.title.includes(emoji)) {
    document.title = `${emoji} | ${state.title}`;
  }
};

const load = () => {
  chrome.runtime.sendMessage({ type: "getWindowId" }, (windowId) => {
    const key = windowId.toString();
    console.log(key);

    chrome.storage.local.get([key], (item) => {
      if (item[key]) {
        check(item[key]);
        state.observer = new MutationObserver((mutations) => {
          check(item[key]);
        });
        state.observer.observe(document.head, {
          childList: true,
          subtree: true,
          attributes: false,
          characterData: false,
        });
      }
    });
  });
};

load();

export {};
