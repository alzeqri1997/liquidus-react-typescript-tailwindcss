import { useRef, useLayoutEffect } from 'react'
import {gsap} from 'gsap'

import card1 from '../assets/images/Card1.png'
import card2 from '../assets/images/Card2.png'
import card3 from '../assets/images/Card3.png'

const Cards = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: {
          duration:.7
        },
        scrollTrigger: {
          trigger: '.cards-container',
          start: 'top 200px',
        }
      })
        .fromTo('.clouds .right', {
          xPercent:"random([100,50,70])"
        }, {
          xPercent: 0,
          duration: 2,
          stagger:.1
        }).fromTo('.clouds .left', {
          xPercent:"random([-100,-50,-70])"
        }, {
          xPercent: 0,
          duration: 2,
          stagger:.1
        },"<").fromTo('.stick g', {
          yPercent:100
        }, {
          yPercent: 0,
          duration: 3,
          ease:"power4.out"
        },"<+=.4").fromTo('.right-wing', {
          x: 100,
          opacity:0
        }, {
          x: 0,
          opacity: 1,
          duration:2
        },"<+=.4").fromTo('.left-wing', {
          x: -100,
          opacity:0
        }, {
          x: 0,
          opacity: 1,
          duration:2
        },"<+=.4").fromTo('.card-center', {
          opacity: 0,
          scale:.7
        }, {
          opacity: 1,
          scale:1
        },"<+=.2").fromTo('.card-left', {
          opacity: 0,
          scale:.7
        }, {
          opacity: 1,
          scale:1
        },"<+=.4").fromTo('.card-right', {
          opacity: 0,
          scale:.7
        }, {
          opacity: 1,
          scale: 1,
          
        },"<")
    }, cardsContainerRef)

    return () => ctx.revert()
  }, [])
  return (
    <section ref={cardsContainerRef} className="container">
      <div className='' >

        {/* cards */}
        <div className='cards-container max-sm:pb-[50px] flex relative z-50 w-fit mx-auto max-sm:w-[50%]' >
          <img style={{transform: 'translateX(100px)'}} className='card-left max-sm:absolute top-[30px] right-full w-full' src={card3} alt="" />
          <img className='card-center relative z-50 w-full'  src={card1} alt="" />
          <img style={{transform: 'translateX(-100px)'}} className="card-right max-sm:absolute top-[30px] left-full w-full" src={card2} alt="" />
        </div>


        <div className='relative' >
        {/* right-wing */}
        <svg className='right-wing absolute right-[-10%] top-[-60%] max-sm:hidden' width="375" height="394" viewBox="0 0 375 394" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <path d="M4.00121 294.794C4.00121 294.794 29.045 254.942 75.3604 262.83C75.3604 262.83 54.1551 291.559 30.7562 290.893" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42.3836 296.664C42.3836 296.664 71.0082 303.692 85.259 324.602C85.259 324.602 47.4493 338.086 14.7547 293.301" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M58.2905 296.769C58.2905 296.769 82.783 251.304 126.35 256.971C126.35 256.971 114.271 280.284 83.6395 289.896" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M104.839 299.207C104.839 299.207 128.861 301.536 152.977 320.411C152.977 320.411 121.483 340.214 76.9453 300.766" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M122.674 281.794C122.674 281.794 142.614 234.606 184.334 233.43C184.334 233.43 171.781 260.947 147.299 272.443" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M153.325 282.863C153.325 282.863 181.915 279.489 204.877 295.588C204.877 295.588 178.748 320.918 128.159 291.009" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M191.474 254.702C191.474 254.702 179.247 214.507 221.827 186.95C221.827 186.95 224.438 207.643 206.787 238.176" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M235.589 233.66C235.589 233.66 261.853 216.551 285.302 219.637C285.302 219.637 264.574 255.498 214.201 251.192" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M198.627 263.036C198.627 263.036 224.862 253.592 251.007 266.433C251.007 266.433 221.893 295.924 176.597 273.272" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M235.984 204.805C235.984 204.805 214.064 171.754 248.031 129.276C248.031 129.276 258.572 154.228 247.145 182.065" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M257.975 194.011C257.975 194.011 276.969 170.919 303.059 168.473C303.059 168.473 293.677 206.052 247.183 215.808" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M281.65 144.957C281.65 144.957 299.126 117.046 321.091 109.661C321.091 109.661 321.761 149.163 273.934 169.173" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M277.711 101.275C277.711 101.275 277.346 71.7328 296.167 51.9484C296.167 51.9484 317.702 78.0985 280.136 128.371" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M270.59 117.995C270.59 117.995 267.684 96.4867 245.705 74.5788C245.705 74.5788 231.703 111.164 269.476 142.192" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M263.547 161.733C260.554 159.786 259.769 155.717 261.795 152.645C263.821 149.572 267.89 148.66 270.883 150.607C273.877 152.554 274.661 156.623 272.636 159.696C270.61 162.768 266.541 163.68 263.547 161.733Z" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M227.292 224.67C224.299 222.722 223.514 218.653 225.54 215.581C227.566 212.509 231.635 211.596 234.629 213.543C237.622 215.49 238.407 219.559 236.381 222.632C234.355 225.704 230.286 226.617 227.292 224.67Z" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M177.61 265.762C175.196 264.193 174.564 260.912 176.197 258.435C177.83 255.959 181.111 255.223 183.524 256.793C185.937 258.362 186.57 261.643 184.936 264.12C183.303 266.596 180.023 267.332 177.61 265.762Z" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M110.642 292.276C108.228 290.707 107.596 287.426 109.229 284.949C110.862 282.472 114.143 281.737 116.556 283.307C118.969 284.876 119.602 288.157 117.969 290.633C116.335 293.11 113.055 293.846 110.642 292.276Z" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
        {/* left-wing */}
        <svg className='left-wing absolute left-[-10%] top-[-67%] max-sm:hidden' width="316" height="398" viewBox="0 0 316 398" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <path d="M314.385 335.729C314.385 335.729 298.559 291.237 251.747 288.191C251.747 288.191 266.226 320.993 289.162 325.755" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M276.368 328.747C276.368 328.747 246.814 328.947 228.342 346.121C228.342 346.121 262.464 368.18 304.155 331.909" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M261.018 325.47C261.018 325.47 246.956 275.681 203.371 271.112C203.371 271.112 210.116 296.531 237.842 312.94" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M214.948 317.302C214.948 317.302 190.923 313.979 163.233 326.833C163.233 326.833 189.797 353.57 241.926 325.337" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M201.608 296.416C201.608 296.416 192.358 246.032 152.138 235.246C152.138 235.246 158.43 264.841 179.721 281.653" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M171.363 290.586C171.363 290.586 144.121 280.652 118.179 291.027C118.179 291.027 138.273 321.813 194.225 304.381" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M140.786 254.44C140.786 254.44 161.211 218.283 125.847 181.711C125.847 181.711 118.9 201.178 129.48 234.871" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M102.201 224.236C102.201 224.236 80.2954 201.548 56.7887 199.125C56.7887 199.125 69.2694 238.744 119.266 246.207" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M131.665 261.152C131.665 261.152 108.062 245.875 79.7373 252.322C79.7373 252.322 101.828 287.788 150.987 276.226" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M108.631 195.795C108.631 195.795 137.021 168.788 113.117 119.715C113.117 119.715 97.5226 141.493 102.66 171.148" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M89.2207 180.589C89.2207 180.589 75.7319 153.797 50.9412 145.393C50.9412 145.393 52.0044 184.017 95.0287 204.229" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M77.1232 127.463C77.1232 127.463 66.1577 96.3533 46.4659 84.1123C46.4659 84.1123 37.3891 122.267 79.428 152.732" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M90.8582 85.697C90.8582 85.697 97.5389 57.1182 83.5005 33.5723C83.5005 33.5723 56.9891 53.967 82.6998 111.427" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M94.0254 103.45C94.0254 103.45 101.509 83.1738 127.721 66.9296C127.721 66.9296 133.512 105.81 89.8924 127.276" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M91.1176 147.783C94.46 146.582 96.1031 142.806 94.7876 139.349C93.4721 135.892 89.6961 134.063 86.3537 135.264C83.0113 136.465 81.3682 140.241 82.6837 143.698C83.9992 147.155 87.7752 148.984 91.1176 147.783Z" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M112.373 217.235C115.716 216.034 117.359 212.258 116.043 208.801C114.728 205.344 110.952 203.515 107.61 204.716C104.267 205.917 102.624 209.693 103.94 213.15C105.255 216.607 109.031 218.436 112.373 217.235Z" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M151.594 268.397C154.289 267.429 155.614 264.385 154.553 261.598C153.493 258.811 150.449 257.337 147.754 258.305C145.059 259.273 143.735 262.317 144.795 265.104C145.856 267.891 148.9 269.366 151.594 268.397Z" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M210.931 309.221C213.626 308.253 214.951 305.209 213.89 302.422C212.83 299.635 209.785 298.16 207.091 299.128C204.396 300.097 203.072 303.141 204.132 305.928C205.193 308.715 208.237 310.189 210.931 309.221Z" stroke="#17E7D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>


        {/* Stick */}
          <svg className='stick max-sm:w-[50%] mx-auto mt-[28px] max-sm:hidden' width="339" height="368" viewBox="0 0 339 368" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_631_3989)">
              <path d="M254.764 74.4536L83.5938 74.2317L82.86 636.293L254.03 636.515L254.764 74.4536Z" fill="#16E7D6" stroke="#0B3B52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M264.391 148.271L293.051 148.294L293.082 113.814L237.583 113.743L237.474 186.89L325.829 187.005L325.972 70.4215L169.587 70.2419L13.2003 70.0366L13.0575 186.62L101.413 186.736L101.494 113.567L45.9952 113.497L45.9413 148.006L74.6011 148.029" fill="#16E7D6" />
              <path d="M264.391 148.271L293.051 148.294L293.082 113.814L237.583 113.743L237.474 186.89L325.829 187.005L325.972 70.4215L169.587 70.2419L13.2003 70.0366L13.0575 186.62L101.413 186.736L101.494 113.567L45.9952 113.497L45.9413 148.006L74.6011 148.029" stroke="#0B3B52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M254.592 214.006L83.4219 213.784L83.3653 257.099L254.536 257.32L254.592 214.006Z" fill="#0A3B5B" stroke="#0B3B52" strokeMiterlimit="10" />
              <path d="M117.117 251.849L116.643 636.186" stroke="#0B3B52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M151.96 251.904L151.457 636.218" stroke="#0B3B52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M186.761 251.938L186.287 636.275" stroke="#0B3B52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M221.598 251.996L221.096 636.31" stroke="#0B3B52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M282.792 49.7913L55.627 49.4968L55.5999 70.2385L282.765 70.533L282.792 49.7913Z" fill="#16E7D6" stroke="#0B3B52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M283.181 49.6335L56.0291 49.3603L21.4072 33.0278L317.843 33.4056L283.181 49.6335Z" fill="#0B3B52" stroke="#0B3B52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_631_3989">
                <rect width="339" height="368" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/* Clouds */}
          <svg className='clouds max-sm:hidden absolute bottom-0 left-[-40%]' width="2216" height="301" viewBox="0 0 2216 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='right' d="M1562 201.647C1562 193.232 1563.66 184.899 1566.88 177.125C1570.1 169.35 1574.82 162.286 1580.77 156.335C1586.72 150.384 1593.79 145.664 1601.56 142.443C1609.34 139.223 1617.67 137.565 1626.09 137.565C1630.32 137.565 1634.53 137.978 1638.67 138.798C1640.58 124.773 1645.6 111.352 1653.36 99.5185C1661.13 87.6848 1671.45 77.7382 1683.56 70.4075C1695.67 63.0767 1709.26 58.5477 1723.35 57.1521C1737.44 55.7566 1751.66 57.5299 1764.97 62.3423C1771.58 44.2299 1783.56 28.5614 1799.3 17.4245C1815.04 6.28763 1833.8 0.21138 1853.09 0.00541493C1872.37 -0.20055 1891.26 5.47353 1907.24 16.2716C1923.21 27.0697 1935.52 42.4789 1942.52 60.446C1955.26 54.3675 1969.2 51.221 1983.31 51.2377C1999.79 51.2286 2015.98 55.5107 2030.29 63.6619C2044.6 71.8131 2056.54 83.5521 2064.93 97.7219C2069.26 96.6584 2073.7 96.1208 2078.15 96.1208C2089.13 96.1187 2099.85 99.3778 2108.97 105.484C2118.09 111.591 2125.18 120.269 2129.36 130.416C2135.1 128.903 2141.01 128.139 2146.94 128.143C2165.19 128.143 2182.69 135.389 2195.59 148.287C2208.49 161.184 2215.74 178.677 2215.74 196.918C2215.74 215.158 2208.49 232.651 2195.59 245.548C2182.69 258.446 2165.19 265.692 2146.94 265.692H1626.09C1609.1 265.692 1592.8 258.945 1580.78 246.935C1568.76 234.926 1562.01 218.636 1562 201.647V201.647Z" fill="#8CFFF7" />
            <g clipPath="url(#clip0_1179_5005)">
              <path className='right' d="M704.558 256.735C708.164 198.222 756.601 151.887 815.796 151.887C840.414 151.89 864.339 160.068 883.84 175.148C903.341 190.227 917.32 211.359 923.598 235.248C934.425 229.21 946.489 225.747 958.86 225.128C971.231 224.509 983.578 226.75 994.949 231.678C1006.32 236.605 1016.41 244.089 1024.45 253.55C1032.48 263.011 1038.24 274.198 1041.28 286.247C1052.16 283.455 1063.6 283.82 1074.28 287.297C1078.25 276.441 1084.56 266.595 1092.75 258.46C1100.94 250.325 1110.82 244.101 1121.67 240.229C1132.53 236.358 1144.11 234.935 1155.58 236.061C1167.05 237.187 1178.13 240.834 1188.04 246.744C1197.32 235.344 1209.72 226.913 1223.72 222.488C1237.71 218.063 1252.69 217.837 1266.81 221.837C1280.93 225.837 1293.58 233.889 1303.2 245.004C1312.82 256.119 1319 269.813 1320.97 284.403H1321.66C1337.32 284.403 1352.33 290.645 1363.4 301.754C1374.47 312.863 1380.69 327.931 1380.69 343.642C1380.69 359.353 1374.47 374.42 1363.4 385.53C1352.33 396.639 1337.32 402.88 1321.66 402.88H704.326V402.831C685.255 402.451 667.096 394.575 653.754 380.896C640.411 367.217 632.953 348.828 632.982 329.687C633.012 310.545 640.528 292.18 653.912 278.543C667.297 264.906 685.481 257.086 704.552 256.766L704.558 256.735Z" fill="#79FFFA" />
              <path className='left' d="M62.5012 255.832C73.9046 255.813 85.082 259.023 94.7495 265.092C96.6516 250.167 102.646 236.065 112.065 224.358C121.483 212.65 133.956 203.798 148.093 198.786C162.231 193.774 177.477 192.8 192.134 195.973C206.79 199.145 220.281 206.339 231.102 216.754C233.37 209.733 237.064 203.26 241.949 197.743C246.835 192.227 252.807 187.786 259.489 184.702C266.17 181.618 273.416 179.957 280.77 179.824C288.123 179.691 295.424 181.089 302.212 183.93C305.673 172.95 311.484 162.861 319.238 154.371C326.992 145.881 336.502 139.195 347.102 134.781C357.702 130.367 369.135 128.332 380.601 128.818C392.067 129.304 403.289 132.3 413.48 137.595C418.548 129.101 425.726 122.072 434.311 117.195C442.897 112.317 452.596 109.758 462.461 109.767C463.074 109.767 463.729 109.767 464.365 109.804C471.517 93.1022 484.193 79.3884 500.251 70.9776C516.31 62.5667 534.769 59.9741 552.512 63.6373C570.255 67.3005 586.195 76.9953 597.641 91.0849C609.087 105.175 615.338 122.796 615.339 140.975V141.257C625.496 142.382 634.989 146.875 642.315 154.025C649.641 161.174 654.382 170.571 655.786 180.729C674.699 175.173 695.001 176.934 712.683 185.665C730.366 194.395 744.145 209.46 751.3 227.887C761.959 222.792 773.624 220.17 785.429 220.214C797.235 220.258 808.88 222.967 819.501 228.141C830.121 233.316 839.446 240.822 846.782 250.105C854.119 259.387 859.28 270.207 861.884 281.764C864.487 293.32 864.465 305.316 861.821 316.863C859.176 328.41 853.976 339.211 846.606 348.467C839.236 357.723 829.885 365.196 819.246 370.332C808.607 375.468 796.953 378.135 785.147 378.137H62.5012C54.3751 378.337 46.2911 376.904 38.7253 373.921C31.1595 370.939 24.2646 366.468 18.4467 360.771C12.6287 355.074 8.00544 348.266 4.84873 340.749C1.69201 333.232 0.0656544 325.157 0.0656544 317C0.0656544 308.842 1.69201 300.767 4.84873 293.25C8.00544 285.733 12.6287 278.926 18.4467 273.229C24.2646 267.532 31.1595 263.061 38.7253 260.078C46.2911 257.096 54.3751 255.663 62.5012 255.863V255.832Z" fill="#3CEFE4" />
              <path className='right' d="M1794.99 334.825H1354.22C1347.04 334.83 1339.95 333.274 1333.44 330.263C1326.92 327.252 1321.13 322.858 1316.47 317.385C1311.81 311.912 1308.39 305.49 1306.45 298.561C1304.5 291.632 1304.07 284.362 1305.2 277.253C1306.32 270.143 1308.97 263.362 1312.96 257.379C1316.95 251.396 1322.18 246.352 1328.3 242.597C1334.42 238.841 1341.28 236.462 1348.41 235.624C1355.53 234.786 1362.75 235.509 1369.57 237.743C1372.91 228.621 1378.21 220.349 1385.09 213.514C1391.97 206.679 1400.27 201.45 1409.4 198.197C1418.52 194.945 1428.25 193.749 1437.88 194.696C1447.52 195.642 1456.83 198.707 1465.15 203.672C1471.66 195.689 1480.01 189.417 1489.48 185.398C1498.95 181.379 1509.25 179.735 1519.49 180.608C1529.73 181.48 1539.61 184.843 1548.27 190.405C1556.93 195.968 1564.1 203.562 1569.18 212.533C1575.53 205.627 1583.24 200.118 1591.82 196.354C1600.4 192.591 1609.67 190.653 1619.03 190.665C1619.79 190.665 1620.54 190.665 1621.3 190.701C1628.53 173.811 1640.54 159.419 1655.84 149.307C1671.14 139.196 1689.05 133.808 1707.37 133.81C1731.8 133.818 1755.26 143.401 1772.75 160.516C1790.23 177.631 1800.37 200.924 1800.99 225.43C1814.37 226.912 1826.73 233.293 1835.71 243.351C1844.69 253.409 1849.66 266.438 1849.66 279.943C1849.66 287.149 1848.25 294.285 1845.5 300.944C1842.76 307.602 1838.73 313.653 1833.65 318.749C1828.58 323.846 1822.55 327.888 1815.92 330.647C1809.28 333.405 1802.17 334.825 1794.99 334.825V334.825Z" fill="#16E7D6" />
              <path className='right' opacity="0.1" d="M530.538 260.569C536.227 260.569 541.898 261.22 547.439 262.509C554.381 231.477 573.217 204.403 599.902 187.099C626.586 169.794 658.994 163.639 690.167 169.954C692.881 159.024 698.027 148.847 705.223 140.182C712.419 131.517 721.478 124.588 731.725 119.911C741.973 115.234 753.144 112.93 764.406 113.171C775.668 113.411 786.731 116.19 796.769 121.301C811.43 102.796 830.09 87.8484 851.351 77.5785C872.612 67.3087 895.922 61.9828 919.534 62C990.201 62 1049.93 108.757 1069.49 173.009C1079.22 170.37 1089.38 169.722 1099.36 171.104C1109.35 172.486 1118.95 175.869 1127.59 181.051C1143.72 155.189 1168.99 136.338 1198.38 128.24C1227.77 120.142 1259.13 123.391 1286.23 137.341C1302.65 115.529 1324.47 98.3803 1349.55 87.5926C1374.63 76.805 1402.09 72.7525 1429.22 75.8364C1456.35 78.9202 1482.2 89.0335 1504.21 105.175C1526.23 121.317 1543.64 142.927 1554.74 167.866C1559.21 167.374 1563.71 167.128 1568.22 167.128C1600.51 167.128 1631.49 179.955 1654.32 202.786C1677.16 225.618 1689.99 256.584 1689.99 288.872C1689.99 321.161 1677.16 352.127 1654.32 374.958C1631.49 397.79 1600.51 410.616 1568.22 410.616C1564.86 410.616 1561.54 410.481 1558.24 410.211H530.538C510.686 410.211 491.647 402.327 477.61 388.293C463.572 374.259 455.686 355.225 455.686 335.378C455.686 315.532 463.572 296.498 477.61 282.464C491.647 268.43 510.686 260.546 530.538 260.546V260.569Z" fill="#49FAEE" />
            </g>
            <defs>
              <clipPath id="clip0_1179_5005">
                <rect width="1850" height="239" fill="white" transform="translate(0 62)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Cards