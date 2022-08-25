import React from 'react'
import styles from '../styles/card.module.css'
function Card({course}) {
  return (
    <a href="/#"  className={styles.course}>
    <img src={course.image} style={{width:"100%"}} alt="course"/>
    <div className={styles.courseText}>
        <h3>{course?.title??"Course Name"}</h3>
        <span className={styles.instructorName}>{course?.instructor??"Jeff Bezos"}</span>
        <div>
            <span className={styles.rating}>{course?.rating??4.5}</span>
            {Array(5).fill(course.rating).map((rating, index)=>{
              return rating>=index+1?
                    <span className={"fa fa-star "+styles.checked}></span>
                    :rating>index?
                    <span className={"fa fa-star-half-o "+styles.checked}></span>
                    :<span className="fa fa-star"></span>
            })}
        </div>
        <h3>{course?.price??"Free"}</h3>
    </div>
</a>
  )
}

export default Card