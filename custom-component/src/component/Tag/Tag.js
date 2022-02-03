import React, { useEffect, useRef, useState } from "react";
import "./Tag.css";

function Tag() {
  const tagInputRef = useRef("");
  const [tagArr, setTagArr] = useState([]);

  useEffect(() => {
    tagInputRef.current.value = "";
  }, [tagArr]);

  const makeTag = (e) => {
    if (e.key === "Enter") {
      if (tagInputRef.current.value.trim()) {
        setTagArr((tagArr) => [...tagArr, tagInputRef.current.value]);
      } else {
        tagInputRef.current.value = "";
      }
    }
  };

  const deleteTag = (delIndex) => {
    setTagArr(
      tagArr.filter((elem, index) => {
        return index !== delIndex;
      })
    );
  };

  return (
    <div className="tag-div">
      <div className="tag-body">
        {tagArr.map((elem, index) => {
          return (
            <div key={index} className="tag-elem">
              <div className="tag-content">{elem}</div>
              <div className="tag-delete" onClick={() => deleteTag(index)}>
                x
              </div>
            </div>
          );
        })}

        <input
          ref={tagInputRef}
          type="text"
          placeholder="Press enter to add tags"
          onKeyPress={makeTag}
        />
      </div>
    </div>
  );
}

export default Tag;
