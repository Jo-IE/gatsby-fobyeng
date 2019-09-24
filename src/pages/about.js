import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const AboutPage = ({ data }) => {
  const post = data.allContentfulAbout.edges[0].node
  return (
    <Layout>
      <section className="about-header py-5">
        <div className="py-5 d-flex flex-column align-items-center">
          <h1>About us</h1>
          <p className="mx-5 text-center">
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
            <a
              href="https://www.freeiconspng.com/img/35905"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/customer-group-customers-forum-people-users-icon-2.jpg"
              width="350"
              alt="customer group, customers, forum, people, users icon"
            />

            <p className="text-blue">
              {post.childContentfulAboutMissionTextNode.mission}
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-5 mx-2 card">
            <a
              href="https://www.freeiconspng.com/img/3459"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/business-chart-diagram-icon-0.png"
              width="350"
              alt="Business chart diagram icon"
            />

            <p className="text-blue">
              {post.childContentfulAboutMissionbTextNode.missionb}
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-5  card">
            <a
              href="https://www.freeiconspng.com/img/34444"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/computer-laptop-technology-icon-10.png"
              width="350"
              alt="computer, laptop, technology icon"
            />

            <p className="text-blue">
              {post.childContentfulAboutMissioncTextNode.missionc}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-5 card my-3 mx-2 ">
            <a
              href="https://www.freeiconspng.com/img/1944"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/our-featured-products-and-services--seattle-web-design-seattle-wa-16.png"
              width="350"
              alt="Our Featured Products and Services"
            />

            <p className="text-blue">
              {post.childContentfulAboutMissiondTextNode.missiond}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-5 my-3 mx-2 card">
            <a
              href="https://www.freeiconspng.com/img/230"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/business-meeting-icon-buy-this-icon-for--0-99-1.png"
              width="350"
              alt="Business Meeting Icon"
            />

            <p className="text-blue">
              {post.childContentfulAboutMissioneTextNode.missione}
            </p>
          </div>
        </div>
      </section>
      <section className="about-team">
        <div className="d-flex align-items-center px-3 py-5">
          <div className="d-flex align-items-center">
            <a
              href="https://www.freeiconspng.com/img/48876"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/line-material-property-flags-germany-14.png"
              width="350"
              alt="Line Material property flags Germany"
            />
            <a
              href="https://www.freeiconspng.com/img/10270"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/french-flags-icon-png-5.png"
              width="350"
              alt="french flags icon png"
            />
            <a
              href="https://www.freeiconspng.com/img/10284"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/iceland-flags-icon-png-19.png"
              width="350"
              alt="Iceland flags icon png"
            />
            <a
              href="https://www.freeiconspng.com/img/10294"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/spanish-flags-icon-png-30.png"
              width="350"
              alt="Spanish flags icon png"
            />
            <a
              href="https://www.freeiconspng.com/img/8326"
              title="Image from freeiconspng.com"
            ></a>
            <img
              className="abouticon"
              src="https://www.freeiconspng.com/uploads/us-flag-icon-27.png"
              width="350"
              alt="American Us Flag Symbol Icon"
            />
          </div>
          <p>{post.childContentfulAboutOurTeamTextNode.ourTeam}</p>
        </div>
      </section>

      <section className="about-clients">
        <h2 className="text-blue text-center py-5">Our Clients</h2>
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
