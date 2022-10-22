import React from "react";
import Expandable from "../common/Expandable";
import styles from "./reqs-desc.module.css";

function Requirements({ reqs }) {
  return (
    <>
      <h2>Requirements</h2>
      <ul style={{ marginLeft: "30px" }}>
        {reqs?.map((req, index) => {
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
function ReqsDesc({ details }) {
  return (
    <>
      <div className={styles.container}>
        <Requirements reqs={details?.Requirements} />
        <Description desc={details?.description} />
      </div>
    </>
  );
}

export default ReqsDesc;
