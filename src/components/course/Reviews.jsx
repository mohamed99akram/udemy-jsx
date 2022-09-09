// import { Input } from '@mui/material'
import Rating from "../common/Rating";
import React from "react";
import styles from "./review.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useState } from "react";
function Review() {
  let [liked, setLiked] = useState(false);
  let [disliked, setDisLiked] = useState(false);
  let likeHandler = () => {
    if (!liked) {
      setDisLiked(false);
    }
    setLiked(!liked);
  };
  let dislikeHandler = () => {
    if (!disliked) {
      setLiked(false);
    }
    setDisLiked(!disliked);
  };
  return (
    <>
      <div>
        <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
          <div className={styles.userImg}>{"AH"}</div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <div>
              <h3 style={{ margin: "0" }}>Asif H.</h3>
            </div>
            <div>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "17px",
                }}
              >
                <Rating rating={3} />
                <span style={{ margin: "0 10px" }}>2 weeks ago</span>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quod, quia, voluptates quas voluptatibus
                quibusdam voluptatum quae quidem natus quos. Quisquam, quae.
                Quisquam voluptate, quod, quia, voluptates quas voluptatibus
                quibusdam voluptatum quae quidem natus quos. Quisquam, quae.
              </p>
            </div>
            <div>Was this review helpful?</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div onClick={likeHandler}>
                <ThumbUpOffAltIcon className={(liked ? styles.iconPressed : styles.icon)} />
              </div>
              <div onClick={dislikeHandler}>
                <ThumbDownOffAltIcon className={ (disliked ? styles.iconPressed : styles.icon)} />
              </div>
              <button
                style={{
                  backgroundColor: "inherit",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Reviews() {
  return (
    <div className={styles.container}>
      <h2>Reviews</h2>
      {/* <Input style={{border:"solid 1px"}}></Input> */}
      {[1, 2, 3, 4, 5].map((item, index) => {
        return <Review key={index} />;
      })}
    </div>
  );
}

export default Reviews;
