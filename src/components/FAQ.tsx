import React, { useState, useRef, useLayoutEffect } from 'react'
import FAQTabs from './FAQTabs';
import { gsap } from 'gsap'

type FAQDataTypes = {
  id: 1 | 2 | 3,
  title: string,
  faqQuestions: Array<{
    question: string,
    answer: string
  }>
}

const faqData: FAQDataTypes[] = [
  {
    id: 1,
    title: 'The Liquidus Token',
    faqQuestions: [
      {
        question: 'What is the purpose of the LIQ token?',
        answer: 'What is the purpose of the LIQ token?The LIQ token allows you to access benefits using the LIQ platform and services. Holding a certain amount of LIQ tokens will give you boosted rates and/or lower transaction fees. LIQ is the native utility token of the Liquidus app and platform. In addition 50% of all transaction fees paid by users using the Liquidus app will be used to buyback and burn LIQ tokens.'
      },
      {
        question: 'Is LIQ an inflationary or deflationary token?',
        answer: 'It is deflationary as most of the fees collected will be used to buyback and burn LIQ tokens.'
      },
      {
        question: 'Are the team and advisor tokens locked?',
        answer: 'Yes, all team, advisor, marketing and development fund tokens are vested for a full year and then gradually unvested over the course of 3 years.'
      },
      {
        question: 'Is the liquidity locked?',
        answer: 'Yes, our initial liquidity that we are providing on a DEX (PancakeSwap) is locked for one year. It is 5% of the total LIQ token supply plus the equivalent amount in BNB..'
      },
    ]
  },
  {
    id: 2,
    title: 'Our Company and Values',
    faqQuestions: [
      {
        question: 'What is Liquidus?',
        answer: 'Liquidus is a development stage startup working on a blockchain SAAS that allows mobile friendly and easy navigation of DeFi markets. Liquidus is incorporated and licensed in the UAE, Dubai.'
      },
      {
        question: 'Why is the app and the tokens restricted in certain locations?',
        answer: 'Regulations on the use of digital assets are still in the early stages in a lot of countries. Based on the recommendation from our legal team we are forced to exclude certain jurisdictions. We are evaluating excluded jurisdictions regularly for changes and updates. To be extra safe get informed about how your jurisdiction handles the use and possession of digital assets and their taxability.'
      },
      {
        question: 'I am a token- or stakeholder where can I get updates?',
        answer: 'As a stakeholder of any kind, we advise you to follow all our community channels, including Telegram and, most notably, our Discord. For further information, check out our Medium and Youtube channels. Additionally, we host regular AMAs and have a bi-weekly stakeholder update letter.'
      },
      {
        question: 'Why will the Liquidus wallet ask me for basic personal information.',
        answer: 'Liquidus aims to make the DeFi space accessible to a broad audience. We are in close contact with regulators all over the world. With regulations to avoid total anonymity being implemented by 2023, Liquidus wants to be prepared to shine as a compliant platform, not sacrificing growth. Remember, we build for a big audience; simplicity is our key objective.'
      },
      {
        question: 'How safe are my assets with Liquidus?',
        answer: 'Although there is never a 100% guarantee for something to be failure proof, we only work with approved decentralized protocols. This implies that your funds will always be accessible and held in a trustless manner. In addition to vetting our partners and providing a transparent security rating, we are looking to implement a security fund to cover the unlikely event of a failure.'
      },
    ]
  },
  {
    id: 3,
    title: 'The Liquidus App',
    faqQuestions: [
      {
        question: 'What is the Liquidus app?',
        answer: 'The Liquidus app has the goal of making the DeFi space accessible to a mainstream audience. Use your coins to add them to a liquidity pool & farm with one click and start earning the highest interest rates possible. Refer to our Litepaper for more information.'
      },
      {
        question: 'What technologies does the Liquidus app support?',
        answer: 'The Liquidus app will be deployed as a web-app to work on any browser, as well as a native iOS and Android app.'
      },
      {
        question: 'Can I use an existing wallet to connect to the Liquidus app?',
        answer: 'Yes, you can import your existing wallet or create a new wallet with our app.'
      },
      {
        question: 'When will the Liquidus app be released?',
        answer: 'We are currently working hard to release the Liquidus app as soon as possible. However, as complex developments take time, the best you can do is to follow our announcement channel on Telegram or Twitter to be among the first to know about it. We are aiming to release a alpha version in September 2022.'
      },
    ]
  },
]

const FAQ = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const faqTabsRef = useRef<HTMLDivElement>(null)
  const faqContainerRef = useRef<HTMLDivElement>(null)

  function changeTab(id: number) {
    gsap.to(faqTabsRef.current, {
      opacity: 0,
      duration: .2,
      onComplete: function () {
        setCurrentTab(id);
      }
    });
  };

  useLayoutEffect(() => {
    gsap.to(faqTabsRef.current, {
      opacity: 1,
      duration: .2,
    });
  }, [currentTab])
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: 'top center',
        },
      }).fromTo(faqContainerRef.current, {
        opacity: 0,
        y:100,
      }, {
        y:0,
        opacity: 1,
        duration: 1,
        // duration: .2,
      });
     }, faqContainerRef)
     return ()=> ctx.revert()
  }, [])



  return (
    <section ref={faqContainerRef} className='container pb-[180px]' >
      <div className='faq-heading flex px-[117px] mb-[63px]' >
        <div className=' w-2/3 ml-auto max-md:w-full' >
          <h1 className=' font-bold text-[60px] max-lg:text-[40px] leading-[73.14px mb-[20px]'>Still not sure?</h1>
          <p className=' font-normal text-[20px] leading-[24px]'>All your questions about Liquidus answered.</p>
        </div>
      </div>
      <div className='w-full flex max-md:flex-col max-md:gap-[20px] px-[117px] max-md:px-0' >
        <div className=' w-1/3 max-md:w-full' >
          {faqData.map((data) => (
            <button onClick={() => changeTab(data.id)} key={data.id} className={`px-[26.7px] py-[15px] border-l-2 max-md:flex max-md:flex-col ${currentTab === data.id ? ' border-primary ' : ' border-white'}`}>
              <span className='' >{data.title}</span>
            </button>
          ))}
        </div>
        {faqData.map((data) => {
          if (currentTab === data.id) return (
            <div ref={faqTabsRef} key={data.id} className=' w-2/3 opacity-0 max-md:w-full' >
              <FAQTabs tabs={data.faqQuestions} />
            </div>)
        })}
      </div>
      <div className='px-[117px] max-md:px-0' >
        <div className=' w-2/3 ml-auto max-md:w-full' >
          <a className='flex justify-between items-center text-[#9AA6CF] font-semibold text-[12px] leading-[14px] p-[8px] border rounded-[4px]' href="#">
            <span>Read more documentation</span>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.733398 3.94065L9.0297 3.94065" stroke="#9AA6CF" strokeLinecap="round" />
              <path d="M6.6582 1.3335L9.26643 3.9409L6.6582 6.54831" stroke="#9AA6CF" strokeLinecap="round" />
            </svg>

          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ