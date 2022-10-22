import React from "react";
import { Link } from "react-router-dom";
import Rating from "../common/Rating";
import styles from "./header.module.css";
function Header({ course }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <h1>{course?.title ?? "Course Name"}</h1>
          <h3>{course?.headline ?? "Course Headline"}</h3>
          <div className={styles.details}>
            <span>
              <span className="rating">
                {course?.rating?.toFixed(1) ?? 4.5}
              </span>
              <Rating rating={course?.rating?.toFixed(1) ?? 4.5} />
            </span>
            <Link to={"#rating"}>({course?.num_reviews ?? 3146} ratings)</Link>
            <span>{course?.num_subscribers ?? 0} students</span>
          </div>
          <div className={styles.details}>
            <span>Created by </span>
            {course?.visible_instructors?.map((instructor, index, all) => {
              return (
                <Link key={index} to={"#instructor" + index}>
                  {instructor?.title ??
                    "Me" + (index < all.length - 1 ? ", " : "")}
                </Link>
              );
            })}
          </div>
          <div className={styles.details}>
            <span>
              {"Last updated " + (course?.last_update_date ?? "11-11-1111")}
            </span>
            <span>{course?.locale?.title}</span>
            <span>
              {course?.caption_languages?.map((item, index) => {
                if (index < 2) return <div key={index}>{item}</div>;
                else return null;
              })}
            </span>
            <span>{course?.caption_languages?.length>2?"And More":""}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
