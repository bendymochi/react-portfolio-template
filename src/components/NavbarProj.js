import React from "react"
import { Link } from 'gatsby'

const NavbarProj = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            className="name"
          >
            <Link to="/" style={{textDecoration: 'none'}}>
            Mei Yen.</Link>
          </div>
          <div className="links-wrapper">
           <Link to="/#projects"><button>Projects</button></Link>
           <Link to="/#about"><button>About</button></Link>
           <Link to="/#experience"><button>Experience</button></Link>
           <Link to="/#contact"><button>Contact</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarProj
