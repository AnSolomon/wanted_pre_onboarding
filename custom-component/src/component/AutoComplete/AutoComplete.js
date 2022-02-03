import React, { useRef, useState } from "react";
import "./AutoComplete.css";

function AutoComplete() {
  const autoComInputRef = useRef("");
  const [resultWord, setResultWord] = useState([]);

  const wordData = [
    "antique",
    "vintage",
    "중고A급",
    "rustic",
    "refurbished",
  ];

  const searchWord = () => {
    if (!autoComInputRef.current.value.trim()) {
      setResultWord([]);
    } else {
      setResultWord(
        wordData.filter((word) => {
          return (
            word
              .toUpperCase()
              .indexOf(autoComInputRef.current.value.trim().toUpperCase()) !==
            -1
          );
        })
      );
    }
  };

  const deleteWord = () => {
    autoComInputRef.current.value = "";
    setResultWord([]);
  };

  const selectWord = (word) => {
    autoComInputRef.current.value = word;
    searchWord();
  };

  return (
    <div className="autoComplete-div">
      <div
        className={
          autoComInputRef.current.value
            ? "autoComplete-body-focus"
            : "autoComplete-body-init"
        }
      >
        <div
          className={
            resultWord.length
              ? "autoComplete-search"
              : "autoComplete-init"
          }
        >
          <input
            ref={autoComInputRef}
            className="autoComplete-input"
            type="text"
            onChange={searchWord}
          />
          <div className="autoComplete-delete" onClick={deleteWord}>
            x
          </div>
        </div>

        {resultWord.map((elem, index) => {
          return (
            <div
              className="autoComplete-word"
              key={index}
              onClick={() => selectWord(elem)}
            >
              {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AutoComplete;
