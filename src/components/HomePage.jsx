import React from "react";
import { useSearchParams } from "react-router-dom";

import Card from "./Card";
import CategoriesTabs from "./CategoriesTabs";

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
        category?.items?.filter((item) =>
          item?.title?.toLowerCase().includes(searchQuery?.toLocaleLowerCase())
        ) ?? [];
      searchCourses.push(...results);
    });
  }
  return (
    <>
      {searchQuery ? (
        <div className="courses-border">
          <div className="courses-container">
            {searchCourses?.length > 0 ? (
              getCourses(searchCourses ?? [])
            ) : (
              <h1>{"No Results Found"}</h1>
            )}
          </div>
        </div>
      ) : (
        <div className="courses-border">
          <CategoriesTabs categories={categories} />
        </div>
      )}
    </>
  );
}

export default HomePage;
