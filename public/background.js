
let focusedWindowId

let disableAutoTagging = false

const emojiCollection = ["🍻","🔥","🌹","💄","🎀","⚽","🎾","🏁","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💪","💩"
    ,"🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊",
    "💋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱", "💰","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉"]


const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

function updateTitlePreposition(str) {
    document.title = " " + str + " | " + document.title
}

const addPrepositionToTab = (tab) => {
    if (disableAutoTagging) return

    //get emoji
    const titlePreposition = chrome.storage.local.get([`${focusedWindowId}`])

    //append
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: updateTitlePreposition,
        args: [titlePreposition]
    });

}

const createPrepositionForWindow = (window) => {
    const key = window.id.toString()
    //chrome.storage.local.set({['windowPrepositions'+key]: {key: randomValue(emojiCollection)}}, () => console.log("new window id", window.id, key))
    chrome.storage.local.set({[key]: randomValue(emojiCollection)}, () => console.log("new window", key))
}

chrome.windows.onFocusChanged.addListener((window) => focusedWindowId = window?.id)

//get emoji and append
chrome.tabs.onCreated.addListener(addPrepositionToTab)

//keep tabs up to date
chrome.tabs.onUpdated.addListener(addPrepositionToTab)

//save {id: emoji} pair
chrome.windows.onCreated.addListener(createPrepositionForWindow)


