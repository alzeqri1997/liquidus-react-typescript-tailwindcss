import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type propTypes = {
  text: string
}

const BigText = ({ text } : propTypes) => {

  const bigTextOverlayRef = useRef<HTMLDivElement>(null);
  const bigTextContainer = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bigTextOverlayRef.current, {
        scrollTrigger: {
          trigger: bigTextContainer.current,
          scrub: true,
          start: ' 80% 80%',
          end: 'bottom 20%',
          toggleActions: 'play pause reverse reset',
        },
        yPercent: 100,
      })
      
    },bigTextContainer)

    return ()=> ctx.revert()
  }, [])


  return (
    <div ref={bigTextContainer} className='max-w-[1027px] overflow-hidden  px-[30px] relative mx-auto mb-[195px]' >
      <h1 className='text-[100px] max-md:text-[50px] max-sm:text-[38px] text-primary font-bold leading-[121.9px] max-md:leading-[80px] max-sm:leading-[50px] text-center '>{text}</h1>
      <div ref={bigTextOverlayRef} className='absolute w-full h-[150%] bottom-0 bg-linear left-0' > </div>
    </div>
  )
}

export default BigText