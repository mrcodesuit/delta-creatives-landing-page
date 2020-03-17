import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Img from "gatsby-image"
import { homeAnimation } from "../animations/homeAnimation"

import "../styles/styles.scss"
import ArrowRight from "../images/arrow-right.svg"
import Facebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
import LinkedIn from "../images/linkedIn.svg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      building: file(relativePath: { eq: "building.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    homeAnimation()
  }, [])

  return (
    <>
      <SEO title="Home" />
      <div className="hero">
        <Img fluid={data.building.childImageSharp.fluid} objectFit="cover" />
        <div className="hero__inner">
          <div className={`nav ${isOpen ? "isOpen" : ""}`}>
            <div className="nav__logo">Delta Creatives</div>
            <div className="nav__toggler" onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="nav__menu">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          </div>
          <div className="main-content">
            <h1>The Future of</h1>
            <div className="h1">Architcture</div>
            <p>
              The Rock and Roll Hall of Fame is a museum and hall of fame
              located in downtown Cleveland, Ohio, on the shore of Lake Erie.
              The museum documents the history of rock music and the artists.
            </p>
          </div>
          <div className="main-nav">
            <ul>
              <li className="isActive">Home</li>
              <li>About Us</li>
              <li>Projects</li>
              <li>Contact Us</li>
            </ul>
            <p>
              Next Project
              <ArrowRight />
            </p>
          </div>
          <div className="social-links">
            <div className="social-item">
              <Facebook />
            </div>
            <div className="social-item">
              <Twitter />
            </div>
            <div className="social-item">
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
