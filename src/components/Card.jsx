import React from 'react'
import styles from '../styles/card.module.css'
function Card(props) {
  return (
    <a href="/#"  className={styles.course}>
    <img src={props.course.image} style={{width:"100%"}} alt="course"/>
    <div className={styles.courseText}>
        <h3>{props.course?.title??"Course Name"}</h3>
        <span className={styles.instructorName}>{props.course?.instructor??"Jeff Bezos"}</span>
        <div>
            <span className={styles.rating}>{props.course?.rating??4.5}</span>
            {props.course.rating>=1?<span className={"fa fa-star "+styles.checked}></span>:<span className="fa fa-star"></span>}
            {props.course.rating>=2?<span className={"fa fa-star "+styles.checked}></span>:<span className="fa fa-star"></span>}
            {props.course.rating>=3?<span className={"fa fa-star "+styles.checked}></span>:<span className="fa fa-star"></span>}
            {props.course.rating>=4?<span className={"fa fa-star "+styles.checked}></span>:<span className="fa fa-star"></span>}
            {props.course.rating>=5?<span className={"fa fa-star "+styles.checked}></span>:<span className="fa fa-star"></span>}
        </div>
        <h3>{props.course?.price??"Free"}</h3>
    </div>
</a>
  )
}

export default Card