import React from 'react'
import Layout from '../components/layoutProj'
import { graphql } from 'gatsby'
import Fade from "react-reveal/Fade"
import SEO from "../components/seo"

export default function ProjectDetails( { data } ) {
    const { html } = data.markdownRemark
    const { title } = data.markdownRemark.frontmatter

    return (
        <Layout>
          <SEO title={title} />
            <div className="section" id="experience">
              <div className="container">
                <div className="project-container">
                  <h1>{title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </div>
            </div>
        </Layout>
    )
}


export const query = graphql`
query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date
        role
      }
    }
  }  
`