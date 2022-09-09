import React from "react";
import Feedback from "./course/Feedback";
// import { useContext } from 'react';
// import { DataContext } from '../contexts/userContexts';

import { useParams } from "react-router-dom";
import CourseContent from "./course/CourseContent";
import Header from "./course/Header";
import Instructors from "./course/Instructors";
import ReqsDesc from "./course/ReqsDesc";
import Reviews from "./course/Reviews";

function CoursePage({ database }) {
  // let database = useContext(DataContext)

  const { courseId } = useParams();

  let course_data = database?.current?.data?.find(
    (course) => course.id === (courseId)
  );
  let courseData = {
    data: course_data?.curriculum_context?.data,
    details: course_data?.details,
  };
  let courseSummary = database?.current?.summary
    ?.find((category) => {
      // find the category that contains the course then find the course
      return category.items.find((course) => {
        return course.id === Number(courseId);
      });
    })
    ?.items?.find((course) => course.id === Number(courseId));

  let courseReviews = database?.current?.reviews?.find(
    (course) => course.id === Number(courseId)
  );

  return (
    <>
      <Header course={courseSummary} />
      <CourseContent course={courseData}/>
      <ReqsDesc />
      <Instructors />
      <Feedback />
      <Reviews />
      <div>CoursePage {courseId}</div>
    </>
  );
}

export default CoursePage;
