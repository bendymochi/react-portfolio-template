import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Experience from "../components/Experience"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Mei Yen's Portfolio" />
    <Header></Header>
    <Work id="projects"></Work>
    <About id="about"></About>
    <Skills id="skills"></Skills>
    <Experience id="exp"></Experience>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
