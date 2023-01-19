import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type propTypes = {
  text: string
}

const BigText = ({ text } : propTypes) => {

  gsap.registerPlugin(ScrollTrigger);
  const bigTextOverlayRef = useRef<HTMLDivElement>(null);
  // const bigTextContentRef = useRef()

  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: bigTextOverlayRef.current,
        scrub: true,
        start: ' center top'
      }
    }).to(bigTextOverlayRef.current, {
      yPercent: 50,
    })
  }, [])


  return (
    <div className='max-w-[1027px] relative mx-auto mb-[195px]' >
      <h1 className='text-[100px] text-primary font-bold leading-[121.9px] text-center '>{text}</h1>
      <div ref={bigTextOverlayRef} className='absolute w-full h-full top-0 bg-linear left-0' > </div>
    </div>
  )
}

export default BigText