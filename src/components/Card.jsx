import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/card.module.css";
import Rating from "./common/Rating";
function Card({ course }) {
  return (
    <Link to={"/courses/"+course.id} className={styles.course}>
      <img src={course.image_480x270} style={{ width: "100%" }} alt="course" />
      <div className={styles.courseText}>
        <h3>{course?.title ?? "Course Name"}</h3>
        <span className={styles.instructorName}>
          {(course?.visible_instructors ?? [{ title: "Jeff Bezos" }]).map(
            (instructor, index, all) => {
              return instructor.title + (index !== all.length - 1 ? ", " : "");
            }
          )}
        </span>
        <div>
          <span className="rating">{course?.rating?.toFixed(1) ?? 4.5}</span>
          <Rating rating={course.rating.toFixed(1)} />
        </div>
        <h3>
          {course?.price?.list_price?.amount +
            course?.price?.list_price?.currency ?? "Free"}
        </h3>
      </div>
    </Link>
  );
}

export default Card;
