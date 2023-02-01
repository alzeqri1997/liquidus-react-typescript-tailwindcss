import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import certik from '../assets/images/Certik.png'
import hacken from '../assets/images/Hacken.png'
import solidProof from '../assets/images/SolidProof.png'
import techrate from '../assets/images/Techrate.png'


const Clients2 = () => {
  const clientRef = useRef<any>()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration:.7
        },
        scrollTrigger: {
          trigger: '.client-container',
          start: 'top center',
        }
      })
        .fromTo('.client-container', {
          opacity: 0
        }, {
          opacity: 1,
        }).fromTo('.client-container img', {
          opacity: 0,
          x: 100
        }, {
          x: 0,
          opacity: 1,
          stagger: .1
        } ,"-=.3").fromTo('.floating-element', {
          opacity: 0,
        }, {
          opacity: 1,
        }, "-=.5")
    }, clientRef)

    return () => ctx.revert()
  }, [])
  return (
    <section ref={clientRef} className='container pb-[215px]' >
      <div className='client-container relative mt-[28px] flex flex-wrap justify-between max-lg:justify-center  items-center gap-[112px] max-sm:gap-[60] px-[109px] max-lg:px-[50px] py-[54px] shadow-box-shadow rounded-[20px] ' >
        <img className='' src={certik} alt="certik brand" />
        <img className='' src={hacken} alt="hacken brand" />
        <img className='' src={solidProof} alt="solidProof brand" />
        <img className='' src={techrate} alt="techrate brand" />
        <span className='floating-element absolute bottom-[-13%] max-sm:bottom-[-4%] right-[50%] translate-x-[50%] bg-dark text-white py-[12px] px-[24px] rounded-[12px] font-medium leading-[30px] text-[19px] max-sm:text-[16px] ' > Our Audits  </span>
      </div>
    </section>
  )
}

export default Clients2