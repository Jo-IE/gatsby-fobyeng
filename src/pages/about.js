import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import {
  FaUsers,
  FaChartLine,
  FaLaptop,
  FaProjectDiagram,
  FaRegPaperPlane,
} from "react-icons/fa"
import collab from "../images/images/collab.png"

const AboutPage = ({ data }) => {
  const post = data.allContentfulAbout.edges[0].node
  return (
    <Layout>
      <section className="about-header py-5">
        <div className="py-5 d-flex flex-column align-items-center">
          <h1>About us</h1>
          <p className="mx-5 text-center slim-text">
            {post.childContentfulAboutAboutUsTextNode.aboutUs}
          </p>
          <Link to="/contact/">
            <button className="btn btn-white">Contact us</button>
          </Link>
        </div>
      </section>
      <section className="about-start"></section>
      <section className="">
        <h2 className="text-center text-blue my-5">Mission</h2>
        <div className="row px-3 py-5 d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12 py-5 card">
            <FaUsers className="abouticon mx-auto " />

            <p className="text-blue py-5">
              {post.childContentfulAboutMissionTextNode.mission}
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-5 mx-2 card">
            <FaChartLine className="abouticon mx-auto" />

            <p className="text-blue py-5">
              {post.childContentfulAboutMissionbTextNode.missionb}
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-5  card">
            <FaLaptop className="abouticon mx-auto" />

            <p className="text-blue py-5">
              {post.childContentfulAboutMissioncTextNode.missionc}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-5 card my-3 mx-2 ">
            <FaProjectDiagram className="abouticon mx-auto" />

            <p className="text-blue py-5">
              {post.childContentfulAboutMissiondTextNode.missiond}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-5 my-3 mx-2 card">
            <FaRegPaperPlane className="abouticon mx-auto" />

            <p className="text-blue py-5">
              {post.childContentfulAboutMissioneTextNode.missione}
            </p>
          </div>
        </div>
      </section>
      <section className="about-team py-5">
        <h2 className="text-center py-5">Our Team</h2>
        <div className="d-flex justify-content-around pr-5 pl-3 py-5">
          <p className="pl-5 ml-5 slim-text text-center">
            {post.childContentfulAboutOurTeamTextNode.ourTeam}
          </p>
          <img
            src={collab}
            alt="Two people collaborating"
            className=" d-none d-lg-block"
          />
        </div>
      </section>

      <section className="about-clients">
        <h2 className="text-blue text-center py-5 my-5">Our Clients</h2>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner text-center" role="listbox">
            <div class="carousel-item active">
              <img
                class="client-icon"
                src="https://www.chevron.com/-/media/shared-media/images/hallmark.png"
                alt="Chevron"
              />
            </div>
            <div class="carousel-item">
              <img
                class="client-icon"
                src="http://www.logosvectorfree.com/wp-content/uploads/2018/08/Shell-Logos-Vector-Icon-Free-Download.jpg"
                alt="Shell"
              />
            </div>
            <div class="carousel-item">
              <img
                class="client-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/Logo-Royal-IHC_Tekengebied-1.png"
                alt="IHC"
              />
            </div>
            <div class="carousel-item">
              <img
                class="client-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Caterpillar-shortened.svg"
                alt="Caterpillar"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next "
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const aboutQuery = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          childContentfulAboutMissionTextNode {
            mission
          }
          childContentfulAboutAboutUsTextNode {
            aboutUs
          }
          childContentfulAboutOurTeamTextNode {
            ourTeam
          }
          childContentfulAboutMissionbTextNode {
            missionb
          }
          childContentfulAboutMissioncTextNode {
            missionc
          }
          childContentfulAboutMissiondTextNode {
            missiond
          }
          childContentfulAboutMissioneTextNode {
            missione
          }
        }
      }
    }
  }
`

export default AboutPage
