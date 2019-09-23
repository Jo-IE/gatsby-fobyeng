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
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 Services-tab item">
              <div class="folded-corner service_tab_1">
                <div class="text">
                  <GiSinagot className="fa-icon-image" />
                  <p class="item-title py-3">
                    <h3>Marine Equipment Rentals</h3>
                  </p>
                  <p className="text-left">
                    <ul>
                      <li>Plants and Equipment</li>
                      <li>State of the Art Jack-up Rigs</li>
                      <li>Work Over /Hook-up Barges</li>
                    </ul>
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
                  <p className="text-left">
                    <ul>
                      <li>Shore Protection</li>
                      <li>Riverbed Protection</li>
                      <li>Revetments</li>
                      <li>Concrete Block Quay</li>
                      <li>Flood/erosion control</li>
                    </ul>
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
                  <p className="text-left">
                    <ul>
                      <li>Deep Sea Pipe and Cable laying</li>
                      <li>Swamp Pipeline Construction</li>
                      <li>Land Pipeline Construction</li>
                      <li>Pipeline Repairs and Maintenance</li>
                    </ul>
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
                    <p className="text-left">
                      <ul>
                        <li>Transport</li>
                        <li>Installation</li>
                        <li>Offshore Support Vessels</li>
                        <li>Platform Supply Vessels</li>
                        <li>Diving vessels</li>
                        <li>Heavy Tools</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 Services-tab  item">
                <div class="folded-corner service_tab_1">
                  <div class="text">
                    <FaShip className="fa-icon-image" />
                    <p class="item-title py-3">
                      <h3> Dredging</h3>
                    </p>
                    <p className="text-left">
                      <ul>
                        <li>Hopper Dredging /Trenching</li>
                        <li>
                          Cutter Suction /Maintenance Dredging Capital / Grab
                          Dredging
                        </li>
                        <li>Land Reclamation</li>
                        <li>Soil Investigation</li>
                        <li>Sand Search</li>
                        <li>Hydrographic Surveys</li>
                        <li>Land Surveys</li>
                      </ul>
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
                    <p className="text-left">
                      <ul>
                        <li>Piling and Port Construction</li>
                        <li>Jetty Construction</li>
                        <li>Installation of Navigation Aids</li>
                        <li>Access Channel Management</li>
                        <li>Port Management</li>
                        <li>Marine Survey</li>
                        <li>Cargo Survey</li>
                      </ul>
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
