import { gsap } from 'gsap'
import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import logo from '../assets/logo.svg'


const mobileTl = gsap.timeline({ paused: true, reversed: true });
const Header = ({ liqPrice }:{liqPrice: number}) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(mobileMenuRef.current?.querySelectorAll('div') as NodeList);
      mobileTl.fromTo(mobileMenuRef.current, {
        opacity: 0,
      }, {
        opacity: 1,
      }).fromTo(elements, {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: .1
      })
    }, mobileMenuRef);
    return () => ctx.revert()
  }, []);
  
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (showMobileMenu === true) {
        setShowMobileMenu(false);
        mobileTl.reverse();
      }
    });
  }, [showMobileMenu])
  

  const handleMobileMenu = ()=> {
    setShowMobileMenu((prev) => !prev);
    mobileTl.reversed() ? mobileTl.play() : mobileTl.reverse()
  }
  return (
    <header className='container mt-[28px] mb-[85px]' >
      <div className='w-full max-md:hidden' >
        <div className='flex justify-end items-center ' >
          <div className='header-upper flex gap-[16px]' >
            <div className='flex gap-[10px]' >
              <a href="https://t.me/liquidusfinance" target={'_blank'}>
                <svg className='mx-[10px] w-[20px] transition-colors text-[#9AA6CF] hover:text-white ' width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.38 0.127747L1.12065 8.04087C-0.330214 8.60337 -0.321821 9.38461 0.85446 9.73298L6.31259 11.3765L18.9411 3.68559C19.5383 3.33489 20.0838 3.52355 19.6354 3.90781L9.40378 12.8209H9.40138L9.40378 12.8221L9.02727 18.2526C9.57884 18.2526 9.82225 18.0084 10.1316 17.7202L12.7827 15.2318L18.2972 19.1635C19.314 19.704 20.0443 19.4262 20.2973 18.2549L23.9172 1.78745C24.2877 0.35344 23.3501 -0.29586 22.38 0.127747Z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://twitter.com/LiquidusFinance" target={'_blank'}>
                <svg className='mx-[10px] w-[20px] transition-colors text-[#9AA6CF] hover:text-white ' width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7646 5.06055C22.7811 5.28318 22.7811 5.50453 22.7811 5.72588C22.7811 12.5 17.6251 20.3058 8.20244 20.3058C5.29942 20.3058 2.6025 19.4649 0.333008 18.0045C0.74518 18.0516 1.14209 18.0681 1.5708 18.0681C3.87717 18.0737 6.11823 17.3025 7.93274 15.8788C6.86341 15.8594 5.82682 15.5066 4.9677 14.8697C4.10858 14.2327 3.46982 13.3433 3.14061 12.3257C3.45737 12.3728 3.77541 12.4046 4.1087 12.4046C4.56795 12.4046 5.02973 12.341 5.45844 12.2303C4.29795 11.996 3.25443 11.367 2.50533 10.4502C1.75623 9.53341 1.34778 8.38547 1.34944 7.20156V7.13795C2.03258 7.51832 2.82512 7.75621 3.66473 7.78801C2.96135 7.32061 2.38461 6.68637 1.98594 5.94188C1.58728 5.19738 1.3791 4.36578 1.37997 3.52127C1.37997 2.56971 1.63313 1.69703 2.07711 0.936292C3.36468 2.52013 4.97058 3.81585 6.79079 4.73954C8.61101 5.66323 10.6049 6.1943 12.6435 6.29834C12.5646 5.9167 12.5162 5.52107 12.5162 5.12416C12.5159 4.45115 12.6482 3.78468 12.9056 3.16283C13.163 2.54099 13.5404 1.97598 14.0163 1.50009C14.4922 1.0242 15.0572 0.646768 15.6791 0.389373C16.3009 0.131978 16.9674 -0.000333782 17.6404 6.32331e-07C19.1161 6.32331e-07 20.448 0.618258 21.3843 1.61816C22.5315 1.39632 23.6316 0.977537 24.6359 0.380369C24.2535 1.56449 23.4525 2.56857 22.3829 3.20451C23.4004 3.08846 24.3947 2.8209 25.333 2.4107C24.6322 3.43235 23.7639 4.32824 22.7646 5.06055Z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://medium.com/@liquidus" target={'_blank'}>
                <svg className='mx-[10px] w-[20px] transition-colors text-[#9AA6CF] hover:text-white ' width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0533 9.09332C18.0604 11.4956 17.1138 13.8026 15.4214 15.5075C13.7289 17.2125 11.429 18.1761 9.02669 18.1866C6.62438 18.1761 4.32447 17.2125 2.63202 15.5075C0.939569 13.8026 -0.0070495 11.4956 3.9531e-05 9.09332C-0.0070495 6.69099 0.939569 4.38405 2.63202 2.6791C4.32447 0.974157 6.62438 0.0105881 9.02669 0C11.429 0.0105881 13.7289 0.974157 15.4214 2.6791C17.1138 4.38405 18.0604 6.69099 18.0533 9.09332ZM27.9467 9.09332C27.9467 13.8133 25.9333 17.6533 23.44 17.6533C20.9467 17.6533 18.92 13.8133 18.92 9.09332C18.92 4.37333 20.9467 0.533333 23.44 0.533333C25.9333 0.533333 27.9467 4.37333 27.9467 9.09332ZM32 9.09332C32 13.32 31.2933 16.76 30.4133 16.76C29.5333 16.76 28.8267 13.32 28.8267 9.09332C28.8267 4.86666 29.5333 1.42667 30.4133 1.42667C31.2933 1.42667 32 4.86666 32 9.09332Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <div className='header-upper ml-[30px]' >
            <a className=' opacity-50 op transition-opacity hover:opacity-100 mr-[30px]' href="https://www.coingecko.com/en/coins/liquidus" target={'_blank'}>CoinGecko</a>
            <a className=' opacity-50 transition-opacity hover:opacity-100' href="https://coinmarketcap.com/currencies/liquidus/" target={'_blank'}>CMC</a>
          </div>
        </div>

      </div>
      <div className='header flex justify-between mt-[21px] max-md:hidden'>
        <div className='header-left flex items-center' >
          <a href="/"><img src={logo} alt="logo" /></a>
          <ul className='flex ml-[30px]' >
            <li className='text-[14px] font-medium leading-[17px] transition-all hover:text-primary hover:!opacity-100'><a href='#farm'>Farm</a></li>
            <li className='text-[14px] font-medium ml-[30px] leading-[17px] transition-all hover:text-primary hover:!opacity-100'><a href="#security" >Security</a></li>
            <li className='text-[14px] font-medium ml-[30px] leading-[17px] transition-all hover:text-primary hover:!opacity-100'><a href="#features">Features</a></li>
            <li className='text-[14px] font-medium ml-[30px] leading-[17px] transition-all hover:text-primary hover:!opacity-100'><a href="#litepaper" >Litepaper</a></li>
            <li className='text-[14px] font-medium ml-[30px] leading-[17px] transition-all hover:text-primary hover:!opacity-100'><a href="#tiers">tiers</a></li>
          </ul>
        </div>

        <div className='header-right' >
          <a className=' inline-block  py-[12px] px-[16px] font-medium text-[12px] rounded-[4px] text-[#040618] bg-primary transition-colors hover:text-dark hover:bg-white' href="https://farm.liquidus.finance/" target={'_blank'}>Farm</a>

          <a className=' inline-block py-[12px] px-[16px] font-medium text-[12px] rounded-[4px] text-[#040618] bg-[#ffff] ml-[8px] transition-colors hover:bg-primary' href="https://coinmarketcap.com/de/currencies/liquidus/" target={'_blank'}>LIQ ${liqPrice}</a>
        </div>
      </div>


      {/* mobile menu */}
      <div className='hidden max-md:block relative' >
        <div className='  w-fit ml-auto' >
          <a className=' inline-block  py-[12px] px-[16px] font-medium text-[12px] rounded-[4px] text-[#040618] bg-primary' href="#">Farm</a>

          <a className=' inline-block py-[12px] px-[16px] font-medium text-[12px] rounded-[4px] text-[#040618] bg-[#ffff] ml-[8px]' href="#">LIQ $1.32</a>
        </div>
        <div className='flex items-center justify-between py-[10px]' >
          <a href="#"><img src={logo} alt="logo" /></a>
          <button className=' select-none pointer-events-auto outline-none ' onClick={handleMobileMenu} >
            <div id='nav-icon' className={`${showMobileMenu ? 'open-icon' : ''}`} >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>


        <div ref={mobileMenuRef} className={` mobile-menu  py-[20px] absolute bg-dark z-[1000] w-full ${showMobileMenu ? 'open-menu' : ''} `}>
          <div className='flex gap-[10px]' >
            <a href="https://t.me/liquidusfinance" target={'_blank'}>
              <svg className='mx-[10px] w-[20px] transition-colors text-[#9AA6CF] hover:text-white ' width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.38 0.127747L1.12065 8.04087C-0.330214 8.60337 -0.321821 9.38461 0.85446 9.73298L6.31259 11.3765L18.9411 3.68559C19.5383 3.33489 20.0838 3.52355 19.6354 3.90781L9.40378 12.8209H9.40138L9.40378 12.8221L9.02727 18.2526C9.57884 18.2526 9.82225 18.0084 10.1316 17.7202L12.7827 15.2318L18.2972 19.1635C19.314 19.704 20.0443 19.4262 20.2973 18.2549L23.9172 1.78745C24.2877 0.35344 23.3501 -0.29586 22.38 0.127747Z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://twitter.com/LiquidusFinance" target={'_blank'}>
              <svg className='mx-[10px] w-[20px] transition-colors text-[#9AA6CF] hover:text-white ' width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7646 5.06055C22.7811 5.28318 22.7811 5.50453 22.7811 5.72588C22.7811 12.5 17.6251 20.3058 8.20244 20.3058C5.29942 20.3058 2.6025 19.4649 0.333008 18.0045C0.74518 18.0516 1.14209 18.0681 1.5708 18.0681C3.87717 18.0737 6.11823 17.3025 7.93274 15.8788C6.86341 15.8594 5.82682 15.5066 4.9677 14.8697C4.10858 14.2327 3.46982 13.3433 3.14061 12.3257C3.45737 12.3728 3.77541 12.4046 4.1087 12.4046C4.56795 12.4046 5.02973 12.341 5.45844 12.2303C4.29795 11.996 3.25443 11.367 2.50533 10.4502C1.75623 9.53341 1.34778 8.38547 1.34944 7.20156V7.13795C2.03258 7.51832 2.82512 7.75621 3.66473 7.78801C2.96135 7.32061 2.38461 6.68637 1.98594 5.94188C1.58728 5.19738 1.3791 4.36578 1.37997 3.52127C1.37997 2.56971 1.63313 1.69703 2.07711 0.936292C3.36468 2.52013 4.97058 3.81585 6.79079 4.73954C8.61101 5.66323 10.6049 6.1943 12.6435 6.29834C12.5646 5.9167 12.5162 5.52107 12.5162 5.12416C12.5159 4.45115 12.6482 3.78468 12.9056 3.16283C13.163 2.54099 13.5404 1.97598 14.0163 1.50009C14.4922 1.0242 15.0572 0.646768 15.6791 0.389373C16.3009 0.131978 16.9674 -0.000333782 17.6404 6.32331e-07C19.1161 6.32331e-07 20.448 0.618258 21.3843 1.61816C22.5315 1.39632 23.6316 0.977537 24.6359 0.380369C24.2535 1.56449 23.4525 2.56857 22.3829 3.20451C23.4004 3.08846 24.3947 2.8209 25.333 2.4107C24.6322 3.43235 23.7639 4.32824 22.7646 5.06055Z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://medium.com/@liquidus" target={'_blank'}>
              <svg className='mx-[10px] w-[20px] transition-colors text-[#9AA6CF] hover:text-white ' width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0533 9.09332C18.0604 11.4956 17.1138 13.8026 15.4214 15.5075C13.7289 17.2125 11.429 18.1761 9.02669 18.1866C6.62438 18.1761 4.32447 17.2125 2.63202 15.5075C0.939569 13.8026 -0.0070495 11.4956 3.9531e-05 9.09332C-0.0070495 6.69099 0.939569 4.38405 2.63202 2.6791C4.32447 0.974157 6.62438 0.0105881 9.02669 0C11.429 0.0105881 13.7289 0.974157 15.4214 2.6791C17.1138 4.38405 18.0604 6.69099 18.0533 9.09332ZM27.9467 9.09332C27.9467 13.8133 25.9333 17.6533 23.44 17.6533C20.9467 17.6533 18.92 13.8133 18.92 9.09332C18.92 4.37333 20.9467 0.533333 23.44 0.533333C25.9333 0.533333 27.9467 4.37333 27.9467 9.09332ZM32 9.09332C32 13.32 31.2933 16.76 30.4133 16.76C29.5333 16.76 28.8267 13.32 28.8267 9.09332C28.8267 4.86666 29.5333 1.42667 30.4133 1.42667C31.2933 1.42667 32 4.86666 32 9.09332Z" fill="currentColor" />
              </svg>
            </a>
          </div>

          <div className='my-[10px]' >
            <a className=' opacity-50 op transition-opacity hover:opacity-100 mr-[30px]' href="https://www.coingecko.com/en/coins/liquidus" target={'_blank'}>CoinGecko</a>
            <a className=' opacity-50 transition-opacity hover:opacity-100' href="https://coinmarketcap.com/currencies/liquidus/" target={'_blank'}>CMC</a>
          </div>
          <div>
            <ul className='flex flex-col' >
              <li className='text-[14px] mb-[10px] font-medium leading-[17px] transition-colors hover:text-primary'><a href="#farm" >Farm</a></li>
              <li className='text-[14px] mb-[10px] font-medium leading-[17px] transition-colors hover:text-primary'><a href="#security" >Security</a></li>
              <li className='text-[14px] mb-[10px] font-medium leading-[17px] transition-colors hover:text-primary'><a href="#features">Features</a></li>
              <li className='text-[14px] mb-[10px] font-medium leading-[17px] transition-colors hover:text-primary'><a href="#litepaper">Litepaper</a></li>
              <li className='text-[14px] font-medium leading-[17px] transition-colors hover:text-primary'><a href="#tiers">Tiers</a></li>
            </ul>
          </div>

        </div>
      </div>
      <div>

      </div>
    </header>

  )
}

export default Header