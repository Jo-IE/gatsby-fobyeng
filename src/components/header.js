import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark nav-blue">
      <a className="navbar-brand" href="#">
        Foby Dredging and Marine
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/about.js">
            About
          </a>
          <a className="nav-item nav-link" href="/services.js">
            Services
          </a>
          <a className="nav-item nav-link" href="/contact.js">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
