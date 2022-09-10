import React from "react";
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import styles from "./section.module.css";
function Lesson({lesson}) {
  return (
    <>
      <PlayCircleFilledIcon sx={{ margin: "0 15px" }} />
      <h4 style={{ margin: "0" }}>{lesson?.title}</h4>
      <span style={{ flex: "1 1 0%" }}></span>
      <span style={{ margin: "0 15px" }}>{lesson?.content_summary}</span>
    </>
  );
}

function Section({ section }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  let hours = new Date(section?.content_length * 1000).getUTCHours();
  let minutes = new Date(section?.content_length  * 1000).getUTCMinutes();
  let seconds = new Date(section?.content_length  * 1000).getUTCSeconds();
  if(seconds>0){
    minutes+=1;
  }
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{ flexDirection: "row-reverse", backgroundColor: "#f7f9fa" }}
          expandIcon={<ExpandMoreIcon sx={{ padding: "2px" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "80%", flexShrink: 0 }}>
            <span style={{ margin: "0", fontWeight: "bold", fontSize: "15px" }}>
              {" "}
              {section?.title}
            </span>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {section?.lecture_count+ " Lectures • " + ((hours>0?hours+"h ":"") + (minutes<1?"1m":minutes+"m"))}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* List of Lessons */}
          {section?.items?.map((item, index) => (
            <li className={styles.lesson} key={index}>
              <Lesson style={{ margin: "0 10px" }} lesson={item}/>
            </li>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Section;
