import React from "react";
import "./App.css";

import TitleChanger from "./components/TitleChanger";
import Tooltip from "./components/Tooltip";
import { NormalSwitch } from "./components/NormalSwitch";

function App() {
  const [titlePreposition, setTitlePreposition] = React.useState("");
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (titlePreposition === "") {
      inputRef.current.focus();
      return;
    }

    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      chrome.storage.local.set(
        {
          [tabs[0].windowId.toString()]: titlePreposition,
        },
        () => {
          tabs.forEach((tab) => {
            if (tab.status === "unloaded") {
              chrome.tabs.reload(tab.id);
            }

            chrome.tabs.sendMessage(tab.id, { type: "load" });
          });
        }
      );
    });
  }, [titlePreposition]);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = () => {
    setTitlePreposition(input);
    console.log("titlePreposition", titlePreposition);
  };

  return (
    <>
      <TitleChanger
        textInput={{
          onChange: inputHandler,
          ref: inputRef,
        }}
        button={{
          onClick: submitHandler,
        }}
        infoIconWrapper={{
          wrapChildren: (children) => (
            <Tooltip
              id="why"
              content={
                "when you are looking at Application Exposé / Mission Control" +
                "\n" +
                "and find yourself squinting at tab bars"
              }
            >
              {children}
            </Tooltip>
          ),
        }}
      />
      <NormalSwitch />
    </>
  );
}

export default App;
