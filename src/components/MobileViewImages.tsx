import React, { useLayoutEffect, useRef } from 'react';
import mobileImg1 from '../assets/images/mobile-view-1.png';
import mobileImg2 from '../assets/images/mobile-view-2.png';
import mobileImg3 from '../assets/images/mobile-view-3.png';

type propTypes = {
  mobileId: number,
  timeline: GSAPTimeline
}

const MobileViewImages = (props : propTypes) => {

  const { mobileId, timeline } = props;
  const imgContainerRef = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  useLayoutEffect(() => {
    if (timeline && mobileId === 1) {
      timeline.to(imgContainerRef.current, {
        xPercent:20,
      }).to(img1.current, {
        scale: 1,
        zIndex: 10,
      }, "<").to(img2.current, {
        scale: 0.8,
        zIndex: 5,
      }, '<').to(img3.current, {
        scale: 0.6,
        zIndex:0
      }, '<')
    }

    if (timeline && mobileId === 2) {
      timeline.to(imgContainerRef.current, {
        xPercent: 0,
      }).to(img2.current, {
        scale: 1,
        zIndex: 10,
      }, '<').to(img1.current, {
        scale: 0.8,
        zIndex: 5
      }, '<').to(img3.current, {
        scale: 0.8,
        zIndex: 5
      }, '<')
    }

    if (timeline && mobileId === 3) {
      timeline.to(imgContainerRef.current, {
        xPercent: -20,
      }).to(img3.current, {
        scale: 1,
        zIndex: 10,
      }, '<').to(img2.current, {
        scale: 0.8,
        zIndex:5,
      }, '<').to(img1.current, {
        scale: 0.6,
        zIndex:0
      }, '<')
    }
  }, [mobileId, timeline])

  return (
    <div ref={imgContainerRef} className='flex d w-fit mx-auto mb-[90px]' >
      <img ref={img1} className='img-1 w-[213px]  scale-[0.8]' src={mobileImg1} alt="mobile version ios app-store" />
      <img ref={img2} className='img-2 w-[213px] ml-[-110px] scale-[0.8] ' src={mobileImg2} alt="mobile version ios app-store" />
      <img ref={img3} className='img-3 w-[213px] ml-[-130px] scale-[0.8] ' src={mobileImg3} alt="mobile version ios app-store" />
    </div>
  )
}

export default MobileViewImages