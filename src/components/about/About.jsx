import React from 'react'
import './about.css'
import ME from '../../assets/me_resized.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'></img>
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200K world-wide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Years Experience</small>
            </article>

            <p>
            After graduating from Swansea University, I officially began my computer science career at the MITRE Corporation.  
            MITRE has supported me in pursuing my interests in the field of computer science and I continue to make the most of the 
            opportunity.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
    
      </div>
    </section>
  )
}

export default About