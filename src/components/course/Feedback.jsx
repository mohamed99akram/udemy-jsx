import React from "react";
import Rating from "../common/Rating";
import styles from "./feedback.module.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

function ProgressBar({ rating = 43, stars = 5 }) {
  let RightSide = () => {
    return (
      <span style={{ width: "100px"}}>
        <Rating rating={stars} />
        <span>{rating + "%"}</span>
      </span>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "4px 30px" }}>
      <Progress
        percent={rating}
        status="success"
        theme={{
          success: {
            symbol: " ",
            color: "#6a6f73",
            trailColor: "#d1d7dc",
          },
        }}
      />
      <RightSide />
    </div>
  );
}

function Feedback() {
  return (
    <>
      <div className={styles.container}>
        <h2>Students Feedback</h2>
        <div className={styles.feedback}>
          <div className={styles.feedbackLeft}>
            <div className={styles.bigRating}>4.4</div>
            <div style={{ fontSize: "17px", marginBottom: "10px" }}>
              <Rating rating={4.4} />
            </div>
            <div className={styles.courseRating}>Course Rating</div>
          </div>
          <div style={{ width: "100%" }}>
            {[43, 37, 15, 3, 2].map((rating, index) => {
              return (
                <ProgressBar rating={rating} key={index} stars={5 - index} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
