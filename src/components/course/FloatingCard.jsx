import React from "react";
import styles from "./floatingCard.module.css";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import StayPrimaryPortraitOutlinedIcon from "@mui/icons-material/StayPrimaryPortraitOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
function FloatingCard({ course }) {
  const includes = [
    {
      icon: <OndemandVideoIcon />,
      text: course?.content_info_short + " on-demand video",
    },
    { icon: <InsertDriveFileOutlinedIcon />, text: "1 article" },
    { icon: <FileDownloadOutlinedIcon />, text: "3 downloadable resource" },
    { icon: <AllInclusiveOutlinedIcon />, text: "Full lifetime access" },
    {
      icon: <StayPrimaryPortraitOutlinedIcon />,
      text: "Access on mobile and TV",
    },
    { icon: <EmojiEventsOutlinedIcon />, text: "Certificate of completion" },
  ];
  return (
    <div className={styles.leftMargined}>
      <div className={styles.card}>
        <img src={course?.image_480x270} alt="" className={styles.courseImg} />
        <div className={styles.cardContent}>
          <div className={styles.price}>
            <h1>
              {course?.price?.list_price?.currency_symbol +
                course?.price?.list_price?.amount ?? "Free"}
            </h1>
          </div>
          <button className={styles.button + " " + styles.addToCart}>
            Add to cart
          </button>
          <button className={styles.button + " " + styles.buyNow}>
            Buy now
          </button>
          <h7 style={{ alignSelf: "center" }}>30-Day Money-Back Guarantee</h7>
          <h3 style={{ margin: "0" }}>This course includes:</h3>
          <ul style={{ padding: "0" }}>
            {includes.map((include, index) => {
              return (
                <li key={index} style={{ listStyle: "none" }}>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "5px",
                    }}
                  >
                    {include?.icon}
                    <div style={{ marginLeft: "15px" }}>{include?.text}</div>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FloatingCard;
