import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About</h1>
    <div className="btn-container">
        <div className="btn-link"><Link to="/">Home</Link></div>
        <div className="btn-link"><Link to="/projects">Projects</Link></div>
        <div className="btn-link"><Link to="/skills">Skills</Link></div>
      </div>
  </Layout>
)

export default About
