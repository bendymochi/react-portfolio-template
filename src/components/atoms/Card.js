import React from "react"
import { Link } from 'gatsby'

const Card = ({ heading, paragraph, imgUrl, projectLink, tag }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="dev-button">{tag}</div>
      <div className="content">
      <Link to={projectLink ? projectLink : "#"}
          className="btn"
        >
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        </Link>
      </div>
    </div>
  )
}

export default Card
