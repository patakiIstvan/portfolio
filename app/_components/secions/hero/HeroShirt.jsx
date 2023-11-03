'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
// import shirtImage from '../../../_assets/images/profilePicLong.jpg';
import shirtImage from '../../../_assets/images/shirt.png';
import { elementIsVisibleInViewport } from '@/app/_utils/utils';



const HeroShirt = () => {
  const colorSet = [
    [206, 10, 0.4],
    [228, 5, 0.4],
    [360, 5, 0.4],
    [58, 5, 0.6]
  ];

  const initialColor = {
    hue: colorSet[0][0],
    sat: colorSet[0][1],
    br: colorSet[0][2]
  }

  const colorRange = 360 - colorSet[0][0] + colorSet[colorSet.length - 1][0];

  const shirtImageRef = useRef(null);
  const mount = useRef(true);
  const [activateMouseMove, setActivateMouseMove] = useState(false)
  const [shirtColor, setShirtColor] = useState(initialColor);


  const mousemoveHandler = useCallback((e) => {


    const mouseXPercent = e.clientX / window.innerWidth;
    const hueExtra = colorRange * mouseXPercent;
    const placeInHue = (colorRange + hueExtra) % 360;

    for (let i = 1; i < colorSet.length; i++) {
      const setI = colorSet[i]
      if (placeInHue >= colorSet[i - 1][0] % 360 && placeInHue <= setI[0]) {
        const setPrev = colorSet[i - 1];
        const placeBetween = (placeInHue - setPrev[0] % 360) / (setI[0] - setPrev[0] % 360);
        const setHue = setPrev[0] % 360 + (setI[0] - setPrev[0] % 360) * placeBetween;
        const setSat = setPrev[1] + (setI[1] - setPrev[1]) * placeBetween;
        const setBr = setPrev[2] + (setI[2] - setPrev[2]) * placeBetween;
        setShirtColor({
          hue: setHue,
          sat: setSat,
          br: setBr
        })
        break
      }
    }


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
    if (isVisible !== activateMouseMove) {
      setActivateMouseMove(isVisible)
    }
  }

  window.onscroll = scrollFunction;
  return (
    <>
      {/* <Image className="img__shirt" style={{ filter: `hue-rotate(${String(shirtColor.hue)}deg) saturate(${String(shirtColor.sat)}) brightness(${String(shirtColor.br)})` }} src="/assets/images/ruha.png" alt="A pic of of the human's shirt. It looks cool." /> */}
      <Image
        ref={shirtImageRef}
        className="img__shirt" src={shirtImage}
        alt="Color changing shirt"
        style={{ filter: `hue-rotate(${String(shirtColor.hue)}deg) saturate(${String(shirtColor.sat)}) brightness(${String(shirtColor.br)})` }}
      />
    </>
  )
}

export default HeroShirt