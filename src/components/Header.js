import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper" id="bg">
          <Fade bottom>
            <h2>
              Hello there!
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                I'm {data.name}. {" "}
              </h1>
              {/* <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                */}
            </div>

          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            {/* <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "meiyen-x@hotmail.com"
              }`}
              className="primary-btn"
            >
              DOWNLOAD RESUME
            </a> */}
            <a
              href="https://drive.google.com/file/d/1Ok5VLYCIhQUrDQzjiSa3SbXol7VRB8CE/view?usp=sharing" 
              className="primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              VIEW MY CV
            </a>
          </Fade>
          </div>
        </div>
    </div>
  )
}

export default Header
