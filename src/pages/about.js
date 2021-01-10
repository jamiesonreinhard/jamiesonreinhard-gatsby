import React from "react"
import { Link } from "gatsby"
import { hobbies } from "../data/about"
import { FaInstagram, FaLinkedin, FaGithubSquare, FaHotel } from 'react-icons/fa'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'

import Layout from "../components/layout"
import SEO from "../components/seo"

const links = ['Home', 'Projects', 'Skills']
const linkList = links.map(link => {
  return(
    <Link to={`/${link.toLowerCase()}`} className="btn-link">{link}</Link>
  )
})

const hobbyList = hobbies.map(hobby => {
  return(
    <div>{hobby}</div>
  )
})

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="header">
      <h1>About</h1>
      <div className="about-container">
        <div className="about-card-profile">
          <img className="profile-card-image" src="/avatar.png"/>
          <h3>Jamieson Reinhard</h3>
          <div className="social-icons">
            <Link to="https://www.instagram.com/codermindtricks/"><FaInstagram size={50}/></Link>
            <Link to="https://www.linkedin.com/in/jamiesonreinhard/"><FaLinkedin size={50} /></Link>
            <Link to="https://github.com/jamiesonreinhard"><FaGithubSquare size={50} /></Link>
          </div>
        </div>
        <div className="about-card">
          <h3>Education</h3>
          <hr className="skillHr"/>
          <div className="exp-item">
            <img src="/lewagon.png" style={{width: "40px", height: "40px", marginRight: "10px"}}/>
            <div className="exp-item-details">
              <h4>Full Stack Web Development Bootcamp</h4>
              <small>LeWagon Mexico</small>
            </div>
          </div>
          <div className="exp-item">
            <img src="/boulder.png" style={{width: "40px", height: "40px", marginRight: "10px"}}/>
            <div className="exp-item-details">
              <h4>BS - Finance</h4>
              <small>University of Colorado, Boulder</small>
            </div>
          </div>
        </div>
        <div className="about-card">
          <h3>Experience</h3>
          <hr className="skillHr"/>
          <div className="exp-item">
            <BsReverseLayoutTextWindowReverse size={50} style={{marginRight: "10px"}} />
            <div className="exp-item-details">
              <h4>Freelance Web Developer</h4>
              <small>Rhino Consulting</small><br />
              <small>2 Years</small>
            </div>
          </div>
          <div className="exp-item">
            <FaHotel size={50} style={{marginRight: "10px"}} />
            <div className="exp-item-details">
              <h4>Assistant Director of Finance (Hotels)</h4>
              <small>Marriott and Vail Resorts</small><br />
              <small>4 Years</small>
            </div>
          </div>
        </div>
        <div className="about-card">
          <h3>Hobbies</h3>
          <hr className="skillHr"/>
          { hobbyList }
        </div>
      </div>
      <div className="btn-container">
        {linkList}
      </div>
    </div>
  </Layout>
)

export default About

