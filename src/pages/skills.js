import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = () => (
  <Layout>
    <SEO title="Skills" />
    <h1>Skills</h1>
    <div className="btn-container">
        <div className="btn-link"><Link to="/">Home</Link></div>
        <div className="btn-link"><Link to="/projects">Projects</Link></div>
        <div className="btn-link"><Link to="/about">About</Link></div>
      </div>
  </Layout>
)

export default Skills
