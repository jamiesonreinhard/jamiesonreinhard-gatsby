import React from "react"
import { Link } from "gatsby"
import {skills} from '../data/skills'
import { BiWindowAlt, BiData } from 'react-icons/bi'
import { GiSkills } from 'react-icons/gi'
import Layout from "../components/layout"
import SEO from "../components/seo"

const icons = [
  BiData,
  BiWindowAlt,
  GiSkills
]

const links = ['Home', 'About', 'Projects']
const linkList = links.map(link => {
  return(
    <Link to={`/${link.toLowerCase()}`} className="btn-link">{link}</Link>
  )
})

const Skills = () => {
  const skillDeck = skills.map((skill, index) => {
    const Icon = icons[index];
    console.log(Icon);
    
    return(
      <div className="skillCard">
        <div className="skillCardIconContainer">
          <Icon className="skillCardIcon"/>
        </div>
        <h3>{skill.title}</h3>
        <hr className="skillHr"/>
        {skill.skills.map(skillName => {
          return(
            <div className="skillName">{skillName}</div>
          )
        })}
      </div>
    )
  })
  return(
    <Layout>
    <SEO title="Skills" />
    <div className="header">
      <h1>Skills</h1>
      <div className="skillDeck">
        {skillDeck}
      </div>
      <div className="btn-container">
        {linkList}
      </div>
    </div>
   
  </Layout>
  )
}

export default Skills
