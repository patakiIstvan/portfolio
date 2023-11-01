import React from 'react';
// import CV from '../../../_assets/documents/pdf/resume_en.pdf';
import './hero.scss';
import Image from 'next/image';
import websiteOwner from '../../../_assets/images/profilePicLong.jpg'
import HeroShirt from './HeroShirt';


function Hero({ shirtColor }) {
  return (
    <section id="home" className="hero section">
      <div className="hero__container">
        <div className="left">
          <h1>Hey, I'm Pisti!</h1>
          <p>I'm a full stack developer making scalable responsive websites.</p>
          <a href="/assets/pdf/resume_en.pdf" download="Resume István Pataki">Download CV</a>
        </div>
        <div className="right">
          <div className="img__container">
            <Image className="img__human" src={websiteOwner} alt="A picture of your future employee." width="300" height="500" />
            <HeroShirt/>
          </div>
        </div>
      </div>
      <div className="divier1"></div>

    </section>
  );
}

export default Hero;