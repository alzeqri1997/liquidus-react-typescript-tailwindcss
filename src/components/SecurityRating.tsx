import { MouseEventHandler, useState, useRef, useEffect, TouchEventHandler, ReactNode, TouchEvent, useLayoutEffect } from "react"
import {gsap} from 'gsap'



// types
type ClassNamesProp = {
  classNames?: string,
  onMouseDown?: MouseEventHandler,
  onTouchMove?: TouchEventHandler<SVGSVGElement>,
  children?: ReactNode
}

enum RiskRate {
  TooRisky = 'Too Risky',
  LowRisk = "Low Risk"
}




const RightNode = ({ classNames = "" }: ClassNamesProp): JSX.Element => (
  <svg className={classNames} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
      <circle opacity="0.2" cx="13" cy="13" r="12" fill="white" />
      <circle cx="13" cy="13" r="12" stroke="white" strokeLinecap="round" strokeDasharray="4 4" />
      <circle opacity="0.65" cx="13" cy="12.9997" r="6.85714" fill="#292C33" />
    </g>
  </svg>
)

const LeftNode = ({ classNames = "" }: ClassNamesProp): JSX.Element => (
  <svg className={classNames} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7">
      <circle opacity="0.2" cx="12" cy="12" r="12" fill="white" />
      <circle opacity="0.65" cx="11.9997" cy="12" r="6.85714" fill="white" />
    </g>
  </svg>
)

const Divider = ({ classNames = "", onMouseDown, onTouchMove }: ClassNamesProp): JSX.Element => (
  <svg style={{touchAction: 'none'}} onTouchMove={onTouchMove} onMouseDown={onMouseDown} className={classNames} width="14" height="100" viewBox="0 0 14 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 0L1 100" stroke="white" />
    <path d="M8 39L8 61" stroke="white" />
    <path d="M13 46L13 55" stroke="white" />
  </svg>
)
const PullAlongToolTip = (): JSX.Element => (
  <div style={{ bottom: `calc(100% + 10px)`, left: '15%'}}  className="flex absolute gap-[4px] items-center p-[8px] bg-[#323644] w-fit rounded-[4px]" >
    <span className="text-white font-semibold leading-[14.63px]  " >Pull this along</span>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.7334 7.94071L12.0297 7.94071" stroke="#B0B3BE" strokeDasharray="round" />
      <path d="M9.6582 5.33331L12.2664 7.94072L9.6582 10.5481" stroke="#B0B3BE" strokeDasharray="round" />
    </svg>

  </div>
)
const Explanation = ({ classNames = '', children }: ClassNamesProp): JSX.Element => (
  <div className={" w-fit text-center absolute top-0  " + classNames} >
    <svg className="text-dark mx-auto" width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0.000488281V24.0005" stroke="currentColor" />
    </svg>
    <span className="text-center text-dark" >
      {children}
    </span>
  </div>
)


const SecurityRating = () => {

  const securityRatingContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration:.7
        },
        scrollTrigger: {
          trigger: securityRatingContainerRef.current,
          start: 'top 60%',
        }
      })
        .fromTo(securityRatingContainerRef.current, {
          opacity: 0
        }, {
          opacity: 1,
        }).fromTo('.heading', {
          opacity: 0,
          y:100,
        }, {
          opacity: 1,
          y:0
        },"-=.5").fromTo('.slider-container ', {
          opacity: 0,
          y:50,
        }, {
          opacity: 1,
          y:0
        },"<+=.2").fromTo('.explanation', {
          opacity: 0,
          y:30,
        }, {
          opacity: 1,
          y:0
        },"<+=.1")
    }, securityRatingContainerRef)

    return () => ctx.revert()
  }, [])

  const [elementRevealFraq, setElementRevealFraq] = useState<number>(0.22)
  const [riskRate, setRiskRate] = useState<RiskRate>(RiskRate.TooRisky)
  const [showToolTip, setShowToolTip] = useState<boolean>(true)

  const sliderContainer = useRef<HTMLDivElement>(null);

  const slide = (xPosition: (number)): void => {
    const containerBoundingRect = sliderContainer.current?.getBoundingClientRect();
    setElementRevealFraq(() => {
      if (containerBoundingRect) {
        if (xPosition < containerBoundingRect.left) return 0;
        else if (xPosition > containerBoundingRect.right) return 1;
        else {
          return (
            (xPosition - containerBoundingRect?.left) / containerBoundingRect?.width
          )
        }
      }
      return 0
    })
  }

  const handleMouseDown = (): void => {
    setShowToolTip(false)
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }



  const handleMouseMove = (e: MouseEvent): void => {
    slide(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent): void => {
    setShowToolTip(false)
    slide(e.touches.item(0)?.clientX)
  }

  const handleMouseUp = (): void => {
    window.onmousemove = null;
    window.onmouseup = null
  }


  useEffect(() => {
    if (elementRevealFraq >= 0.7) setRiskRate(RiskRate.LowRisk)
    else setRiskRate(RiskRate.TooRisky)
  }, [elementRevealFraq])

  return (
    <section ref={securityRatingContainerRef} className='container' >
      <div className='w-full bg-[#E9FEFD] px-[54px] max-sm:px-[20px]  max-md:pb-[60px]' >
        <div className="heading pb-[70px] pt-[69px]" >
          <h1 className=' font-semibold text-[42px] max-md:text-[30px] leading-[42px] text-center text-dark opacity-50 ' >Check out our advanced  </h1>
          <h1 className=' font-semibold text-[42px] max-md:text-[30px] leading-[42px] text-center text-dark ' >Security rating system </h1>
        </div>
        <div ref={sliderContainer} className="slider-container w-full relative pb-[11px]" >
          <div className="first-slider-container" >
            <div className="flex left-slider items-center relative bg-[#292C33]  h-[100px] rounded-[12px] px-[24px]" >
              {/* Relying on other projects */}
              <RightNode classNames="absolute left-[14%]" />
              {/* Audits */}
              <RightNode classNames="absolute left-[33%]" />
              {/* Smart Contacts */}
              <RightNode classNames="absolute left-[45%]" />
              <svg className="absolute top-0 left-[49%]" width="2" height="101" viewBox="0 0 2 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 0L1 100.001" stroke="white" strokeDasharray="8 8" />
              </svg>
              <svg className="absolute top-0 left-[58%]" width="2" height="101" viewBox="0 0 2 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 0L1 100.001" stroke="white" strokeDasharray="8 8" />
              </svg>
              {/* Reward Token Market Cap */}
              <RightNode classNames="absolute left-[61%]" />
              <svg className="absolute top-0 left-[67%]" width="2" height="101" viewBox="0 0 2 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 0L1 100.001" stroke="white" strokeDasharray="8 8" />
              </svg>
              {/* Total Value Locked */}
              <RightNode classNames="absolute left-[75%]" />
              <svg className="absolute top-0 left-[87%]" width="2" height="101" viewBox="0 0 2 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 0L1 100.001" stroke="white" strokeDasharray="8 8" />
              </svg>
              {/* Previous Exploits */}
              <RightNode classNames="absolute left-[85%]" />
              <svg className="absolute top-0 left-[94%]" width="2" height="101" viewBox="0 0 2 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M1 0L1 100.001" stroke="white" strokeDasharray="8 8" />
              </svg>
              {/* Project Age */}
              <RightNode classNames="absolute left-[95%]" />
            </div>
          </div>
          <div
            style={{
              clipPath: `polygon(0 0, ${elementRevealFraq * 100}% 0, ${elementRevealFraq * 100}% 100%, 0 100%)`
            }}
            className="second-slider-container" >
            <div
              style={{
                backgroundColor: `rgba(23, 231, 214, ${elementRevealFraq})`
              }}
              className="flex items-center relative h-[100px] rounded-[12px] px-[24px]" >
              {/* Relying on other projects */}
              <LeftNode classNames="absolute left-[14%]" />
              {/* Audits */}
              <LeftNode classNames="absolute left-[33%]" />
              {/* Smart Contacts */}
              <LeftNode classNames="absolute left-[45%]" />
              {/* Reward Token Market Cap */}
              <LeftNode classNames="absolute left-[61%]" />
              {/* Total Value Locked */}
              <LeftNode classNames="absolute left-[75%]" />
              {/* Previous Exploits */}
              <LeftNode classNames="absolute left-[85%]" />
              {/* Project Age */}
              <LeftNode classNames="absolute left-[95%]" />
            </div>
          </div>
          <div
            style={{ left: `${elementRevealFraq * 100}%` }}
            className="absolute inset-0" >
            <Divider classNames="cursor-pointer relative z-50 "
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
            />
          </div>
          <div className="absolute left-[20px] flex flex-col items-center top-[24px] text-white select-none" >
            <span className=" font-semibold text-[24px] leading-[29.26px] " >{Math.floor(elementRevealFraq * 100)}%</span>
            <span className="leading-[20px] ">{riskRate}</span>
          </div>
          {showToolTip &&<PullAlongToolTip />}
        </div>
        <div className="explanation w-full h-[100px] relative max-md:hidden" >
          <Explanation classNames="left-[9%]" >
            Relying on <br /> other projects
          </Explanation>
          <Explanation classNames="left-[31.5%]" >
            Audits
          </Explanation>
          <Explanation classNames="left-[42.5%]" >
            Smart <br />Contracts
          </Explanation>
          <Explanation classNames="left-[56.5%]" >
            Reward Token <br />Market Cap
          </Explanation>
          <Explanation classNames="left-[71.5%]" >
            Total Value <br />Locked
          </Explanation>
          <Explanation classNames="left-[82.5%]" >
            Previous <br />Exposits
          </Explanation>
          <Explanation classNames="left-[93%]" >
            Project <br />Exposits
          </Explanation>
        </div>
      </div>
    </section>
  )
}

export default SecurityRating