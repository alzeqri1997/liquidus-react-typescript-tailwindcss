import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import './App.css'
import BigText from './components/BigText'
import Clients from './components/Clients'
import Header from './components/Header'
import Hero from './components/Hero'
import { gsap } from 'gsap'
import MobileView from './components/MobileView'
import Clouds from './components/Clouds'
import Features from './components/Features'
import Advantages from './components/Advantages'
import Clients2 from './components/Clients2'
import SecurityRating from './components/SecurityRating'
import Tiers from './components/Tiers'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Clouds2 from './components/Clouds2'
import Cards from './components/Cards'
import Offers from './components/Offers'
import FAQ from './components/FAQ'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'
import { PriceService } from './api/PriceService'
function App() {

  const app = useRef<HTMLDivElement>(null);
  const [liqPrice, setLiqPrice] = useState<number>(0);
  const [maxApy, setMaxApy] = useState<number>(0)
  const [totalFarmValue, setTotalFarmValue] = useState<string>('0')

  const priceService = new PriceService()

  gsap.registerPlugin(ScrollTrigger);

  const retrieveLiqPrice = async () => {
    const response = await priceService.getLiqPrice('liq-price');
    setLiqPrice(response.data.toFixed(2) )
  }

  const retrieveMaxApy = async () => {
    const response = await priceService.getLiqPrice('max-apy');
    setMaxApy(Math.floor(response.data))
  }

  const retrieveTotalFarmValue = async () => {
    const response = await priceService.getLiqPrice('total-locked');
    setTotalFarmValue(Math.floor(response.data).toLocaleString("en-US"))
  }

  useEffect(() => {
    const retrieve = async () => {
      await Promise.all([retrieveLiqPrice(), retrieveMaxApy(), retrieveTotalFarmValue()])
    }
    retrieve()
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { duration: 1 } })
        .fromTo('.header-upper', {
          opacity: 0,
          x: 100,
        }, {
          opacity: 1,
          x: 0,
          stagger: .3
        })
        .fromTo('.header-right a', {
          opacity: 0,
          x: 100,
        }, {
          opacity: 50,
          x: 0,
          stagger: .3,
          delay: .6,
        }, "<")
        .fromTo('.header-left img', {
          opacity: 0,
          x: -100,
        }, {
          duration: .7,
          opacity: 1,
          x: 0,
        }, "-=1")
        .fromTo('.header-left ul li', {
          opacity: 0,
        }, {
          opacity: 1,
          stagger: .1
        }, "-=.5")
        .fromTo('.hero-left', {
          opacity: 0,
          x: -50,
        }, {
          opacity: 1,
          x: 0,
        }, "-=1.5")
        .fromTo('.hero-left .cta a', {
          opacity: 0,
        }, {
          opacity: 1,
          stagger: .4
        }, "-=1.5")
        .fromTo('.hero-right .hero-image', {
          opacity: 0,
        }, {
          opacity: 1,
        }, "-=1.5")
        .fromTo('.hero-right .eth', {
          opacity: 0,
          rotate: 100,
          x: 100
        }, {
          opacity: 1,
          rotate: 0,
          delay: 0.5,
          x: 0
        }, "<")
        .fromTo('.hero-right .btc', {
          opacity: 0,
          rotate: 100,
          x: 130
        }, {
          opacity: 1,
          rotate: 0,
          x: 0
        }, "<")
        .fromTo('.hero-right .ethliq', {
          opacity: 0,
          x: -180
        }, {
          opacity: 1,
          x: 0
        }, "<")
        .fromTo('.hero-right .bnb', {
          opacity: 0,
          x: -230
        }, {
          opacity: 1,
          x: 0
        }, "<")
        .fromTo('.hero-right svg', {
          opacity: 0,
          x: -100,
          y: -100
        }, {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.4
        }, "<")
        .fromTo('.cloud', {
          opacity: 0,
          x: 100
        }, {
          opacity: 1,
          x: 0
        }, "<")
    }, app)

    return () => ctx.revert()
  }, [])


  return (
    <div ref={app} className="App">
      <Header liqPrice={liqPrice} />
      <Hero />
      <Clients />
      <BigText text='Crypto earning unlike any app you have used before' />
      <MobileView />
      <Clouds />
      <div className='bg-white text-dark mb-[329px]' >
        <Features />
        <Advantages />
        <Clients2 />
        <SecurityRating />
        <Tiers />
        <Clouds2 />
      </div>
      <BigText text='Greek Gods might be a myth...' />
      <Cards />
      <div className='bg-white text-dark' >
        <Offers maxApy={maxApy} totalFarmValue={totalFarmValue} />
        <FAQ />
        <DownloadApp />
      </div>
      <Footer />
    </div>
  )
}

export default App
