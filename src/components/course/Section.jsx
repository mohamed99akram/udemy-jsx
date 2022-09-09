import React from "react";
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import styles from "./section.module.css";
function Lesson() {
  return (
    <>
      <PlayCircleFilledIcon sx={{ margin: "0 15px" }} />
      <h4 style={{ margin: "0" }}>Lesson 1</h4>
      <span style={{ flex: "1 1 0%" }}></span>
      <span style={{ margin: "0 15px" }}>1h 30m</span>
    </>
  );
}

function Section() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            <span style={{ margin: "0", fontWeight:"bold", fontSize:"15px" }}> Up and Running With Python</span>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {2 + " Lectures • " + 6 + " min"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* List of Lessons */}
          {[1, 2, 3, 4].map((item, index) => (
            <li className={styles.lesson} key={index}>
              <Lesson style={{ margin: "0 10px" }} />
            </li>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Section;
