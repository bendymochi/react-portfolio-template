import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img><h2>{skill.title}</h2>
                <p>{skill.para}</p>
                <p><b>{skill.main}</b> {skill.language}</p>
                <p><b>{skill.framework}</b> {skill.frameworkDetails}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
