import React from "react";
import styles from "./courseContent.module.css";
import Section from "./Section";
function CourseContent({course}) {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Course content</h2>
        </div>
        <p style={{ margin: "0px" }}>
          <span>{course?.data?.sections?.length??0} sections</span>
          <span>• {course?.data?.num_of_published_lectures} lectures </span>
          <span> • {course?.data?.estimated_content_length_text} hours total length</span>
        </p>
        <div>
          {/* List of Sections */}
          {course?.data?.sections?.map((item, index) => (
            <Section key={index} section={item}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default CourseContent;
