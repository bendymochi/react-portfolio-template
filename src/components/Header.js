import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper" id="image">
          <Fade bottom>
            <h1>
              Hello there!
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {"<"} {data.name} {"/>"} {" "}
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
            <p className="font-header">{data.headerParagraph}</p>
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
              href="https://drive.google.com/file/d/1edt5YsDl7tIMvkd_AFY-PmyJizktbuLb/view?usp=sharing" 
              className="primary-btn"
              target="_blank"
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
