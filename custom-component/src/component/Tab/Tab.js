import React, { useState } from "react";
import "./Tab.css";

function Tab() {
  const [currentTab, setCurrrentTab] = useState(0)

  const menuArr = [
    { name: "Tab1", content : "Tab menu ONE"},
    { name: "Tab2", content : "Tab menu TWO"},
    { name: "Tab3", content : "Tab menu THREE"},
  ];

  const handleTab = (index) =>{
    setCurrrentTab(index);
  }

  return (
    <div className="tab-div">
      <div className="tab-menu">
        {menuArr.map((elem, index) =>{
          return(
            <li 
            key={index}
            className={currentTab === index ? "select-tab-elem" : "tab-elem"}
            onClick={() => handleTab(index)}
            >
              {elem.name}
            </li>
          )
        })}
      </div>

      <div className="tab-content">
        <div>{menuArr[currentTab].content}</div>
      </div>


     
    </div>
  );
}

export default Tab;
