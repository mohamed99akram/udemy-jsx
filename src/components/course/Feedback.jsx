import React from "react";
import Rating from "../common/Rating";
import styles from "./feedback.module.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

function ProgressBar({ percentage = 43, stars = 5 }) {
  let RightSide = () => {
    return (
      <span style={{ width: "100px"}}>
        <Rating rating={stars} />
        <span>{percentage + "%"}</span>
      </span>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "4px 30px" }}>
      <Progress
        percent={percentage}
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

function Feedback({course}) {
  let rating = course?.averageRating?.toFixed(1);
  let totalRatings = course?.ratingDistribution?.reduce((acc, curr) => { 
    return acc + curr.count;
  }, 0);
  return (
    <>
      <div className={styles.container}>
        <h2>Students Feedback</h2>
        <div className={styles.feedback}>
          <div className={styles.feedbackLeft}>
            <div className={styles.bigRating}>{rating}</div>
            <div style={{ fontSize: "17px", marginBottom: "10px" }}>
              <Rating rating={rating} />
            </div>
            <div className={styles.courseRating}>Course Rating</div>
          </div>
          <div style={{ width: "100%" }}>
            {course?.ratingDistribution?.map((item, index) => {
              return (
                <ProgressBar percentage={Math.round(item?.count / totalRatings * 100)} key={index} stars={index + 1} />
              );
            }).reverse()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
