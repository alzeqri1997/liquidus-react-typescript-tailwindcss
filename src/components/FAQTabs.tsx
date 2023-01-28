import { useState } from 'react'

type Tabs = {
  question: string,
  answer: string,
  isAnswerOpen?: boolean
}

type PropTypes = {
  tabs: Array<Tabs>
}

const Answer = ( {answer, isAnswerOpen} : { answer: string, isAnswerOpen: boolean | undefined } ) => {


  return (
    <div className='answer-wrap'>
      <div style={{ maxHeight: isAnswerOpen ? `500px` : ' 0' }} className='answer-wrap-inner transition-[max-height] duration-500 ease-linear overflow-hidden pt-[16px] origin-center '>
        <p className='answer opacity-80 ' >{answer}</p>
      </div>
    </div>
  )
}

const FAQTabs = ({ tabs }: PropTypes) => {
  const [localTabs, setLocalTabs] = useState(tabs);

  function handleClick(index: number): void {
    const newTabs = localTabs.map((tab, i) => {
      if (i === index && !tab.isAnswerOpen) {
        tab.isAnswerOpen = true;
        return tab
      }
      if (i === index && tab.isAnswerOpen) {
        tab.isAnswerOpen = false;
        return tab
      }
      // if ( tab.isAnswerOpen === true) {
      //   tab.isAnswerOpen = false;
      //   return tab
      // }
      return tab
    })
    setLocalTabs(newTabs)
  }
  return (
    <div >
      {localTabs.map((tab, index) => (
        <div key={index} className='question-wrap mb-[37px]' >
          <a onClick={() => handleClick(index)} className='question flex justify-between items-center font-normal text-[20px] leading-[24px] cursor-pointer ' >
            <p className=' max-w-[90%]' >{tab.question}</p>
            <svg style={{ transform: tab.isAnswerOpen ? 'rotate(45deg)' : 'rotate(0)' }} className=' transition-transform' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5H9" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 9V1" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        <Answer isAnswerOpen={tab.isAnswerOpen} answer={tab.answer}  />
        </div>
      ))}
    </div>
  )
}

export default FAQTabs