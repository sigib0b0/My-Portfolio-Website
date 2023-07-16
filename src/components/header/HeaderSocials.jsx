import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import {SiLinktree} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https:://linkedin.com' target='blank'><BsLinkedin/></a>
        <a href='https:://github.com' target='blank'><BsGithub/></a>
        <a href='https:://instagram.com' target='blank'><BsInstagram/></a>
        <a href='https:://dribble.com' target='blank'><FiDribbble/></a>
        <a href='https:://linktree.com' target='blank'><SiLinktree/></a>
    </div>
  )
}

export default HeaderSocials
