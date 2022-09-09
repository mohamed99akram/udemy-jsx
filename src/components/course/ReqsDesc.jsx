import React from "react";
import Expandable from "../common/Expandable";
import styles from "./reqs-desc.module.css";

function Requirements({ reqs }) {
  return (
    <>
      <h2>Requirements</h2>
      <ul style={{ marginLeft: "30px" }}>
        {reqs.map((req, index) => {
          return (
            <li key={index}>
              <p style={{ margin: "0" }}>{req}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
function Description({ desc }) {
  return (
    <>
      <div>
        <h2>Description</h2>
        <Expandable text={desc} />
      </div>
    </>
  );
}
// Requirements and Description
function ReqsDesc() {
  return (
    <>
      <div className={styles.container}>
        <Requirements
          reqs={[
            "Macintosh (OSX)/ Windows(Vista and higher) Machine",
            "Internet Connection",
          ]}
        />
        <Description desc="This course is designed to teach you the basics of Python programming. We will start with the very basics of Python and work our way up to more advanced topics. We will cover everything from the very basics of Python to more advanced topics such as Object Oriented Programming, GUIs, and even how to create your own Python modules and packages. By the end of this course, you will have a solid understanding of Python and will be able to create your own Python programs." />
      </div>
    </>
  );
}

export default ReqsDesc;
