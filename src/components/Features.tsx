import { useRef, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import FeatureIcon from "./icons/FeatureIcon";
import ScrollTrigger from "gsap/dist/ScrollTrigger";



const Arrow = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3.7334 7.94065L12.0297 7.94065"
			stroke="currentColor"
			strokeLinecap="round"
		/>
		<path
			d="M9.6582 5.33325L12.2664 7.94066L9.6582 10.5481"
			stroke="currentColor"
			strokeLinecap="round"
		/>
	</svg>
)

// types

type FeatureDataType = {
	heading: string,
	content: string,
	href: {
		link: string,
		title: string
	}
}


const Features = () => {
	const FeaturesData: FeatureDataType[] = [
		{
			heading: 'Smart token & farm scanning',
			content: 'Deposit your tokens, and Liquidus will suggest yield farming options based on your assets to maximise daily returns.',
			href: {
				link: '#',
				title:'Scan your tokens now'
			}
		},

		{
			heading: 'Expert DeFi pools suggested for you',
			content: 'Liquidus works tirelessly to make sure that we show you the best farms based off your current holdings while showing you the best and safest APY returns.',
			href: {
				link: '#',
				title:'See how it works'
			}
		},
		{
			heading: 'No DeFi experience needed to benefit',
			content: 'Liquidus is built for anyone wanting to earn passive income in the simplest way, using suggestions and smart scanning to find you the safest and most profitable options.',
			href: {
				link: '#',
				title:'Download today'
			}
		},
	]

	const featuresContainerRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
    const ctx = gsap.context(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: '.heading-container',
					start:'top center'
				}
			}).fromTo('.heading-1', {
				opacity: 0,
				x:-100
			}, {
				opacity: 1,
				x:0
			}).fromTo('.heading-2', {
				opacity: 0,
				x:100
			}, {
				opacity: 1,
				x:0
			},"-=.3")
			const featureContainer: Array<HTMLDivElement> = gsap.utils.toArray('.feature-container')
	
			featureContainer.forEach((feature) => {
				
				gsap.timeline({
					defaults: {
						duration:.7
					},
					scrollTrigger:{
						trigger:feature,
						start: 'top center',
					}
				}).fromTo(feature.querySelector('.feature-heading'),{
					opacity: 0,
					x:-100
				},{
					opacity: 1,
					x:0
				}).fromTo(feature.querySelector('.feature-body'),{
					opacity: 0,
					x:-100
				},{
					opacity: 1,
					x:0
				},"-=.6").fromTo(feature.querySelector('.feature-btn'),{
					opacity: 0,
					x:-100
				},{
					opacity: 1,
					x:0
				},"-=.5").fromTo(feature.querySelector('.feature-icon'),{
					opacity: 0,
				},{
					opacity: 1,
				},"<").fromTo(feature.querySelectorAll('.feature-icon img'),{
					opacity: 0,
					y:"random([50,100,150])"
				},{
					opacity: 1,
					y:0,
					stagger:.1
				},"-=1").fromTo(feature.querySelectorAll('.feature-icon svg path'),{
					scale: 0,
				},{
					scale: 1,  
					stagger: .1,
				},"<")
			})


			gsap.timeline({
				defaults: {
					duration:.7
				},
				scrollTrigger: {
					trigger: '.heading1',
					start: 'top 70%',
				}
			}).fromTo('.heading1', {
				opacity: 0,
				x:-100
			}, {
				opacity: 1,
				x:0
			}).fromTo('.heading2', {
				opacity: 0,
				x:100
			}, {
				opacity: 1,
				x:0
			},"-=.5")
		}, featuresContainerRef)
		




    return () => ctx.revert()

  }, [])
	return (
		<section ref={featuresContainerRef} className="container pt-[179px]">
			<div className="heading-container pb-[197px]">
				<h1 className="heading-1 text-[60px] font-medium leading-[73.14px] max-lg:text-center">
				We take your  <strong>Security</strong>
				</h1>
				<h1 className="heading-2 text-[60px] font-medium leading-[73.14px] text-end max-lg:text-center">
				very seriously at  <strong>Liquidus</strong>
				</h1>
			</div>

			{FeaturesData.map((data, index) => (
				<div key={index} className={`feature-container flex max-lg:flex-col-reverse items-center gap-[81px] relative ${ FeaturesData.length >index +1 ? 'mb-[180px]' : '' } ${index % 2 ===1 ? 'flex-row-reverse' : ""}  `}>
				<div className=" w-[50%]" >
					<h1 className="feature-heading font-bold text-[40px] leading-[48.76px] " >
						{data.heading}
					</h1>
					<p className="feature-body text-[24px] opacity-50 leading-[30px] py-[24px] " >
						{data.content}
					</p>
					<a href={data.href.link} className="feature-btn btn-2" >
						<span className="mr-[4px]" > {data.href.title} </span>
						<Arrow />
					</a>
        </div>
				<FeatureIcon icon={index +1 } />
			</div>
			))}
			<div className="pb-[71px] pt-[224px] ">
				<h1 className="heading1 text-[60px] font-medium leading-[73.14px] max-lg:text-center">
					Earn up to <strong>100% APY,</strong>
				</h1>
				<h1 className="heading2 text-[60px] font-medium leading-[73.14px] text-end max-lg:text-center ">
					hassle-free with <strong>one click.</strong>
				</h1>
			</div>
		</section>
	)
}

export default Features
