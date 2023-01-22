import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import certik from '../assets/images/Certik.png'
import hacken from '../assets/images/Hacken.png'
import solidProof from '../assets/images/SolidProof.png'
import techrate from '../assets/images/Techrate.png'


const Clients2 = () => {
  const clientRef = useRef<any>()
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.timeline({
  //       defaults: {
  //         ease: "power4.out",
  //       },
  //       scrollTrigger: {
  //         trigger: clientRef.current,
  //         start: 'top center',
  //       }
  //     })
  //       .fromTo(clientRef.current, {
  //         opacity: 0
  //       }, {
  //         opacity: 1,
  //       }).fromTo('.clients img', {
  //         opacity: 0,
  //         x: -100
  //       }, {
  //         x: 0,
  //         opacity: 1,
  //         stagger: .2
  //       } ,"-=.3").fromTo('.client-seen', {
  //         opacity: 0,
  //         y: 100
  //       }, {
  //         opacity: 1,
  //         y:"-50%"
  //       }, "-=.5")
  //   }, clientRef)

  //   return () => ctx.revert()
  // }, [])
  return (
    <section ref={clientRef} className='container pb-[215px]' >
      <div className='relative mt-[28px]  flex justify-between items-center gap-[112px] px-[109px] py-[54px] shadow-box-shadow rounded-[20px] ' >
        <img className='' src={certik} alt="certik brand" />
        <img className='' src={hacken} alt="hacken brand" />
        <img className='' src={solidProof} alt="solidProof brand" />
        <img className='' src={techrate} alt="techrate brand" />
        <span className='absolute top-full left-[50%] translate-y-[-50%] bg-dark text-white py-[12px] px-[24px] rounded-[12px] font-medium leading-[30px] text-[19px] ' > Our Audits  </span>
      </div>
    </section>
  )
}

export default Clients2