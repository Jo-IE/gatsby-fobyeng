import React, { Component } from "react"
import Layout from "../components/layout"
import { TiWaves } from "react-icons/ti"
import { TiAnchor } from "react-icons/ti"
import { GiSinagot } from "react-icons/gi"
import { GiCargoCrane } from "react-icons/gi"
import { FaRulerCombined } from "react-icons/fa"
import { FaShip } from "react-icons/fa"

const ServicesPage = () => {
  return (
    <Layout>
      <section className="services-header py-5">
        <div className="py-5 d-flex flex-column align-items-center">
          <h1>Our Services</h1>
          <p className="mx-5">
            We provide engineering, procurement and commissioning (EPC) for the
            following services
          </p>
          <button className="btn btn-white">Contact us</button>
        </div>
      </section>
      <section className="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 Services-tab  item">
              <div class="folded-corner service_tab_1">
                <div class="text">
                  <FaShip className="fa-icon-image" />
                  <p class="item-title py-3">
                    <h3> Dredging</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 Services-tab item">
              <div class="folded-corner service_tab_1">
                <div class="text">
                  <TiWaves className="fa-icon-image" />

                  <p class="item-title py-3">
                    <h3> Break Water</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 Services-tab item">
              <div class="folded-corner service_tab_1">
                <div class="text">
                  <FaRulerCombined className="fa-icon-image" />
                  <p class="item-title py-3">
                    <h3> Pipelaying and Cable Laying</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 Services-tab item">
                <div class="folded-corner service_tab_1">
                  <div class="text">
                    <GiCargoCrane className="fa-icon-image" />
                    <p class="item-title py-3">
                      <h3> Offshore and Heavylift</h3>
                    </p>
                    <p>
                      This is an amazing set of animated accordions based
                      completely on CSS. They come oriented both vertically and
                      horizontally in order to fit properly in your project. In
                      order to see the slides,
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 Services-tab item">
                <div class="folded-corner service_tab_1">
                  <div class="text">
                    <GiSinagot className="fa-icon-image" />
                    <p class="item-title py-3">
                      <h3>Marine Equipment Rentals</h3>
                    </p>
                    <p>
                      This is an amazing set of animated accordions based
                      completely on CSS. They come oriented both vertically and
                      horizontally in order to fit properly in your project. In
                      order to see the slides,
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 Services-tab item">
                <div class="folded-corner service_tab_1">
                  <div class="text">
                    <TiAnchor className="fa-icon-image" />
                    <p class="item-title py-3">
                      <h3>Port Development and Management</h3>
                    </p>
                    <p>
                      This is an amazing set of animated accordions based
                      completely on CSS. They come oriented both vertically and
                      horizontally in order to fit properly in your project. In
                      order to see the slides,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
