import React, { useLayoutEffect, useState, useRef, useEffect } from 'react'
import MobileViewImages from './MobileViewImages';
import { gsap } from 'gsap';
import bnbBtc from '../assets/icons/BNB-BTC.svg';
import cloudLg from '../assets/icons/cloud-lg.svg';
import cloudSm from '../assets/icons/cloud-sm.svg';
import cro from '../assets/icons/CRO.svg';
import eth2 from '../assets/icons/ETH-2.svg';
import usdt from '../assets/icons/USDT.svg';
import bnb from '../assets/icons/BNB.svg';
import ethLiq from '../assets/icons/ETH-LIQ.svg';
import eth from '../assets/icons/ETH.svg';
import btc from '../assets/icons/BTC.svg';


const MobileView = () => {

  const [mobileId, setMobileId] = useState(2);
  const [tl, setTl] = useState<GSAPTimeline>(gsap.timeline());
  const mobileRef = useRef(null);

  const btnTexts = [
    'simple',
    'Secure',
    'APY'
  ]

  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      setTl(timeline);
    })
    return () => ctx.revert();
  }, [])
  return (
    <section ref={mobileRef} className='mb-[236px] container relative' >
      <div className='' >
        <MobileViewImages mobileId={mobileId} timeline={tl} />
        <div className='max-w-[545px] mx-auto' >
          <div className='flex justify-center'>
            {btnTexts.map((text, index) => (
              <button key={index} onClick={() => setMobileId(index + 1)} className={`btn2 ${mobileId === index + 1 && 'bg-primary bg-opacity-[0.2] '}`} >
                {text}
              </button>
            ))}
          </div>
          <h4 className='text-[30px] font-bold  leading-[36.56px] text-center mb-[8px] mt-[30px]' > One click farming </h4>
          <p className='font-medium text-[19px] leading-[23.16px] text-center opacity-50 mb-[20px] ' >We make sure your idle assets are secure. So you can invest with confidence and peace of mind.</p>
          <a href="#" className='font-semibold text-[15px] leading-[18.29px] text-center  py-[21px] px-[36px] rounded-full bg-primary text-dark block w-fit mx-auto' ><span>Start earning</span></a>
        </div>
      </div>

      <img className='absolute top-[50%] left-[19%]' src={bnbBtc} alt="bnb btc" />
      <img className='absolute top-[-10%] right-[6%]' src={cloudLg} alt="cloud" />
      <img className='absolute top-[20%] left-[10%]' src={cloudSm} alt="cloud" />
      <img className='absolute top-[10%] left-[14%]' src={cro} alt="cro" />
      <img className='absolute top-[-3%] left-[21%]' src={eth2} alt="eth2" />
      <img className='absolute top-[51%] right-[24%] ' src={usdt} alt="usdt" />
      <img className='absolute top-[33%] right-[17%] ' src={bnb} alt="bnb" />
      <img className='absolute top-[20%] right-[10%] ' src={ethLiq} alt="ethLiq" />
      <img className='absolute top-[12%] right-[25%] ' src={eth} alt="eth" />
      <img className='absolute top-[30%] left-[25%]' src={btc} alt="btc" />

      {/* circles  */}
      <svg className='absolute top-[-16%] right-[26%]' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M4.48 8.96C6.95423 8.96 8.96 6.95424 8.96 4.48C8.96 2.00576 6.95423 0 4.48 0C2.00576 0 0 2.00576 0 4.48C0 6.95424 2.00576 8.96 4.48 8.96Z" fill="#17E7D6" />
      </svg>

      <svg className='absolute top-[-10%] left-[25%] ' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z" fill="#17E7D6" />
      </svg>

      <svg className='absolute top-[47%] left-[13%]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.62 19.24C14.933 19.24 19.24 14.933 19.24 9.62C19.24 4.30702 14.933 0 9.62 0C4.30702 0 0 4.30702 0 9.62C0 14.933 4.30702 19.24 9.62 19.24Z" fill="#17E7D6" />
      </svg>

      <svg className='absolute bottom-[28%] left-[21%]' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M4.48 8.96C6.95423 8.96 8.96 6.95424 8.96 4.48C8.96 2.00576 6.95423 0 4.48 0C2.00576 0 0 2.00576 0 4.48C0 6.95424 2.00576 8.96 4.48 8.96Z" fill="#17E7D6"/>
</svg>





    </section>
  )
}

export default MobileView