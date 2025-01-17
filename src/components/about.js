import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
          <div className="div-fix">
            <Fade bottom cascade>
              <h1 style={{lineHeight: "normal"}}>About Me<span className="gray-font">iYen</span></h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              <br></br>
              <br></br>
              {data.aboutParaFour}
            </p>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about" style={{width: "500px"}} ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
