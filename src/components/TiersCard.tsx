import { useRef, useLayoutEffect } from 'react'


import bronze from '../assets/icons/tier/Bronze.svg'
import gold from '../assets/icons/tier/Gold.svg'
import silver from '../assets/icons/tier/Silver.svg'
import superior from '../assets/icons/tier/Superior.svg'
import topUp from '../assets/icons/Topup.svg'
import expand from '../assets/icons/Expand.svg'

import { gsap } from 'gsap'

// Types
type TiersCardDataType = {
  id: 0 | 1 | 2 | 3,
  name: string,
  image: string,
  details: Array<{ name: string, value: string }>
}

const tiersCardData: TiersCardDataType[] = [
  {
    id: 0,
    name: 'Titan',
    image: superior,
    details: [
      { name: 'Tokens Staked', value: '18,940 LIQ' },
      { name: 'Liquidus BoostTitan Fee', value: '200% APR' },
      { name: 'Titan Fee', value: '0.0%' },
      { name: 'Security Rating', value: 'Yes' }
    ]
  },
  {
    id: 1,
    name: 'Gold',
    image: gold,
    details: [
      { name: 'Tokens Staked', value: '5000 LIQ' },
      { name: 'Liquidus BoostTitan Fee', value: '75% APR' },
      { name: 'Titan Fee', value: '0.05%' },
      { name: 'Security Rating', value: 'Yes' }
    ]
  },
  {
    id: 2,
    name: 'Silver',
    image: silver,
    details: [
      { name: 'Tokens Staked', value: '1000 LIQ' },
      { name: 'Liquidus BoostTitan Fee', value: '25% APR' },
      { name: 'Titan Fee', value: '0.08%' },
      { name: 'Security Rating', value: 'Yes' }
    ]
  },
  {
    id: 3,
    name: 'Standard',
    image: bronze,
    details: [
      { name: 'Tokens Staked', value: '0 LIQ' },
      { name: 'Liquidus BoostTitan Fee', value: 'None APR' },
      { name: 'Titan Fee', value: '0.01%' },
      { name: 'Security Rating', value: 'Yes' }
    ]
  },
]

type propTypes = {
  currentCard: number,
  setShowTiersModal: (value: boolean)=> void
}

const TiersCard = ({ currentCard, setShowTiersModal }: propTypes) => {

  const tiersCardRef = useRef<HTMLDivElement>(null)
  
  function handleShowModalClick() {
    setShowTiersModal(true)
  }



  useLayoutEffect(() => {
    gsap.fromTo(tiersCardRef.current, {
      opacity: 0,
    }, {
      opacity:1
    })
  }, [currentCard])
  return (
    <div ref={tiersCardRef} className="tiers-card relative w-fit mx-auto z-50 " >
      {tiersCardData.map((card: TiersCardDataType, index) => (
        (card.id === currentCard) && <div key={card.id} className='p-[31px] bg-[#F1F7FF] max-w-[342px] mx-auto rounded-[12px]'>
          <div key={card.id} className='flex justify-between items-center' >
            <div className='flex items-center' >
              <img className='w-[50px]' src={card.image} alt="" />
              <div className='ml-[12px]' >
                <span className='text-[18px] font-medium leading-[21.94px] ' >{card.name}</span>
                <div className='bg-white px-[4px] py-[2px] rounded-[4px] flex items-center' >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.2" cx="4" cy="4" r="4" fill="#888D94" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.36328 4C2.36328 4.43397 2.5356 4.85019 2.84257 5.15703C3.14937 5.46401 3.5656 5.63631 3.99959 5.63631C4.43359 5.63631 4.84978 5.46399 5.15662 5.15703C5.4636 4.85022 5.6359 4.434 5.6359 4C5.6359 3.56601 5.46358 3.14982 5.15662 2.84298C4.84981 2.536 4.43359 2.36369 3.99959 2.36369C3.5658 2.3642 3.14989 2.53687 2.84309 2.8435C2.53646 3.15031 2.3638 3.56618 2.36328 4ZM3.99959 2.72726C4.33708 2.72726 4.66075 2.8614 4.89956 3.10003C5.13819 3.33883 5.27234 3.66253 5.27234 4C5.27234 4.33748 5.13819 4.66116 4.89956 4.89997C4.66076 5.13861 4.33707 5.27275 3.99959 5.27275C3.66212 5.27275 3.33844 5.13861 3.09962 4.89997C2.86099 4.66117 2.72685 4.33748 2.72685 4C2.72736 3.66251 2.8615 3.33915 3.10013 3.10056C3.33876 2.86196 3.66211 2.72778 3.99958 2.72727L3.99959 2.72726Z" fill="#112455" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.81813 2.18182H5.09082L5.81813 2.90913V2.18182Z" fill="#112455" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.18164 2.18182V2.90913L2.90895 2.18182H2.18164Z" fill="#112455" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.81813 5.81819V5.09088L5.09082 5.81819H5.81813Z" fill="#112455" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.18164 5.09088V5.81819H2.90895L2.18164 5.09088Z" fill="#112455" />
                  </svg>
                  <span className=' font-semibold text-[10px] leading-[12.19px] ml-[4px] ' >Next Level</span>
                </div>
              </div>
            </div>
            <div>
              <img src={expand} alt="" />
            </div>
          </div>
          <div className='mt-[20px]' >
            {card.details.map(({ name, value }, index) => (
              <div key={index} className='mt-[10px]' >
                <div className='flex justify-between' >
                  <div className='flex' >
                    <img src={topUp} alt="" />
                    <span className='ml-[4px] text-[12px] leading-[15px]' >{name}</span>
                  </div>
                  <span className='font-bold text-[12px] leading-[15px]' >{value}</span>
                </div>
                {index + 1 < card.details.length ? (<svg className=' w-full mt-[10px]' height="2" viewBox="0 0 282 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1" d="M0 1H282" stroke="#112455" />
                </svg>) : null}
              </div>
            ))}
            <button onClick={handleShowModalClick} className='border border-secondary rounded-[8px] py-[15px] w-full text-center mt-[30px] font-semibold leading-[19.5px]' >
              View all premium tiers
            </button>
          </div>

        </div>
      ))}
    </div>
  )
}

export default TiersCard