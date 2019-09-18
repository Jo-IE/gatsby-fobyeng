import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="hero d-flex flex-column align-items-center py-5">
      <h1 className="text-center py-5">
        We aim to be the leader in innovative EPC dredging and pipeline services
        globally.
      </h1>
      <button className="btn btn-white text-center">Learn More</button>
    </div>
  </Layout>
)

export default IndexPage
