import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p>{data.promotionPara}</p>
          <h3>{data.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Experience
