import React, { useState } from "react";

function Expandable({ text = "descrption", limit = 150}) {
  let [more, setMore] = useState(false);
  let showMore = () => {
    setMore(!more);
  };
  let removeNewLine = (text) => {
    return text.split("\n").map((str, index) => <p key={index}>{str}</p>);
  };
  return (
    <>
      {more ? removeNewLine(text) : removeNewLine(text.substring(0, limit))}
      <button
        onClick={showMore}
        style={{
          backgroundColor: "inherit",
          color: "purple",
          border: "none",
          cursor: "pointer",
        }}
      >
        Show {more ? "less" : "more"}
      </button>
    </>
  );
}

export default Expandable;
