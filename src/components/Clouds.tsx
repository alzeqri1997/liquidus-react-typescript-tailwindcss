import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import cld1 from '../assets/icons/cloud1.svg'
import cld2 from '../assets/icons/cloud2.svg'
import cld3 from '../assets/icons/cloud3.svg'
import cld4 from '../assets/icons/cloud4.svg'
import cld5 from '../assets/icons/cloud5.svg'

const Clouds = () => {
  const cloudContainerRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    let mm = gsap.matchMedia(cloudContainerRef);

    mm.add("(min-width: 639px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.clouds-container',
          start: '+=50px 65%',
          end: '+=620px',
          scrub: 2,
          pin: true
        }
      }).to('.clouds-container__img1', {
        xPercent: -120
      }).to('.clouds-container__img2', {
        xPercent: 100
      },"<").to('.clouds-container__img3', {
        xPercent: -100
      }, "<").to('.clouds-container__img4', {
        xPercent: -150
      }, "<").to('.clouds-container__img5', {
        xPercent: -140
      }, "<")

    });

    return () => mm.revert()

  }, [])

  return (
    <div className=' max-sm:hidden ' ref={cloudContainerRef} >
      <div className='container clouds-container relative h-[321px] ' >
        <img className='absolute clouds-container__img1  top-[45%] left-[-6%] z-50 ' src={cld1} alt="cloud" />
        <img className='absolute clouds-container__img2 right-[-31%] bottom-0 z-50  ' src={cld2} alt="cloud" />
        <img className='absolute clouds-container__img3 left-[-14%] bottom-0 z-30 ' src={cld3} alt="cloud" />
        <img className='absolute clouds-container__img4 left-[22%] bottom-[-37%] ' src={cld4} alt="cloud" />
        <img className='absolute clouds-container__img5 left-[14%] top-[30%] ' src={cld5} alt="cloud" />
      </div>
    </div>
  )
}

export default Clouds