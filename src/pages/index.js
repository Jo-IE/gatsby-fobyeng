import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="hero d-flex flex-column align-items-center py-5">
      <h1 className="text-center text-white pt-5 my-5 hero-text">
        To be the leader in innovative EPC dredging <br /> and pipeline services
        globally.
      </h1>
      <button className="btn btn-white text-center">Learn More</button>
    </div>
  </Layout>
)

export default IndexPage
