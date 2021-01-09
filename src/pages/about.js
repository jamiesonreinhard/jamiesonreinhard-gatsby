import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const links = ['Home', 'Projects', 'Skills']
const linkList = links.map(link => {
  return(
    <Link to={`/${link.toLowerCase()}`} className="btn-link">{link}</Link>
  )
})

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <div className="btn-container">
        {linkList}
      </div>
  </Layout>
)

export default About
