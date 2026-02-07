import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

    
    return (
        <div id='Home'className='hero'>
          <img src={profile_img} alt="Profile Image" className="profile-img"/>

            <h1><span>I'm Madhu Mithra,<br/></span> Java Full stack developer</h1>
            <p> I am a full stack developer from Tamil Nadu,with hands-on <br/>
                 experience in both frontend and backend tecnologies
            </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}
  export default Hero