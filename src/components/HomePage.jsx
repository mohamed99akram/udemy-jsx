import React from "react";

import Card from "./Card";

let getCourses = (courses) =>
  courses.map((course) => {
    return <Card course={course} key={course.id}></Card>;
  });
function HomePage({database}) {
  let python = database?.current?.summary?.find((item) => item.title === "Python");
  // console.log( python?.header);
  return (
    <div className="courses-border">
      <div className="useless">
        <h2>{python?.header}</h2>
        <p>{ python?.description}</p>
        <button className="exploreButton">Explore {"Python"}</button>
      </div>
      <div className="courses-container">{getCourses(python?.items??[])}</div>
    </div>
  );
}

export default HomePage;
