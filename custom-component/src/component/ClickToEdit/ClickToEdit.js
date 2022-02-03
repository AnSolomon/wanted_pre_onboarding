import React, { useEffect, useRef, useState } from "react";
import "./ClickToEdit.css";

function ClickToEditElem({ title, content, setState }) {
  const editInput = useRef("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);

  useEffect(() => {
    if (isEdit) {
      editInput.current.focus();
    }
  }, [isEdit]);

  const handleIsEdit = () => {
    setIsEdit(true);
  };

  const handleBlur = () => {
    setIsEdit(false);
    setState(currentContent);

  };

  const editContent = (e) =>{
    setCurrentContent(e.target.value);
  };

  return (
    <div className="clickToEdit-elem">
      <label>{title}</label>
      <div>
        {isEdit ? (
          <input
            ref={editInput}
            value={currentContent}
            className="clickToEdit-input"
            onBlur={handleBlur}
            onChange={editContent}
          />
        ) : (
          <div
            className="clickToEdit-display"
            onDoubleClick={handleIsEdit}
          >
            {currentContent}
          </div>
        )}
      </div>
    </div>
  );
}

function ClickToEdit() {
  const [inputName, setInputName] = useState("김코딩");
  const [inputAge, setInputAge] = useState("20");

  return (
    <div className="clickToEdit-div">
      <ClickToEditElem title="이름" content={inputName} setState = {(newValue) => setInputName(newValue)} />
      <ClickToEditElem title="나이" content={inputAge} setState = {(newValue) => setInputAge(newValue)} />
      <div>이름 {inputName} 나이 {inputAge}</div>
    </div>
  );
}

export default ClickToEdit;
