import React from 'react'

function Rating(props) {
  return (
    <>
    <span >
      {Array(5).fill(props.rating).map((rating, index)=>{
          return rating>=index+1?
                <span className={"fa fa-star checked"} key={index} ></span>
                :rating>index?
                <span className={"fa fa-star-half-o checked"}key={index}></span>
                :<span className="fa fa-star"key={index}></span>
        })}
    </span>
    </>
  )
}

export default Rating