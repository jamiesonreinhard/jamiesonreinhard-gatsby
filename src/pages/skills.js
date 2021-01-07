import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const links = ['Home', 'Projects', 'About']
const linkList = links.map(link => {
  return(
    <Link to={`/${link.toLowerCase()}`} className="btn-link">{link}</Link>
  )
})

const Skills = () => (
  <Layout>
    <SEO title="Skills" />
    <h1>Skills</h1>
    <div className="btn-container">
        {linkList}
      </div>
  </Layout>
)

export default Skills
