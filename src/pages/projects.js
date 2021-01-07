import { Link } from "gatsby"
import React, {useState} from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import {projects} from '../data/projects'

const links = ['Home', 'Skills', 'About']


const Projects = () => {
  const linkList = links.map(link => {
    return(
      <Link to={`/${link.toLowerCase()}`} className="btn-link">{link}</Link>
    )
  })
  const [active, setActive] = useState(projects[0]);
  
  const projectList = projects.map(project => {
    return(
      <h3 className={active === project ? "projectNameActive" : "projectName"} onClick={()=>setActive(project)} key={project.name} active={active === project}>{project.name} </h3>
    )
  })

  const tagList = active.technologies.map(tag => {
    return(
      <div className="tag">
        {tag}
      </div>
    )
  });
  
  return(
    <Layout>
    <SEO title="Page two" />
    <div className="header">
      <h1>Projects</h1>
      <div className="projectsContainer">
        <div className="projectList">
          {projectList}
        </div>
        <div className="projectCard" project={active}>
          <img src={active.img} className="projectImage"/>
          <div className="projectInfo">
            <div className="projectDetails">
              <h3>{active.name}</h3>
              <small>{active.description}</small>
            </div>
            <div className="tags">
              {tagList}
            </div>
            <div className="projectLinks">
              <Link to={active.url} className="projectLink"><small>Live Site >></small></Link>
              <Link to={active.repo} className="projectLink"><small>Github >></small></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        {linkList}
      </div>
    </div>
    
  </Layout>
  )
}

export default Projects
