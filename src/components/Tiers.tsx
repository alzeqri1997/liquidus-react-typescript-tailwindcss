import { useState, useRef, useLayoutEffect } from 'react'
import TiersCard from './TiersCard'

import bronze from '../assets/icons/tier/Bronze.svg'
import gold from '../assets/icons/tier/Gold.svg'
import silver from '../assets/icons/tier/Silver.svg'
import superior from '../assets/icons/tier/Superior.svg'
import { gsap } from 'gsap'
import TiersTable from './TiersTable'

type currentCardType = 0 | 1 | 2 | 3


const Tiers = () => {

  const tiersRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: '.heading-container',
          start: 'top center',
        }
      })
        .fromTo('.heading-container h1', {
          x: function (index) {
            return index % 2 === 0 ? -100 : 100
          },
          opacity: 0,
        }, {
          x: 0,
          opacity: 1,
          stagger: .1
        });
      
        gsap.timeline({
              defaults: { duration: 1 },
              scrollTrigger: {
                trigger: '.tiers-card-container',
                start: 'top center',
              }
            })
            .fromTo('.tiers-card', {
              opacity: 0,
              scale:0
            }, {
              opacity: 1,
              duration:1.5,
              scale: 1,
              ease:"power4.out"
            })
            .fromTo('.tiers-card-container .superior', {
              opacity: 0,
              y: -150,
              x:-370
            }, {
              opacity: 1,
              y: 0,
              x: 0,
              ease:"circ.inOut",
              duration:3
            },"-=1")
            .fromTo('.tiers-card-container .gold', {
              opacity: 0,
              y: 150,
              x:-370
            }, {
              opacity: 1,
              y: 0,
              x: 0,
              ease:"circ.inOut",
              duration:3
            },"<")
            .fromTo('.tiers-card-container .sliver', {
              opacity: 0,
              y: 150,
              x:370
            }, {
              opacity: 1,
              y: 0,
              x: 0,
              ease:"circ.inOut",
              duration:3
            },"<")
            .fromTo('.tiers-card-container .bronze', {
              opacity: 0,
              y: -150,
              x:370
            }, {
              opacity: 1,
              y: 0,
              x: 0,
              ease:"circ.inOut",
              duration:3
            },"<")

    }, tiersRef)
    return () => ctx.revert()
  },[])







  // functions
  const handleClick = (id: currentCardType): void => {
    if (id != currentCard) {
      const random = () => gsap.utils.random(-60, 60, true);
      const iconArray = gsap.utils.toArray('.tier-icon');
      gsap.to(iconArray, {
        rotate: random(),
        ease: "back.out(1.7)",
        duration: 2,
      });
      setCurrentCard(id);
    }
  }
  const cardIds = [0, 1, 2, 3];
  const [currentCard, setCurrentCard] = useState<currentCardType>(0)
  const [showTiersModal, setShowTiersModal] = useState(false)
  return (
    <>
    <section ref={tiersRef} className='container pt-[107px] pb-[400px] relative' >
      <div className="heading-container pb-[197px]">
        <h1 className="text-[60px] font-medium leading-[73.14px]">
          We take your  <strong>Security</strong>
        </h1>
        <h1 className="text-[60px] font-medium leading-[73.14px] text-end ">
          very seriously at  <strong>Liquidus</strong>
        </h1>
      </div>


      <div className='relative tiers-card-container'>
        <TiersCard setShowTiersModal={setShowTiersModal}   currentCard={currentCard} />
        <div className='flex flex-row-reverse justify-center mt-[20px] ' >
          {cardIds.map((id: number) => (
            <button key={id} onClick={() =>handleClick(id as currentCardType)} >
              <svg className={`mx-[3px] opa text-[#112455] ${id === currentCard ? ' opacity-100 ' : 'opacity-20'} `} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="currentColor" />
              </svg>
            </button>
          ))}
        </div>

        <img onClick={() => handleClick(0)} className='tier-icon  superior z-0 absolute top-[58%] right-[5.7%] w-[195px] rotate-[15deg] cursor-pointer' src={superior} alt=" superior" />
        <img onClick={() => handleClick(1)} className='tier-icon  gold absolute top-[-17%] right-[12%] w-[132px] rotate-[-3deg] cursor-pointer' src={gold} alt=" gold" />
        <img onClick={() => handleClick(2)} className='tier-icon sliver absolute top-[-10%] left-[15%] w-[102px] rotate-[11.13deg]  cursor-pointer' src={silver} alt=" silver" />
        <img onClick={() => handleClick(3)} className='tier-icon bronze absolute top-[65.9%] left-[13%] w-[99px] rotate-[-16.44deg]  cursor-pointer' src={bronze} alt=" bronze" />
      </div>
      </section>
      {showTiersModal && <TiersTable setShowTiersModal={setShowTiersModal}  />}
      </>
  )
}

export default Tiers