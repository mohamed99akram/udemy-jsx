import React from "react";
import { useSearchParams } from "react-router-dom";

import Card from "./Card";

let getCourses = (courses) =>
  courses.map((course) => {
    return <Card course={course} key={course.id}></Card>;
  });
function HomePage({ database }) {
  let categoriesNames = [
    "Python",
    "Excel",
    "Web Development",
    "JavaScript",
    "Data Science",
    "AWS Certification",
    "Drawing",
  ];
  let categories = categoriesNames.map((category) => {
    let categoryData = database?.current?.summary?.find(
      (item) => item.title === category
    );
    return categoryData;
  });

  const searchParams = useSearchParams()[0];
  const searchQuery = searchParams.get("q");
  let searchCourses = [];
  if (searchQuery) {
    categories.forEach((category) => {
      let results =
        category?.items?.filter((item) => item?.title?.toLowerCase().includes(searchQuery?.toLocaleLowerCase())) ??
        [];
      searchCourses.push(...results);
    });
  }
  return (
    <>
      {searchQuery ? (
        <div className="courses-border">
          <div className="courses-container">
            {searchCourses?.length>0?getCourses(searchCourses ?? []):<h1>{"No Results Found"}</h1>}
          </div>
        </div>
      ) : (
        categories.map((category, index) => {
          return (
            <div className="courses-border" key={category?.id ?? index}>
              <div className="useless">
                <h2>{category?.header}</h2>
                <p>{category?.description}</p>
                <button className="exploreButton">
                  Explore {category?.title}
                </button>
              </div>
              <div className="courses-container">
                {getCourses(category?.items ?? [])}
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default HomePage;
