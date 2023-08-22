import React from 'react';
import linkedinIcon from '../../assets/images/icon_linkedin.png';
import githubIcon from '../../assets/images/icon_github.png';
import facebookIcon from '../../assets/images/icon_facebook.png';

function Footer() {
  return (
    <footer id="footer" class="footer section">
      <div className="icon__container">
        <a href="https://linkedin.com/in/patakiistvan">
          <img src={linkedinIcon} alt="icon" className="footer__icon" />
        </a>
        <a href="https://github.com/patakiIstvan">
          <img src={githubIcon} alt="icon" className="footer__icon" />
        </a>
        <a href="https://www.facebook.com/istvan.pataki.39/">
          <img src={facebookIcon} alt="icon" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;