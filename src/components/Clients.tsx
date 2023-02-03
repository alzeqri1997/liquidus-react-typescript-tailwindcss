import React, { useLayoutEffect, useRef } from 'react'
import foxNews from '../assets/images/fox-news.png';
import cnn from '../assets/images/cnn.png';
import theCointelegraph from '../assets/images/The-cointelegraph.png'
import bscNews from '../assets/images/bsc-news.png';
import { gsap } from 'gsap'


const Clients = () => {
  const clientRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: clientRef.current,
          start: 'top center',
        }
      })
        .fromTo(clientRef.current, {
          opacity: 0
        }, {
          opacity: 1,
        }).fromTo('.clients img', {
          opacity: 0,
          x: -100
        }, {
          x: 0,
          opacity: 1,
          stagger: .1
        } ,"-=.3").fromTo('.client-seen', {
          opacity: 0,
        }, {
          opacity: 1,
        }, "-=.5")
    }, clientRef)

    return () => ctx.revert()
  }, [])
  return (
    <section className=' px-[30px] mt-[461px] max-lg:mt-[200px] max-mg:mb-[150px] mb-[180px]' >
      <div ref={clientRef} className='clients relative  max-sm:mb-[70px]  flex items-center flex-wrap  gap-[112px] max-lg:gap-[60px] max-md:gap-[30px] max-md:justify-center p-[20px] bg-white bg-opacity-5 w-fit mx-auto rounded-[20px]' >
        <img className='w-[70px] h-[56px]' src={foxNews} alt="fox news" />
        <img className='w-[92px] h-[45px]' src={cnn} alt="cnn news" />
        <img className='w-[201px] h-[38px]' src={theCointelegraph} alt="the-cointelegraph news" />
        <img className='w-[92px] h-[92px]' src={bscNews} alt="bsc news" />
        <span className='client-seen' > as seen on  </span>
      </div>
    </section>
  )
}

export default Clients