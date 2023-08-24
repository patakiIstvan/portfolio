import React from 'react';
// import CV from '../../../_assets/documents/pdf/resume_en.pdf';
import './hero.scss';
import Image from 'next/image';
import websiteOwner from '../../../_assets/images/profilePicLong.jpg'


function Hero({ shirtColor }) {
  return (
    <section id="home" className="hero section">
      <div className="hero__container">
        <div className="left">
          <h1>Hey, I'm Pisti!</h1>
          <p>I'm a front-end developer making scalable responsive websites.</p>
          <a href={CV} download="Resume István Pataki">Download CV</a>
        </div>
        <div className="right">
          <div className="img__container">
            <Image className="img__human" src={websiteOwner} alt="A picture of your future employee." width="300" height="500" />
            {/* <img className="img__shirt" style={{ filter: `hue-rotate(${String(shirtColor.hue)}deg) saturate(${String(shirtColor.sat)}) brightness(${String(shirtColor.br)})` }} src="/assets/images/ruha.png" alt="A pic of of the human's shirt. It looks cool." /> */}
          </div>
        </div>
      </div>

      <div class="custom-shape-divider-bottom-1640210528">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div>

    </section>
  );
}

export default Hero;