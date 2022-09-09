import React from "react";
import styles from "../styles/card.module.css";
import Rating from "./common/Rating";
function Card({ course }) {
  return (
    <a href="/#" className={styles.course}>
      <img src={course.image} style={{ width: "100%" }} alt="course" />
      <div className={styles.courseText}>
        <h3>{course?.title ?? "Course Name"}</h3>
        <span className={styles.instructorName}>
          {course?.instructor ?? "Jeff Bezos"}
        </span>
        <div>
          
         <span className="rating">{course?.rating??4.5}</span>
          <Rating rating={course.rating} />
        </div>
        <h3>{course?.price ?? "Free"}</h3>
      </div>
    </a>
  );
}

export default Card;
