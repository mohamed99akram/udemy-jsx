import React from "react";
import Card from "./Card.jsx";
// import styles from '../styles/tabContent.jsx'
let getCourses = (courses) =>
  courses.map((course) => {
    return <Card course={course} key={course.id}></Card>;
  });
function TabContent({ category }) {
  return (
    <>
        <div className="useless">
          <h2>{category?.header}</h2>
          <p>{category?.description}</p>
          <button className="exploreButton">Explore {category?.title}</button>
        </div>
        <div className="courses-container">
          {getCourses(category?.items ?? [])}
        </div>
    </>
  );
}

export default TabContent;
