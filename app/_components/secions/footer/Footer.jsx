import React from 'react';
import Image from 'next/image';
import linkedinIcon from '../../../_assets/images/icon_linkedin.png';
import githubIcon from '../../../_assets/images/icon_github.png';
import facebookIcon from '../../../_assets/images/icon_facebook.png';
import './footer.scss'

function Footer() {
  return (
    <footer id="footer" className="footer section">
      <div className="icon__container">
        <a href="https://linkedin.com/in/patakiistvan">
          <Image src={linkedinIcon} alt="icon" className="footer__icon" placeholder="blur" />
        </a>
        <a href="https://github.com/patakiIstvan">
          <Image src={githubIcon} alt="icon" className="footer__icon" placeholder="blur" />
        </a>
        <a href="https://www.facebook.com/istvan.pataki.39/">
          <Image src={facebookIcon} alt="icon" className="footer__icon" placeholder="blur" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;