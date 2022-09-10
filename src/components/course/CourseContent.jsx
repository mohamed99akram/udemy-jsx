import React from "react";
import styles from "./courseContent.module.css";
import Section from "./Section";
function CourseContent({course}) {
  let hours = new Date(course?.estimated_content_length_in_seconds * 1000).getUTCHours()
  let minutes = new Date(course?.estimated_content_length_in_seconds * 1000).getUTCMinutes()

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Course content</h2>
        </div>
        <p style={{ margin: "0px" }}>
          <span>{course?.sections?.length??0} sections</span>
          <span>• {course?.num_of_published_lectures} lectures </span>
          <span> • {hours}h {minutes}m total length</span>
        </p>
        <div>
          {/* List of Sections */}
          {course?.sections?.map((item, index) => (
            <Section key={index} section={item}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default CourseContent;
