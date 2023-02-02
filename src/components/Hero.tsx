import React from 'react'
import heroImage from '../assets/images/hero-image.png'
import bnb from '../assets/icons/BNB.svg'
import btc from '../assets/icons/BTC.svg'
import ethLiq from '../assets/icons/ETH-LIQ.svg'
import eth from '../assets/icons/ETH.svg'
import cloud from '../assets/icons/cloud.svg'

const Hero = () => {
  return (
    <section className='container' >
      <div className='flex max-lg:flex-col-reverse relative' >
        <div className='hero-left relative z-50 max-lg:mb-[40px]'>
          <h1 className='text-[70px] max-sm:text-[44px] leading-[85.33px] max-sm:leading-[56px] ' >
            Liquidus helps you <br />
            <strong>earn with DeFi</strong>
          </h1>
          <p className='opacity-50 font-normal leading-[36.57px] max-sm:leading-[26px] text-[30px] max-sm:text-[20px] mb-[61px] mt-[30px]' >
            The best DeFi has to offer aggregated <br />
            into a single app, invest into your <br />
            favorite farms with one click</p>
          <div className='flex cta flex-wrap gap-[8px]' >
            <a href="#" className=' btn-1 items-center'>
              <span className='mr-[4px] font-semibold text-[12px] leading-[14.63px]' >Start earning today</span>
              <svg className='ml-[4px] mt-[3px]' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.733398 3.94065L9.0297 3.94065" stroke="currentColor" strokeLinecap="round" />
                <path d="M6.6582 1.3335L9.26643 3.9409L6.6582 6.54831" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#" className='btn-1 items-end'>
              <svg className='mr-[4px]' width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1077 5.4544C13.0112 5.5264 11.3081 6.4496 11.3081 8.5024C11.3081 10.8768 13.4753 11.7168 13.5401 11.7376C13.5301 11.7888 13.1958 12.888 12.3975 14.008C11.6857 14.9936 10.9422 15.9776 9.81123 15.9776C8.68025 15.9776 8.38919 15.3456 7.08358 15.3456C5.81123 15.3456 5.35884 15.9984 4.32432 15.9984C3.28981 15.9984 2.56798 15.0864 1.73805 13.9664C0.776715 12.6512 0 10.608 0 8.6688C0 5.5584 2.10229 3.9088 4.17131 3.9088C5.27069 3.9088 6.18711 4.6032 6.87734 4.6032C7.5343 4.6032 8.55884 3.8672 9.80956 3.8672C10.2836 3.8672 11.9867 3.9088 13.1077 5.4544ZM9.2158 2.5504C9.73306 1.96 10.099 1.1408 10.099 0.3216C10.099 0.208 10.089 0.0928 10.0674 0C9.22578 0.0304 8.22453 0.5392 7.62079 1.2128C7.14678 1.7312 6.70437 2.5504 6.70437 3.3808C6.70437 3.5056 6.72599 3.6304 6.73597 3.6704C6.78919 3.68 6.87568 3.6912 6.96216 3.6912C7.71726 3.6912 8.66694 3.2048 9.2158 2.5504Z" fill="currentColor" />
              </svg>
              <span className='mr-[4px] font-semibold text-[12px] leading-[14.63px]' >Apple App Store</span>
            </a>
            <a href="#" className='btn-1 items-end'>
              <svg className='mr-[4px]' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_348_3911)">
                  <path d="M8.34764 8.22731L0.569676 16.0003C0.309046 15.8554 0.0759678 15.6926 0.0651703 15.3451C0.0506494 14.878 0.0026186 14.4115 0.0020601 13.9448C-0.00153908 9.98825 -0.000422229 6.03172 0.00541094 2.07525C0.00541094 1.61731 0.0273788 1.15918 0.0325914 0.700493C0.0346392 0.537379 0.0906748 0.39916 0.181523 0.270044C0.247612 0.176225 0.279632 0.166379 0.369922 0.234931C0.474784 0.311841 0.5743 0.395758 0.667786 0.486104C1.66178 1.47692 2.6541 2.46979 3.64475 3.46469C5.19153 5.02523 6.73564 6.58825 8.27709 8.15375C8.30389 8.18031 8.32884 8.20725 8.34764 8.22731Z" fill="currentColor" />
                  <path d="M8.69729 7.89857C6.1809 5.25252 3.55728 2.73392 1.0744 0.0789559C1.0539 0.0540158 1.03524 0.0276283 1.01855 0C1.209 0.0172774 10.7202 5.29321 11.0245 5.55032C10.2754 6.34917 9.48701 7.10863 8.69729 7.89857Z" fill="currentColor" />
                  <path d="M1.70703 15.6339C4.02789 13.2864 6.3704 10.9584 8.73457 8.6499C8.75821 8.66551 8.7809 8.68251 8.80252 8.70081C9.36846 9.26087 9.93397 9.82148 10.499 10.3827C10.5423 10.4271 10.5813 10.4753 10.6158 10.5268C10.712 10.665 10.6949 10.7516 10.5512 10.8426C10.4782 10.8893 10.4006 10.9285 10.3244 10.9701C8.99334 11.6959 7.66238 12.4214 6.33155 13.1467C4.84881 13.9563 3.36663 14.7669 1.885 15.5785C1.834 15.6064 1.78131 15.6313 1.72918 15.6577C1.72192 15.6497 1.71448 15.6419 1.70703 15.6339Z" fill="currentColor" />
                  <path d="M9.09668 8.27057C9.1166 8.24828 9.13 8.23156 9.14508 8.2167C9.81403 7.55347 10.4833 6.89086 11.1529 6.22887C11.2674 6.11628 11.3949 6.01652 11.5189 5.91397C11.5846 5.85954 11.6533 5.85638 11.733 5.90115C12.5917 6.38418 13.4541 6.86181 14.3106 7.34911C14.4556 7.43217 14.5873 7.53629 14.7015 7.65806C14.9657 7.94119 14.9011 8.41752 14.5627 8.60553C13.5077 9.19464 12.4458 9.77166 11.385 10.3519C11.2525 10.4241 11.2463 10.4195 11.1404 10.3147C10.4702 9.64812 9.80094 8.98099 9.13261 8.3133C9.12237 8.30141 9.11306 8.28952 9.09668 8.27057Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_348_3911">
                    <rect width="14.8645" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className='mr-[4px] font-semibold text-[12px] leading-[14.63px]' >Google play</span>
            </a>
          </div>
        </div>

        <div className='hero-right max-lg:relative' >
          <img className='hero-image absolute max-lg:relative z-10 top-[30px] right-[80px] max-xl:right-[0] max-sm:w-[80%]' src={heroImage} alt="hero bitcoin" />
          <img className='eth absolute top-[0] right-[340px] max-xl:top-[-40px] max-lg:top-[0] max-lg:right-[500px] max-md:hidden' src={eth} alt="" />
          <img className='btc absolute right-[390px] top-[133px] max-xl:right-[290px]  max-lg:right-[490px] max-lg:top-[133px] max-md:hidden' src={btc} alt="" />
          <img className='ethliq absolute top-[150px] right-[-80px] max-xl:right-[-120px] max-lg:right-[0] max-lg:top-[103px] max-md:hidden ' src={ethLiq} alt="" />
          <img className='bnb absolute bottom-[20px] right-[-110px] max-lg:bottom-[433px] max-lg:right-[33px] max-md:hidden ' src={bnb} alt="BNB" />
          <svg className='absolute bottom-0 left-[450px] z-20 max-lg:bottom-[100%] max-md:hidden' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z" fill="#17E7D6" />
          </svg>
          <svg className='absolute bottom-[-200px] left-[200px] max-lg:bottom-[70%] max-lg:left-[150px] max-md:hidden' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z" fill="#17E7D6" />
          </svg>
          <svg className='absolute bottom-[-230px] right-[100px] max-lg:bottom-[300px] max-md:hidden' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.62 19.24C14.933 19.24 19.24 14.933 19.24 9.62C19.24 4.30702 14.933 0 9.62 0C4.30702 0 0 4.30702 0 9.62C0 14.933 4.30702 19.24 9.62 19.24Z" fill="#17E7D6" />
          </svg>


        </div>
      </div>
      <img className='cloud absolute top-[202px] right-[0] max-md:hidden' src={cloud} alt="cloud" />
    </section>
  )
}

export default Hero