import React from "react"
import Layout from "../components/layout"
import {
  FaHome,
  FaPhone,
  FaEnvelopeOpenText,
  FaGlobeAfrica,
} from "react-icons/fa"

const ContactPage = ({ data }) => {
  const post = data.allContentfulContact.edges
  return (
    <Layout>
      <section className="services-header py-5">
        <div className="py-5 d-flex flex-column align-items-center">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section class="mx-auto py-5 my-5 contact-div">
        <h2 class="font-weight-light px-5 text-blue">Port Harcourt</h2>
        <div class="container py-3">
          <div class="row">
            <span class="col-1 px-2">
              <FaHome className="contact-icon text-blue" />
            </span>

            <p class="col-10 text-blue">{post[0].node.address}</p>
          </div>
          <div class="row">
            <span class="col-1 px-2">
              <FaPhone className="contact-icon text-blue" />
            </span>

            <p class="col-10 text-blue">
              <strong>Tel:</strong> {post[0].node.phone}
            </p>
          </div>
          <div class="row">
            <span class="col-1 px-2">
              <FaEnvelopeOpenText className="contact-icon text-blue" />
            </span>

            <p class="col-10 text-blue">
              <strong> E-mail:</strong> {post[0].node.email}
            </p>
          </div>

          <div class="row">
            <span class="col-1 px-2">
              <FaGlobeAfrica className="contact-icon text-blue" />
            </span>

            <p class="col-10 text-blue">
              <strong>Website:</strong> {post[0].node.website}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const aboutQuery = graphql`
  query {
    allContentfulContact {
      edges {
        node {
          address
          phone
          email
          website
        }
      }
    }
  }
`

export default ContactPage
