import cld1 from '../assets/icons/cloud1.svg'
import cld2 from '../assets/icons/cloud2.svg'
import cld3 from '../assets/icons/cloud3.svg'
import cld4 from '../assets/icons/cloud4.svg'
import cld5 from '../assets/icons/cloud5.svg'

const Clouds = () => {
  return (
    <div className=' w-full overflow-hidden relative h-[321px] ' >
      <img className='absolute top-[45%] left-[-6%] z-50 ' src={cld1} alt="cloud" />
      <img className='absolute right-[-31%] top-0 z-50  '  src={cld2} alt="cloud" />
      <img className='absolute left-[-14%] top-0 z-30 '  src={cld3} alt="cloud" />
      <img className='absolute left-[22%] bottom-[-37%] '  src={cld4} alt="cloud" />
      <img className='absolute left-[14%] top-[30%] '  src={cld5} alt="cloud" />
    </div>
  )
}

export default Clouds