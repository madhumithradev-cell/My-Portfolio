import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.png'
// import mail_icon from '../../assets/mail_icon.png'
// import location_icon from '../../assets/location_icon.png'
// import call_icon from '../../assets/call_icon.png'
import { LocateIcon, Mail, PhoneCall } from 'lucide-react'



const Contact = () => {


     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0bfb28b2-08c8-473b-93e6-e0749c2777d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
    return (
        <div className='Contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img scr={theme_pattern} atl=""/>
            </div>
            <div  id='Contact'className="Contact-section">
               <div className="Contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to take on new projects, so feel free to send a message about anything you want me to work on. you can contact me anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <p>madhumithra.dev@gmail.com</p>
                        <Mail />
                    </div>
                    <div className="contact-detail">
                         <PhoneCall /> <p>+91 9345287199</p>
                    </div>
                    <div className="contact-detail">
                         <LocateIcon /> <p>Namakkal, Tamilnadu</p>
                    </div>
                </div>
               </div>
               <form onSubmit={onSubmit} className="Contact-right">
                <label htmlfor=""> Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlfor="">your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
               </form>
            </div>
       
        </div>
    )
}
export default Contact