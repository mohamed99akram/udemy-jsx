import React from "react";
import styles from "./courseContent.module.css";
import Section from "./Section";
function CourseContent() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Course content</h2>
        </div>
        <p style={{ margin: "0px" }}>
          <span>15 sections</span>
          <span>• 146 lectures </span>
          <span> • 14h 42m total length</span>
        </p>
        <div>
          {/* List of Sections */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <Section key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CourseContent;
