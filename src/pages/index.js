import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"


const IndexPage = () => (

    <div className="hero d-flex flex-column align-items-center py-5">
      <Header />
      <h1 className="text-center text-white pt-5 my-5 hero-text">
        We aim to be the leader in innovative EPC dredging <br /> and pipeline services
        globally.
      </h1>
      <Link to="/about/">
        <button className="btn btn-white text-center">Learn More</button>
      </Link>
    </div>

)

export default IndexPage
