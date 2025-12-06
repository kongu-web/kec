import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMobile, faPhone,faLocationDot, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faSquareYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Scroller from '../Scroller/Scroller';


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "816a8f34-a520-4c65-b0e4-0e439b26f407");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    
    <div className='contactus'>
        <h1>Contact Us</h1>
        <div className="contact">

        <div className="contact-col">
            <h3> Send us a message &ensp;&ensp;&ensp; <FontAwesomeIcon icon={faPaperPlane} color='#306ca0'/></h3>
            <p>For any inquiries or further information 
                about Kongu Engineering College, we encourage you 
                to reach out to our dedicated admissions and
                 support teams. Whether you're a prospective 
                 student, parent, or partner institution, we're 
                 here to assist you with your questions about programs, 
                 campus life, or the application process.
                 You’re also welcome to visit us in person at our main campus
                  for a guided tour and to experience the beauty and academic 
                  excellence of KEC. </p>
                  <ul>
                    <li><FontAwesomeIcon icon={faMobile} color='#306ca0'/> &ensp;&ensp;&ensp;9965277765 / 9443020583</li>

                    <li><FontAwesomeIcon icon={faPhone} color='#306ca0'/> &ensp;&ensp;&ensp;04294-226515 / 04294-226517</li>
                    
                  </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>
                    Your Name
                </label>
                <input type ='text' name='name' placeholder='Enter your name' required/>
                <label>
                    Phone Number
                </label>
                <input type ='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>
                    Write your message here
                </label>
                <textarea name='message' rows='6' placeholder='Enter your name' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
        
    </div>
    <div className="followus">
        <div className="social-media">
          <ul>
            <li>
              <a href="https://www.facebook.com/konguengineeringcollegeperundurai">
                <FontAwesomeIcon className='iconssocial' icon={faFacebookF}/>
                <span> - Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FKonguOfficial">
              <FontAwesomeIcon className='iconssocial' icon={faXTwitter}/>
              <span> - Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/konguengineeringcollege">
                <FontAwesomeIcon className='iconssocial' icon={faSquareYoutube}/>
                <span> - Youtube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/konguengineeringcollege/">
                <FontAwesomeIcon className='iconssocial' icon={faInstagram}/>
                <span> - Instagram</span>
              </a>
            </li>
             <li>
              <a href="https://www.linkedin.com/school/13453183/admin/dashboard/">
                <FontAwesomeIcon className='iconssocial' icon={faLinkedin}/>
                <span> - Linkedin</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="gallery">
          <Scroller/>
        </div>
      </div>
    </div>
  )
}

export default Contact