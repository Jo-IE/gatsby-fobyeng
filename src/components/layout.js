/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/global.css"
import Header from "./header"
import "./layout.css"
import { Link } from "gatsby"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Raleway&display=swap" rel="stylesheet"/>

        <title>Foby Dredging and Marine</title>
      </Helmet>
      <Header />
      <div>
        <main>{children}</main>
        <footer className="text-center py-5">
          <div><ul>
            <Link to="/" ><li className="font-weight-bold">Foby Dredging and Marine Services</li></Link>
          <Link to="/about/" ><li>About</li></Link>
          <Link to="/services/" ><li>Services</li></Link>
          <Link to="/contact/" ><li>Contact</li></Link></ul></div>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
