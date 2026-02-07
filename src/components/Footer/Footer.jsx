import React from "react";
import './Footer.css'
import footer_logo from '../../assets/Footer_logo.png'
import user_icon from '../../assets/user_icon.png'

const Footer = () => {
    return (
      <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I'm a Java full-stack developer from, Tamilnadu with hand's on experience in both frontend and backend technologies.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=""/>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe"> subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2026 Madhumithra. All rights reserved.</p>
             <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
             </div>
        </div>

    </div>

    )  
}
export default Footer