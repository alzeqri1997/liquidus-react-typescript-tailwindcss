/** @format */

import FeatureIcon from "./icons/FeatureIcon"


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
			stroke="#9AA6CF"
			strokeLinecap="round"
		/>
		<path
			d="M9.6582 5.33325L12.2664 7.94066L9.6582 10.5481"
			stroke="#9AA6CF"
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
	return (
		<section className="container pt-[179px]">
			<div className="pb-[197px]">
				<h1 className="text-[60px] font-medium leading-[73.14px]">
					Earn up to <strong>100% APY,</strong>
				</h1>
				<h1 className="text-[60px] font-medium leading-[73.14px] text-end ">
					hassle-free with <strong>one click.</strong>
				</h1>
			</div>

			{FeaturesData.map((data, index) => (
				<div key={index} className={`flex items-center gap-[81px] relative ${ FeaturesData.length >index +1 ? 'mb-[180px]' : '' } ${index % 2 ===1 ? 'flex-row-reverse' : ""}  `}>
				<div className="max-w-[556px]" >
					<h1 className=" font-bold text-[40px] leading-[48.76px] " >
						{data.heading}
					</h1>
					<p className=" text-[24px] opacity-50 leading-[30px] py-[24px] " >
						{data.content}
					</p>
					<a href={data.href.link} className="inline-flex text-[#9AA6CF] items-center  p-[8px] border rounded border-[#9AA6CF] " >
						<span className="mr-[4px]" > {data.href.title} </span>
						<Arrow />
					</a>
        </div>
				<FeatureIcon icon={index +1 } />
			</div>
			))}
			<div className="pb-[71px] pt-[224px] ">
				<h1 className="text-[60px] font-medium leading-[73.14px]">
					Earn up to <strong>100% APY,</strong>
				</h1>
				<h1 className="text-[60px] font-medium leading-[73.14px] text-end ">
					hassle-free with <strong>one click.</strong>
				</h1>
			</div>
		</section>
	)
}

export default Features
