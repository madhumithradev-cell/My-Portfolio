import React, { useState, useRef } from 'react'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import underline from '../../assets/nav_underline.png';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(); 

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"; 
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      
     
      <img src={menu_open} onClick={openMenu} alt="open menu" className='nav-mob-open'/>

      
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="close menu" className="nav-mob-close"/>
        
        <li>
          <AnchorLink className='anchor-link' href='#Home'><p onClick={() => setMenu("Home")}>Home</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' className="underline"/> : <></>}
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#AboutMe'><p onClick={() => setMenu("AboutMe")}>About Me</p> </AnchorLink>{menu === "AboutMe" ? <img src={underline} alt='' className="underline"/> : <></>}
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Services'><p onClick={() => setMenu("Services")}>Services</p></AnchorLink>{menu === "Services" ? <img src={underline} alt='' className="underline"/> : <></>}
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Project'><p onClick={() => setMenu("Project")}>Project</p></AnchorLink>{menu === "Project" ? <img src={underline} alt='' className="underline"/> : <></>}
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu === "Contact" ? <img src={underline} alt='' className="underline"/> : <></>}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;