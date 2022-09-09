import React from "react";
// import { useContext } from 'react';
// import { DataContext } from '../contexts/userContexts';

import { useParams } from "react-router-dom";
import CourseContent from "./course/CourseContent";
import Header from "./course/Header";
import ReqsDesc from "./course/ReqsDesc";

 
function CoursePage({ database }) {
  // let database = useContext(DataContext)

  const { courseId } = useParams();
  console.log("database", database);
  return (
    <>
      <Header />
      <CourseContent />
      <ReqsDesc/>
      <div>CoursePage {courseId}</div>
    </>
  );
}

export default CoursePage;
