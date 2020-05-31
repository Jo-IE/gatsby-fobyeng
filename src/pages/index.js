import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import lightbulb from "../images/images/lightbulb.png"
import factory from "../images/images/factory.png"

const IndexPage = () => (
  <Layout>
    <div className="hero ml-5 d-flex justify-content-around">
      <div>
        <h1 className="text-left text-blue pt-5 my-5 hero-text">
          We aim to be the leader <br /> in innovative EPC dredging <br /> and
          pipeline services globally.
        </h1>
        <Link to="/about/">
          <button className="btn btn-blue text-center">Learn More</button>
        </Link>
      </div>
      <img
        className=" d-none d-lg-block"
        src={lightbulb}
        alt="man standing with lightbulb"
      />
    </div>
    <div className="index-services d-flex justify-content-around">
      <img src={factory} alt="factory" className="d-none d-lg-block" />
      <h3 className="py-5 text-left  text-wrap index-services-text">
        We are a leading company in Dredging, Breakwater, Shore Protection,
        Pipelaying and Port Development
      </h3>
    </div>
    <div className="index-about px-2 py-5">
      <h3 className="ml-5"> Our Services</h3>
      <div className="features d-flex flex-lg-wrap flex-row py-5 pl-3 justify-content-around">
        <div className="feature_item ">
          <h4>Dredging</h4>
          <p className="">
            A process of transporting sand from one area  (usually marine based)
            to another to create a new  landmass.
          </p>
        </div>

        <div className="feature_item">
          <h4>Pipe and Cable Laying</h4>
          <p className="">Pipeline construction in swamp and land locations.</p>
        </div>

        <div className="feature_item">
          <h4>Marine Equipment Rentals</h4>
          <p className="">
            <a href="/contact/">Contact us</a> for a full list of equipment
            available.
          </p>
        </div>

        <div className="feature_item">
          <h4>Port Development</h4>
          <p className="">
            Piling and Port Construction, Maintenance Dredging works for all the
            Channels, Bathymetric surveys.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
