/** @format */

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

// PropTypes

type PropTypes = {
	heading: string
	body: string
	link?: boolean,
  componentClass?: string
}

const AdvantageCard = ({ heading, body, link = true, componentClass = " " }: PropTypes) => {
	return (
		<div className={`${componentClass} max-w-[410px] py-[30px] pl-[26px] pr-[57px] box-shadow shadow-box-shadow rounded-[30px]`}>
			<svg
				width="100"
				height="90"
				viewBox="0 0 100 90"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.2"
					d="M98.3989 32.914L55.4423 54.2852C53.7464 55.1296 51.8776 55.5692 49.9831 55.5692C48.0886 55.5692 46.2199 55.1296 44.524 54.2852L1.56738 32.914C2.51559 31.423 3.85403 30.2201 5.43746 29.4358L44.524 9.95687C46.2199 9.11239 48.0886 8.67285 49.9831 8.67285C51.8776 8.67285 53.7464 9.11239 55.4423 9.95687L94.5288 29.4114C96.1143 30.2039 97.4526 31.4152 98.3989 32.914Z"
					fill="#17C6B5"
				/>
				<path
					d="M22.8289 0H74.5238C77.1223 0 79.6144 1.03225 81.4518 2.86967C83.2892 4.70708 84.3215 7.19916 84.3215 9.79766V63.6297H13.0312V9.79766C13.0312 7.19916 14.0635 4.70708 15.9009 2.86967C17.7383 1.03225 20.2304 0 22.8289 0Z"
					fill="url(#paint0_linear_766_4172)"
				/>
				<path
					opacity="0.4"
					d="M42.4549 10.9917H21.2491C20.5727 10.9917 20.0244 11.54 20.0244 12.2164V18.095C20.0244 18.7714 20.5727 19.3197 21.2491 19.3197H42.4549C43.1313 19.3197 43.6796 18.7714 43.6796 18.095V12.2164C43.6796 11.54 43.1313 10.9917 42.4549 10.9917Z"
					fill="white"
				/>
				<path
					opacity="0.4"
					d="M69.423 23.8083H21.2491C20.5727 23.8083 20.0244 24.3567 20.0244 25.0331V30.9117C20.0244 31.588 20.5727 32.1364 21.2491 32.1364H69.423C70.0994 32.1364 70.6477 31.588 70.6477 30.9117V25.0331C70.6477 24.3567 70.0994 23.8083 69.423 23.8083Z"
					fill="white"
				/>
				<path
					opacity="0.4"
					d="M59.2395 36.6249H21.2491C20.5727 36.6249 20.0244 37.1732 20.0244 37.8496V43.7282C20.0244 44.4046 20.5727 44.9529 21.2491 44.9529H59.2395C59.9159 44.9529 60.4642 44.4046 60.4642 43.7282V37.8496C60.4642 37.1732 59.9159 36.6249 59.2395 36.6249Z"
					fill="white"
				/>
				<path
					opacity="0.4"
					d="M52.92 49.4353H21.2491C20.5727 49.4353 20.0244 49.9836 20.0244 50.66V56.5386C20.0244 57.215 20.5727 57.7633 21.2491 57.7633H52.92C53.5964 57.7633 54.1448 57.215 54.1448 56.5386V50.66C54.1448 49.9836 53.5964 49.4353 52.92 49.4353Z"
					fill="white"
				/>
				<path
					d="M99.9606 38.2048V72.068C99.9606 76.6153 98.1542 80.9765 94.9387 84.1919C91.7232 87.4074 87.3621 89.2139 82.8147 89.2139H17.1459C12.5985 89.2139 8.2374 87.4074 5.02192 84.1919C1.80644 80.9765 1.43373e-05 76.6153 1.43373e-05 72.068V38.2048C-0.00321537 36.3272 0.539275 34.489 1.56151 32.9141L44.5181 54.2852C46.214 55.1297 48.0827 55.5692 49.9772 55.5692C51.8718 55.5692 53.7405 55.1297 55.4364 54.2852L98.393 32.9141C99.4174 34.4884 99.962 36.3265 99.9606 38.2048Z"
					fill="#17E7D6"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_766_4172"
						x1="48.6764"
						y1="-2.9148"
						x2="48.6764"
						y2="69.5266"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#17E7D6" />
						<stop
							offset="1"
							stop-color="#17E7D6"
							stop-opacity="0"
						/>
					</linearGradient>
				</defs>
			</svg>
			<div className="flex items-center mt-[24px]">
				<svg
					className="mr-[8px]"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="10" cy="10" r="10" fill="#040618" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.6252 11.9968L6.31517 9.88322L5 11.3201L8.68484 14.6918L15 8.37668L13.6233 7L8.6252 11.9968Z"
						fill="white"
					/>
				</svg>
				<h4 className=" font-medium text-[19px] leading-[30px] ">
					{heading}
				</h4>
			</div>
			<p className="font-medium text-[19px] leading-[30px] opacity-50 mt-[4px] mb-[20px]">
				{body}
			</p>
			{link &&<a href="#" className="btn-2 ">
				<span className="mr-[4px]"> Read more </span>
				<Arrow />
			</a>}
		</div>
	)
}

export default AdvantageCard
