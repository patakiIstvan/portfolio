'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
// import shirtImage from '../../../_assets/images/profilePicLong.jpg';
import shirtImage from '../../../_assets/images/shirt.png';
import { elementIsVisibleInViewport } from '@/app/_utils/utils';



const HeroShirt = () => {

  const shirtImageRef = useRef(null);
  const mount = useRef(true);
  const [activateMouseMove, setActivateMouseMove] = useState(false)

  const calculateShirtColor = function (event) {
    console.log(event.clientX / window.innerWidth * 100)
  }

  const mousemoveHandler = useCallback(() => {
    console.log("MOUSE MOVED")
  }, []);

  useEffect(() => {
    if (mount.current) {
      mount.current = false;
    } else {
      if (!activateMouseMove) {
        window.removeEventListener('mousemove', mousemoveHandler);
      } else {
        window.addEventListener('mousemove', mousemoveHandler);
      }
    }
  }, [activateMouseMove])

  const scrollFunction = function () {
    const isVisible = shirtImageRef.current ? elementIsVisibleInViewport(shirtImageRef.current, true) : false;
    // if (isVisible) { console.log("scrolled and VISIBLE") } else { console.log("scrolled and invisible") }
    if (isVisible !== activateMouseMove) {
      setActivateMouseMove(isVisible)
    }
  }

  window.onscroll = scrollFunction;
  return (
    <>
      {/* <Image className="img__shirt" style={{ filter: `hue-rotate(${String(shirtColor.hue)}deg) saturate(${String(shirtColor.sat)}) brightness(${String(shirtColor.br)})` }} src="/assets/images/ruha.png" alt="A pic of of the human's shirt. It looks cool." /> */}
      <Image ref={shirtImageRef} className="img__shirt" src={shirtImage} alt="A pic of of the human's shirt. It looks cool." />
    </>
  )
}

export default HeroShirt