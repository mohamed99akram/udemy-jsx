import React from "react";
import { Link } from "react-router-dom";
import Rating from "../common/Rating";
import styles from "./header.module.css";
function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <h1>Learn Python: The Complete Python Programming Course</h1>
          <h3>
            Learn A-Z everything about Python, from the basics, to advanced
            topics like Python GUI, Python Data Analysis, and more!
          </h3>
          <div className={styles.details}>
            <Rating rating={3.5} />
            <Link to={"#rating"}>({3234} ratings)</Link>
            <span>{19560} students</span>
          </div>
          <div className={styles.details}>
            <span>Created by </span>
            {["Avinash Jain", "The Codex"].map((instructor, index) => {
              return (
                <Link key={index} to={"#instructor" + index}>
                  {instructor},{" "}
                </Link>
              );
            })}
          </div>
          <div className={styles.details}>
            <span>Last updated 9/2015</span>
            <span>English</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
