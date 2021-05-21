import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layoutProj"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Experience from "../components/Experience"
import Footer from "../components/Footer"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (
  <Layout>
    <SEO title="Mei Yen's Portfolio" />
    <div>
      {projects.map(project => (
        <Link to={"/" + project.frontmatter.slug} key={project.id}>
      <div>{project.frontmatter.title}</div>
      </Link>
      ))}
    </div>
    <Footer></Footer>
  </Layout>
  )
}

//export page query
export const query = graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        slug
        date
      }
      id
    }
  }
}
`
