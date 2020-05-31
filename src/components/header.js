import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark nav-blue d-flex justify-content-between">
      <Link to="/" className="navbar-brand">
        Foby Dredging and Marine
      </Link>
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
        <div className="navbar-nav ml-5 pl-5">
          <Link to="/about/" className="nav-item nav-link">
            About
          </Link>
          <Link to="/services/" className="nav-item nav-link">
            Services
          </Link>
          <Link to="/contact/" className="nav-item nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
