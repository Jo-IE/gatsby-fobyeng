import React from "react"
import Layout from "../components/layout"
import {
  FaHome,
  FaPhone,
  FaEnvelopeOpenText,
  FaGlobeAfrica,
} from "react-icons/fa"

const ContactPage = () => {
  return (
    <Layout>
      <section className="services-header py-5">
        <div className="py-5 d-flex flex-column align-items-center">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section class="mx-auto py-5 contact-div">
        <h2 class="font-weight-light px-5">Port Harcourt</h2>
        <div class="container py-3">
          <div class="row">
            <span class="col-1 px-2">
              <FaHome className="contact-icon" />
            </span>

            <p class="col-10">
              No. 34/36 Tombia Street, G.R.A Phase 2, Port Harcourt, Rivers
              State. Nigeria.
            </p>
          </div>
          <div class="row">
            <span class="col-1 px-2">
              <FaPhone className="contact-icon" />
            </span>

            <p class="col-10">
              <strong>Tel:</strong> 08034021459
            </p>
          </div>
          <div class="row">
            <span class="col-1 px-2">
              <FaEnvelopeOpenText className="contact-icon" />
            </span>

            <p class="col-10">
              <strong> E-mail:</strong> info@fobydredging.com
            </p>
          </div>

          <div class="row">
            <span class="col-1 px-2">
              <FaGlobeAfrica className="contact-icon" />
            </span>

            <p class="col-10">
              <strong>Website:</strong> www.fobydredging.com
            </p>
          </div>
        </div>
      </section>

      <section class="mx-auto py-5 contact-div">
        <h2 class="font-weight-light px-5">Warri</h2>
        <div class="container py-3">
          <div class="row">
            <span class="col-1 px-2">
              <FaHome className="contact-icon" />
            </span>

            <p class="col-10">
              No. 5 praise drive, Jakpa road off Warri-Effurun road, Warri.
              Delta state
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
