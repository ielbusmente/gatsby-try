import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
  //cant use query variables and filename should be capitalized
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/another-page">Another Page</Link>
      </div>
    </nav>
  )
}

export default Navbar
