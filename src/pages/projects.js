import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Projects</h1>
    <div className="btn-container">
        <div className="btn-link"><Link to="/">Home</Link></div>
        <div className="btn-link"><Link to="/skills">Skills</Link></div>
        <div className="btn-link"><Link to="/about">About</Link></div>
      </div>
  </Layout>
)

export default Projects
