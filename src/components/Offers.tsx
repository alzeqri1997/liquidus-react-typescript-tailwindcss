import liqBnb from '../assets/icons/offers/liq-bnb.png';
import liqBusd from '../assets/icons/offers/liq-busd.png';
import liqCro from '../assets/icons/offers/liq-cro.png'
import liq from '../assets/icons/offers/liq.png';
import nftCollections from '../assets/images/offers/nft-collections.png'
import tiger from '../assets/icons/offers/tiger.png'
import bnb from '../assets/icons/offers/bnb.png'
import instagram from '../assets/icons/social-media/instagram.png'
import telegram from '../assets/icons/social-media/telegram.png'
import twitter from '../assets/icons/social-media/twitter.png'

type OffersDataType = {
  image: string,
  text: string
}

const offersData: OffersDataType[] = [
  { image: liqBnb, text: 'liq-bnb' },
  { image: liqBusd, text: 'liq-busd' },
  { image: liqCro, text: 'liq-cro' },
  { image: liq, text: 'liq' },
]


const Offers = () => {
  return (
    <section className='container pt-[157px] pb-[95px]  ' >
      <div className="bg-[#E9FEFD] py-[55px] px-[99px] rounded-[32px]" >
        <div className="heading-container pb-[78px]">
          <h1 className="text-[60px] font-medium leading-[73.14px]">
            See more of what
          </h1>
          <h1 className="text-[60px] font-medium leading-[73.14px] text-end ">
            <strong>Liquidus</strong> has to offer
          </h1>
        </div>

        {/* Our Farms */}
        <div className="mt-[78px] py-[29px] px-[31px] rounded-[30px] bg-white shadow-[0_7px_24px_rgba(51,62,91,0.165771)]" >
          <div className="flex justify-between items-center mb-[50px]" >
            <h4 className=' font-semibold text-[30px] leading-[36.57px]' >Our Farms</h4>
            <span className=' font-normal text-[15px] leading-[18.29px]' >TVL: 1,981,483</span>
          </div>
          <div className=' flex flex-wrap gap-[10px]' >
            {offersData.map((offer, index) => (
              <div key={index} className="bg-[#EBEFF3] px-[25px] py-[18px] bg-opacity-40 rounded-[15px] grow " >
                <img className='mx-auto' src={offer.image} />
                <span className='uppercase block text-center font-semibold text-[15px] leading-[18px] mt-[11px]  ' >{offer.text}</span>
              </div>
            ))}
            <div className='bg-primary flex flex-col justify-between p-[20px] rounded-[12px] grow-[2]' >
              <div>
                <span className='block text-[22px] leading-[23px]' > Earn up to </span>
                <span className='block text-[22px] leading-[23px]' >X APY</span>
              </div>
              <div className='flex'>
                <div className='grow'></div>
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.7344 17.9096L17.8182 20L27.7854 10L17.8182 0L15.7344 2.09038L21.6265 8H0.671875V11H22.6236L15.7344 17.9096Z" fill="#040618" />
                </svg>
              </div>

            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-[16px] mt-[20px]' >
          <div className='rounded-[24px] px-[20px] py-[21px] bg-white shadow-[0_7px_24px_rgba(51,62,91,0.165771)] ' >
            <img src={nftCollections} />
            <div className='flex justify-between items-center mt-[13px]' >
              <span className=' font-medium text-[19px] leading-[23.16px] ' >NTF Collection</span>
              <a href="#" className='text-[13px] leading-[16px] py-[10px] px-[12px] rounded-full bg-primary ' >mint now</a>
            </div>
          </div>

          <div className='bg-secondary px-[45px] py-[31px] rounded-[24px]'>
            <div className='flex justify-center gap-[21px]' >
              <img className='w-[50px] h-[50px]' src={bnb} alt="" />
              <img className=' w-[50px] h-[50px] ' src={liq} alt="" />
              <img className='w-[50px] h-[50px]' src={tiger} alt="" />
            </div>
            <span className=' font-semibold text-[24px] leading-[29px] text-white mt-[15px] mb-[29px] block text-center' >Buy LIQ instantly</span>
            <a href="#" className=' font-medium text-[13px] leading-[15.85px] px-[36px] py-[11px] bg-opacity-10 mx-auto w-fit block bg-white rounded-full text-white' >Get started</a>
          </div>

          <div className='rounded-[24px] flex flex-col justify-between px-[20px] pb-[33px] pt-[21px] bg-white shadow-[0_7px_24px_rgba(51,62,91,0.165771)] grow ' >
            <span className='block text-center font-semibold text-[24px] leading-[29px] ' > join the <br /> community </span>
            <div className='flex justify-center gap-[12px]' >
              <img src={instagram} />
              <img src={telegram} />
              <img src={twitter} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers