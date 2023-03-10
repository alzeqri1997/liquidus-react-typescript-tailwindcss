import { MouseEvent, useEffect, useRef } from 'react'
import tiersTableImage from '../assets/images/TiersTable.png'
import {gsap} from 'gsap'

type PropTypes = {
  handleClick? : () => void
}

type TiersTablePropTypes = {
  setShowTiersModal: (value: boolean) => void
}

const Close = ({handleClick} : PropTypes) => (
  <svg onClick={handleClick} className='absolute right-[23px] top-[22px] cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1161_5001)">
      <path d="M16.0453 7.95462C15.9444 7.85367 15.8246 7.77362 15.6928 7.71899C15.5609 7.66436 15.4196 7.63624 15.2769 7.63624C15.1341 7.63624 14.9928 7.66436 14.8609 7.71899C14.729 7.77362 14.6093 7.85367 14.5083 7.95462L11.9999 10.463L9.49937 7.95462C9.39809 7.85241 9.27758 7.77128 9.14477 7.71592C9.01197 7.66055 8.86956 7.63205 8.72568 7.63205C8.5818 7.63205 8.43933 7.66055 8.30652 7.71592C8.17372 7.77128 8.0532 7.85241 7.95193 7.95462C7.84973 8.05589 7.7686 8.17641 7.71324 8.30921C7.65787 8.44201 7.62937 8.58448 7.62937 8.72837C7.62937 8.87225 7.65787 9.01469 7.71324 9.14749C7.7686 9.28029 7.84973 9.40081 7.95193 9.50208L10.4604 12L7.95193 14.5005C7.83756 14.5979 7.74472 14.7181 7.67936 14.8533C7.61399 14.9886 7.57754 15.1359 7.57228 15.2861C7.56586 15.4363 7.59068 15.5863 7.64522 15.7265C7.69976 15.8666 7.7828 15.994 7.88909 16.1004C7.99551 16.2067 8.12282 16.2897 8.26299 16.3442C8.40316 16.3988 8.55317 16.4236 8.70344 16.4172C8.85343 16.4113 9.00061 16.3746 9.13576 16.3092C9.27092 16.2439 9.39115 16.1514 9.48895 16.0375L11.9973 13.5396L14.4952 16.0375C14.7041 16.2163 14.9728 16.3097 15.2475 16.299C15.5222 16.2883 15.7828 16.1744 15.9772 15.9799C16.1715 15.786 16.2853 15.5258 16.296 15.2515C16.3067 14.9772 16.2135 14.709 16.0349 14.5005L13.5343 12L16.0349 9.50208C16.1389 9.39946 16.2213 9.27715 16.2775 9.14228C16.3337 9.00741 16.3625 8.86268 16.3622 8.71657C16.3649 8.57083 16.3379 8.42605 16.283 8.29102C16.2281 8.15599 16.1463 8.03353 16.0427 7.93106L16.0453 7.95462Z" fill="#9AA6CF" />
      <path d="M12 21.8189C10.7101 21.8184 9.43298 21.5638 8.24151 21.0696C7.05005 20.5754 5.96762 19.8513 5.05609 18.9387C4.14343 18.0272 3.41932 16.9447 2.92512 15.7533C2.43092 14.5618 2.17633 13.2846 2.17588 11.9947C2.17667 10.7053 2.43141 9.42861 2.9256 8.23761C3.41978 7.04662 4.14375 5.96465 5.05609 5.05344C5.96736 4.14043 7.04973 3.41608 8.24126 2.92186C9.43278 2.42764 10.71 2.17325 12 2.17323C13.2895 2.17359 14.5663 2.42816 15.7574 2.92237C16.9484 3.41658 18.0303 4.14075 18.9413 5.05344C19.854 5.96439 20.5782 7.04634 21.0724 8.23739C21.5666 9.42844 21.8211 10.7052 21.8215 11.9947C21.8215 13.2847 21.5671 14.562 21.0729 15.7535C20.5787 16.945 19.8543 18.0274 18.9413 18.9387C18.0301 19.851 16.9481 20.575 15.7571 21.0691C14.5661 21.5633 13.2894 21.8181 12 21.8189V21.8189ZM12 -3.05176e-05C8.81733 8.67431e-05 5.76498 1.26399 3.51387 3.51384C2.39962 4.62831 1.51579 5.95136 0.912883 7.40742C0.309973 8.86348 -0.000225654 10.424 1.03376e-06 12C-0.000653315 13.576 0.309342 15.1367 0.912276 16.5928C1.51521 18.0489 2.39927 19.3719 3.51387 20.4861C4.62804 21.6009 5.95095 22.4853 7.40703 23.0887C8.86312 23.6921 10.4238 24.0026 12 24.0026C15.1831 24.0021 18.2357 22.7372 20.4862 20.4861C22.7363 18.2352 24.0002 15.1827 24 12C23.9993 8.81745 22.7355 5.76528 20.4862 3.51384C18.2347 1.26448 15.1825 0.000661236 12 -3.05176e-05V-3.05176e-05Z" fill="#9AA6CF" />
    </g>
    <defs>
      <clipPath id="clip0_1161_5001">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)




const TiersTable = ({setShowTiersModal} : TiersTablePropTypes) => {
  const modalContainer = useRef(null);
  const table = useRef(null)



useEffect(() => {
  gsap.set(modalContainer.current,{
    opacity:1,
  });
  gsap.to( table.current,{
    scale:1
  })

}, [])


  function closeModal() {
    gsap.to(modalContainer.current,{
      opacity:0
    });
    gsap.to(table.current , {
      scale:0,
      onComplete: function(){
        setShowTiersModal(false)
      }
    });
  }

  function handleChildElementClick(e: MouseEvent) {
    e.stopPropagation()
  }
    return (
      <div onClick={closeModal} ref={modalContainer} className=' fixed opacity-0 top-0 left-0 grid place-content-center z-[100000] bg-secondary bg-opacity-25 w-screen h-screen px-[20px]   ' >
        <div onClick={(e)=> handleChildElementClick(e)  } ref={table} className=' min-w-[887px] max-lg:min-w-full scale-0 relative bg-white text-center px-[20px] py-[40px] rounded-[20px]' >
          <Close handleClick={closeModal}  />
          <h1 className='text-dark opacity-50 font-semibold text-[42px] leading-[51.2px] mb-[20px]  ' >Premium Tiers Table</h1>
          <img className='mx-auto w-full max-w-[500px] pointer-events-none' src={tiersTableImage} alt="premium tiers table" />
        </div>
      </div>
    )
}

export default TiersTable