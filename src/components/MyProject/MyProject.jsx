import React from 'react'
import './myproject.css'
import theme_pattern from '../../assets/theme_pattern.png'
import myproject_data from '../../assets/myproject_data'
// import arrow_icon from '../../assets/arrow_icon.png'
import { ArrowRight } from 'lucide-react';

const MyProject = () => {
  return (
    <div id='Project' className="myproject">
      <div className="myproject-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="myproject-container">
        {myproject_data.map((project, index) => (
          <img key={index} src={project.m_img} alt="" />
        ))}
      </div>
          <div className="myproject-showmore">
            <p>Show More</p>
            <ArrowRight size={40}/>
          </div>

    </div>
  )
}

export default MyProject

