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
          <h2>{data.promotionPara}</h2>


          <h3>National University of Singapore - Undergraduate Teaching Assistant</h3>
          <p><u>Interaction Design for Virtual and Augmented Reality (Module Code: CS4240)</u></p>
          <p><i>Jan – May 2021</i></p>

          <ul><li>Conducted lab sessions on Unity3D, graded assignments and gave feedback to students</li></ul>
          <p><u>Interaction Design (Module Code: CS3240)</u></p>
          <p><i>Aug – Nov 2020</i></p>
          <ul>
            <li>
              Taught UI/UX design process and prototyping skills by conducting feedback sessions
            </li>
            <li>
            Communicate design ideas and gave feedback to students, graded assignments, conducted lab sessions and created
class materials
            </li>
          </ul>

          <h3>GovTech Singapore - Frontend UI/UX Web Developer Intern </h3>
          <p><u>CrowdTaskSG</u></p>
          <p><i>May – July 2020</i></p>
          <ul>
            <li>
            Assisted in the development of a citizen-facing web application from existing design mock-up to ensure consistent look 
and responsiveness up to production deployment
            </li>
            <li>
            Involved in writing application level code to interact with APIs and perform server-side and client-side email validation
            </li>
            <li>
            Implemented new UI features such as web accessibility and multi-language selection bar in web application
            </li>
            <li>
            Improved navigability and ease of use by redesigning the application mobile UI
            </li>
          </ul>

          <h3>cum. m+d - Compositor, Render Wrangler</h3>
          <p><u>Razer Project Linda</u></p>
          <p><i>Jan 2018</i></p>
          <ul>
            <li>
            Assisted in the team with matchmoving and removing the tracking markers in the footage
            </li>
            <li>
            Composited and enhanced graphics made by fellow teammate by adding reflections and colour correcting using Nuke
            </li>
          </ul>

          <p><u>Mobile Strike "Firefight"</u></p>
          <p><i>Mar - Apr 2017</i></p>
          <ul>
            <li>
            Motion track moving shots and integrated debris, lens flare, smoke into multiple shots and colour corrected into complex and heavy 
shots
            </li>
            <li>
            Assisted in checking renders of 3D animations and effects, cleaning up of multiple shots and composite additional shots under tight 
schedule
            </li>
          </ul>

          <h3>Walt Disney Singapore - 3D Artist</h3>
          <p><u>Break the Spell</u></p>
          <p><i>Feb 2017</i></p>
          <ul>
            <li>
            Modelled the rose from start from Beauty & the Beast and did the animation of the rose petals falling using Cinema4D

            </li>
            <li>
            Assisted in designing posters for marketing purposes
            </li>
          </ul>

          <h3>Infinite Frameworks Batam - VFX Artist, Lighting Artist, Compositor, Render Wrangler</h3>
          <p><u>Jungle Beats</u></p>
          <p><i>Aug 2016 – Jan 2017</i></p>
          <ul>
            <li>
            Verified renders and handled communication between Batam and Singapore Division
            </li>
            <li>
            Splashes and ripple effects using FLIP Fluid simulation in Houdini, aided with environment layout and caches
            </li>
            <li>
            Set up the lighting for different characters and rendering multiple passes for compositing
            </li>
            <li>
            Composited multiple shots, putting elements together, colour correcting and colour grading using Nuke
            </li>
          </ul>

          <h2>{data.education}</h2>

          <h3>
          National University of Singapore <span><i>(2017 - 2021)</i></span>
          </h3>
          
          <p>Bachelor of Computing (Honours) in Computer Science, Specialising in Computer Graphics and Games</p>
          <h3>
          Nanyang Polytechnic <span><i>(2013 - 2016)</i></span>
          </h3>
          <p>Diploma with Merit in Digital Visual Effects</p>
          <p>Lucasfilm Singapore Gold Medal 2016</p>
        </div>
      </div>
    </div>
  )
}

export default Experience
