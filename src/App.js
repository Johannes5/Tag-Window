import React from 'react';
import './App.css';

import TitleChanger from './components/TitleChanger'
import Tooltip from './components/Tooltip'

/*let tag = ''

function tagWindow(){
    console.log("tagWindow", tag)
}*/

function updateTitlePreposition(str) {
    //tag = str
    document.title = " " + str + " | " + document.title
}




function App() {
    const [titlePreposition, setTitlePreposition] = React.useState('');
    const [input, setInput] = React.useState('');
    const inputRef = React.useRef(null);

    React.useEffect(() => {

        if (titlePreposition === '') {
            inputRef.current.focus()
            return
        }

        chrome.tabs.query({currentWindow: true}, tabs => {
            tabs.forEach(tab => {

                console.log("tab", tab)

                if (tab.status === "unloaded") {
                    chrome.tabs.reload(tab.id)
                }

                if (!tab.url?.startsWith('chrome://')) {
                    //chrome.tabs.onUpdated.addListener((tab.id, {}, tab) => {updateTitlePreposition(titlePreposition)})
                    //chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {updateTitlePreposition(titlePreposition)})

                    chrome.scripting.executeScript({
                        target: {tabId: tab.id},
                        func: updateTitlePreposition,
                        args: [titlePreposition]
                    });
                }
            });
        });
    }, [titlePreposition])

    const inputHandler = (event) => {
        setInput(event.target.value);
    }

    const submitHandler = () => {
        setTitlePreposition(input);
        console.log("titlePreposition", titlePreposition);


    }

    return (
        <TitleChanger
            textInput={{
                onChange: inputHandler,
                ref: inputRef
            }}

            button={{
                onClick: submitHandler
            }}

            infoIconWrapper={{
                wrapChildren: (children) => (
                    <Tooltip id="why" content={"when you are looking at Application Exposé / Mission Control" + "\n" +
                    "and find yourself squinting at tab bars"}>
                        {children}
                    </Tooltip>
                ),
            }}
        />
    );
}

export default App;
