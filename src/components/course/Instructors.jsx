import React from "react";
import styles from "./instructors.module.css";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Expandable from "../common/Expandable";
function Instructor({ tag, instructor }) {
  return (
    <>
      <div id={tag}>
        <button
          style={{
            backgroundColor: "inherit",
            color: "purple",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          <h4 style={{ marginBottom: "0" }}>{instructor?.display_name}</h4>
        </button>
      </div>
      <p>{instructor?.job_title}</p>
      <div className={styles.instructor}>
        <img
          src={instructor?.image_100x100}
          alt="instructor 1"
          style={{ borderRadius: "1000px", width: "130px" }}
        />
        <ul className={styles.instructorRate}>
          {[
            // dummy data
            { desc: "4.4 Instructor Rating", icon: <StarIcon /> },
            { desc: "73,895 Reviews", icon: <WorkspacePremiumIcon /> },
            { desc: "892,878 Students", icon: <PeopleAltIcon /> },
            { desc: "16 Courses", icon: <PlayCircleFilledIcon /> },
          ].map((item, index) => {
            return (
              <li key={index}>
                <span style={{ margin: "7px" }}>{item.icon}</span>
                <span style={{ padding: "10px 0" }}>{item.desc}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <Expandable
        text={
          // dummy data
          "   Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content to hundreds of thousands of students around the world.\n His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.\nAvinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.\nCheckout TheCodex for all of his courses, fantastic discounts, and any guidance or help. "
        }
        limit={400}
      />
    </>
  );
}

function Instructors({ instructors }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Instructors</h2>
        {instructors?.map((instructor, index) => {
          return (
            <Instructor
              key={index}
              tag={"instructor" + index}
              instructor={instructor}
            />
          );
        })}
      </div>
    </>
  );
}

export default Instructors;
