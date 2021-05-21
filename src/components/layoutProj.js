/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import NavbarProj from "./NavbarProj"
import "../styles/mains.scss"

const LayoutProj = ({ children }) => {
  return (
    <>
      <NavbarProj></NavbarProj>
      <main>{children}</main>
    </>
  )
}
export default LayoutProj
