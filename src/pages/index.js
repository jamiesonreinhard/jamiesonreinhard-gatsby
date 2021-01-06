import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="header">
      <div className="text-container">
        <h2>I'm Jamieson Reinhard</h2>
        <h1>A Full Stack Web Developer</h1>
        <p>Building with Ruby on Rails, React, and more...</p>
      </div>
      <div className="btn-container">
        <div className="btn-link"><Link to="/projects">Projects</Link></div>
        <div className="btn-link"><Link to="/skills">Skills</Link></div>
        <div className="btn-link"><Link to="/about">About</Link></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
