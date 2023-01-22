
type ClassNamesProp = {
  classNames?: string
}


const RightNode = ({ classNames }: ClassNamesProp) => (
  <svg className={classNames} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
      <circle opacity="0.2" cx="13" cy="13" r="12" fill="white" />
      <circle cx="13" cy="13" r="12" stroke="white" strokeLinecap="round" strokeDasharray="4 4" />
      <circle opacity="0.65" cx="13" cy="12.9997" r="6.85714" fill="#292C33" />
    </g>
  </svg>
)

const HorizontalRightDivider = ({ classNames }: ClassNamesProp) => (
  <svg className={classNames} width="2" height="100" viewBox="0 0 2 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.1" d="M1 0L1 100.001" stroke="white" strokeDasharray="8 8" />
  </svg>

)
const SecurityRating = () => {
  return (
    <section className='container' >
      <div className='w-full bg-[#E9FEFD] px-[54px]' >
        <div className="pb-[70px] pt-[69px]" >
          <h1 className=' font-semibold text-[42px] leading-[42px] text-center text-dark opacity-50 ' >Check out our advanced  </h1>
          <h1 className=' font-semibold text-[42px] leading-[42px] text-center text-dark ' >Security rating system </h1>
        </div>
        <div className="right-slider items-center relative bg-[#292C33] flex h-[100px] rounded-[12px] px-[24px]" >

          {/* Relying on other projects */}
          <RightNode classNames="absolute left-[25%]" />

          {/* Audits */}
          <RightNode classNames="absolute left-[40%]" />

          {/* Smart Contacts */}
          <RightNode classNames="absolute left-[50%]"/>


          {/* Reward Token Market Cap */}
          <RightNode classNames="absolute left-[60%]" />

          {/* Total Value Locked */}
          <RightNode classNames="absolute left-[70%]" />

          {/* Previous Exploits */}
          <RightNode classNames="absolute left-[80%]"/>

          {/* Project Age */}
          <RightNode classNames="absolute left-[90%]"/>

        </div>
      </div>
    </section>
  )
}

export default SecurityRating