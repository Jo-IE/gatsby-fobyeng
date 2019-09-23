import React from "react"
import Layout from "../components/layout"

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
              <i class="fa fa-home fa-lg " aria-hidden="true"></i>
            </span>

            <p class="col-10">
              No. 34/36 Tombia Street, G.R.A Phase 2, Port Harcourt, Rivers
              State. Nigeria.
            </p>
          </div>
          <div class="row">
            <span class="col-1 px-2">
              <i class="fa fa-phone-alt fa-lg " aria-hidden="true"></i>
            </span>

            <p class="col-10">
              <strong>Tel:</strong> 08034021459
            </p>
          </div>
          <div class="row">
            <span class="col-1 px-2">
              <i class="fa fa-envelope-open-text fa-lg " aria-hidden="true"></i>
            </span>

            <p class="col-10">
              <strong> E-mail:</strong> info@seointernationalng.com
            </p>
          </div>

          <div class="row">
            <span class="col-1 px-2">
              <i class="fa fa-globe-africa fa-lg " aria-hidden="true"></i>
            </span>

            <p class="col-10">
              <strong>Website:</strong> www.seointernationalng.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
