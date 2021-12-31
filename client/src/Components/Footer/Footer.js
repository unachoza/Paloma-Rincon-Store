import React from 'react';
import "./Footer.css"
import Navigation from '../Navigation/Navigation'

const Footer = () => {
  return (
    <footer>
      <div className="store-name">Paloma Rincon</div>
     
      <div className="navigation">
      <Navigation/>
      </div>
      <div className="socials">
      <div class="footer-socials right">
        <ul class="unstyled social-links">
            
            
              <li><a title="Facebook" href="https://www.facebook.com/Paloma-Rincon-174901122523064/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="157.162 90 297.799 612"><path fill="white" d="M369.036 193.795h85.68V90H333.662c-97.553 19.707-98.776 108.936-98.776 108.936V304.69h-77.724v102.937h77.724V702H343.21V407.383h102.08l9.67-102.938H343.945v-75.52c-.123-33.172 25.092-35.13 25.092-35.13z"></path></svg></a></li>
            
            
              <li><a title="Instagram" href="https://www.instagram.com/paloma_rincon_/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 90 612 612"><path fill=" white" d="M540.273 90H71.727C32.19 90 0 122.19 0 161.727v468.67C0 669.81 32.19 702 71.727 702h468.67c39.535 0 71.726-32.19 71.726-71.727V161.727C612 122.313 579.687 90 540.273 90zM306 280.332c63.893 0 115.668 51.775 115.668 115.668S369.893 511.668 306 511.668 190.332 459.893 190.332 396 242.107 280.332 306 280.332zM542.232 608.12c0 13.096-10.77 23.867-23.868 23.867H92.412c-13.097 0-23.868-10.77-23.868-23.868V348.51h56.304c-3.917 15.177-6.12 31.21-6.12 47.49 0 103.55 83.966 187.272 187.272 187.272S493.272 499.552 493.272 396c0-16.524-2.204-32.313-6.12-47.49h55.08v259.61zm0-353.002c0 13.097-10.77 23.868-23.868 23.868h-69.77c-13.096 0-23.867-10.77-23.867-23.868V185.35c0-13.097 10.77-23.868 23.868-23.868h69.77c13.096 0 23.867 10.77 23.867 23.868v69.768z"></path></svg></a></li>
            
            
            
          </ul>
        <div class="online-store-text">Online Store by Big Cartel</div>
      </div>
      </div>
    </footer>
  )
}
export default Footer