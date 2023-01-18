import React from 'react'
import directMessage from '../assets/icons/Direct-message.png'
import twitter from '../assets/icons/twitter.png'
import medium from '../assets/icons/Medium.png'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='container mt-[28px] mb-[85px]' >
      <div className='w-full' >
        <div className='flex justify-end items-center ' >
          <div className='header-upper flex gap-[16px]' >
            <a href="#"> <img src={directMessage} alt="" /> </a>
            <a href="#"> <img src={twitter} alt="" /> </a>
            <a href="#"> <img src={medium} alt="" /> </a>
          </div>
          <div className='header-upper ml-[30px]' >
            <a className=' opacity-50 mr-[30px]' href="#">CoinGecko</a>
            <a className=' opacity-50' href="#">CMC</a>
          </div>
        </div>

      </div>
      <div className='header flex justify-between mt-[21px]'>
        <div className='header-left flex items-center' >
          <a href="#"><img src={logo} alt="logo" /></a>
          <ul className='flex ml-[30px]' >
            <li className='text-[14px] font-medium leading-[17px]'><a href="#">Farm</a></li>
            <li className='text-[14px] font-medium ml-[30px] leading-[17px]'><a href="#">Scan</a></li>
            <li className='text-[14px] font-medium ml-[30px] leading-[17px]'><a href="#">Features</a></li>
            <li className='text-[14px] font-medium ml-[30px] leading-[17px]'><a href="#">Litepaper</a></li>
            <li className='text-[14px] font-medium ml-[30px] leading-[17px]'><a href="#">Company</a></li>
          </ul>
        </div>

        <div className='header-right' >
          <a className=' inline-block  py-[12px] px-[16px] font-medium text-[12px] rounded-[4px] text-[#040618] bg-primary'  href="#">Farm</a>

          <a className=' inline-block py-[12px] px-[16px] font-medium text-[12px] rounded-[4px] text-[#040618] bg-[#ffff] ml-[8px]' href="#">LIQ $1.32</a>
        </div>
      </div>
    </header>
  )
}

export default Header