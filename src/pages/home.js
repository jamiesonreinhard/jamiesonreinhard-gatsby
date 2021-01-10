import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const links = ['About', 'Projects', 'Skills']
const linkList = links.map(link => {
  return(
    <Link to={`/${link.toLowerCase()}`} className="btn-link">{link}</Link>
  )
})

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
        {linkList}
      </div>
    </div>
  </Layout>
)

export default IndexPage
