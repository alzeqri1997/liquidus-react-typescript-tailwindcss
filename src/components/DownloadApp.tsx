import appStore from '../assets/icons/app-store.png';
import googlePlay from '../assets/icons/google-play.png'
import screenApp1 from '../assets/images/screen-app1.png'
import screenApp2 from '../assets/images/screen-app2.png'
import screenApp3 from '../assets/images/screen-app3.png'


const DownloadApp = () => {
  return (
    <section className='container' >
      <div className="heading-container  max-w-[565px] mx-auto">
        <h1 className="text-[60px] font-medium leading-[73.14px]">
          Get started
        </h1>
        <h1 className="text-[60px] font-medium leading-[73.14px] text-end ">
          with <strong>Liquidus</strong>
        </h1>

        <div className='flex mx-auto w-fit mt-[137px]' >
          <a href="#">
            <img className='mr-[16px]' src={appStore} alt="apple store" />
          </a>
          <a href="#">
            <img src={googlePlay} alt="google play" />
          </a>
        </div>
      </div>
      <div className='flex mx-auto w-fit relative z-10 translate-y-[130px] ' >
        <img className='rotate-[-6deg] z-30 absolute right-[90%] top-[103px]' src={screenApp1} alt="screen app" />
        <img className='z-40' src={screenApp2} alt="screen app" />
        <img className=' z-30 rotate-[6deg] absolute left-[90%] top-[103px] ' src={screenApp3} alt="screen app" />
        {/* clouds */}
        <svg className='absolute bottom-[188px] left-[170%]' width="654" height="267" viewBox="0 0 654 267" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.263104 202.645C0.262135 194.23 1.91918 185.897 5.13961 178.123C8.36005 170.348 13.0808 163.284 19.0323 157.333C24.9838 151.382 32.0495 146.662 39.8258 143.442C47.6022 140.221 55.9369 138.563 64.3541 138.563C68.5788 138.563 72.7933 138.976 76.9376 139.796C78.8423 125.771 83.8615 112.35 91.6275 100.517C99.3935 88.6829 109.709 78.7362 121.819 71.4055C133.929 64.0748 147.526 59.5457 161.614 58.1502C175.702 56.7546 189.924 58.528 203.238 63.3403C209.847 45.228 221.821 29.5594 237.563 18.4225C253.305 7.28568 272.069 1.20943 291.352 1.00346C310.636 0.797497 329.525 6.47158 345.502 17.2697C361.479 28.0677 373.784 43.477 380.779 61.444C393.52 55.3656 407.461 52.2191 421.578 52.2358C438.05 52.2267 454.24 56.5087 468.552 64.6599C482.864 72.8111 494.805 84.5501 503.197 98.7199C507.523 97.6564 511.961 97.1188 516.415 97.1188C527.39 97.1167 538.117 100.376 547.234 106.482C556.351 112.589 563.447 121.267 567.62 131.414C573.36 129.901 579.272 129.137 585.208 129.141C603.453 129.141 620.95 136.387 633.851 149.285C646.752 162.182 654 179.675 654 197.916C654 216.156 646.752 233.649 633.851 246.546C620.95 259.444 603.453 266.69 585.208 266.69H64.3541C47.3612 266.69 31.0639 259.943 19.0453 247.933C7.0268 235.924 0.270932 219.634 0.263104 202.645V202.645Z" fill="#8CFFF7" />
        </svg>

        <svg className='absolute bottom-0 left-[-80%]' width="902" height="302" viewBox="0 0 902 302" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M86.2777 125.906C90.6247 55.6407 149.011 0 220.364 0C250.039 0.00311501 278.879 9.82456 302.385 27.9325C325.891 46.0404 342.742 71.4167 350.31 100.103C363.36 92.8519 377.902 88.6941 392.814 87.9507C407.726 87.2074 422.609 89.8982 436.317 95.8156C450.024 101.733 462.188 110.719 471.872 122.081C481.555 133.442 488.499 146.875 492.168 161.344C505.277 157.992 519.069 158.43 531.94 162.606C536.727 149.568 544.328 137.745 554.202 127.977C564.077 118.208 575.982 110.734 589.073 106.085C602.163 101.436 616.117 99.727 629.942 101.079C643.768 102.431 657.126 106.811 669.067 113.908C680.259 100.218 695.208 90.094 712.076 84.7805C728.944 79.467 746.998 79.1953 764.018 83.9987C781.039 88.8021 796.285 98.4715 807.884 111.819C819.483 125.166 826.93 141.61 829.309 159.131H830.136C849.007 159.131 867.106 166.625 880.45 179.966C893.793 193.306 901.29 211.4 901.29 230.266C901.29 249.133 893.793 267.226 880.45 280.567C867.106 293.907 849.007 301.402 830.136 301.402H85.9973V301.343C63.0101 300.887 41.1203 291.428 25.0375 275.002C8.95468 258.576 -0.0359936 236.494 -0.000208064 213.509C0.0355775 190.523 9.09496 168.47 25.2288 152.093C41.3627 135.717 63.2817 126.327 86.2703 125.943L86.2777 125.906Z" fill="#79FFFA" />
        </svg>

        <svg className='absolute bottom-[50px] left-[140%]' width="658" height="242" viewBox="0 0 658 242" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M591.136 241.385H59.8244C51.1775 241.392 42.6322 239.523 34.7779 235.907C26.9236 232.292 19.9474 227.016 14.3304 220.444C8.71338 213.871 4.58939 206.159 2.24288 197.839C-0.103635 189.519 -0.616796 180.788 0.738786 172.251C2.09437 163.713 5.28644 155.571 10.0948 148.386C14.9031 141.201 21.2132 135.145 28.5899 130.634C35.9665 126.124 44.234 123.267 52.8221 122.261C61.4102 121.255 70.1144 122.123 78.3343 124.806C82.3566 113.852 88.743 103.919 97.0395 95.7111C105.336 87.5036 115.339 81.2239 126.338 77.3183C137.336 73.4126 149.06 71.9769 160.677 73.1132C172.293 74.2495 183.516 77.9299 193.549 83.8928C201.396 74.306 211.461 66.7742 222.873 61.9485C234.285 57.1228 246.701 55.1485 259.048 56.1961C271.395 57.2437 283.3 61.2818 293.736 67.9613C304.171 74.6408 312.822 83.7606 318.941 94.5325C326.597 86.2402 335.89 79.6252 346.233 75.1054C356.576 70.5855 367.744 68.2589 379.032 68.2727C379.947 68.2727 380.855 68.2727 381.763 68.317C390.482 48.034 404.958 30.752 423.4 18.6095C441.842 6.46702 463.441 -0.00303505 485.523 1.06805e-06C514.968 0.00972501 543.244 11.5172 564.324 32.0694C585.404 52.6215 597.62 80.5926 598.369 110.02C614.492 111.8 629.392 119.462 640.217 131.541C651.041 143.619 657.03 159.264 657.035 175.481C657.038 184.135 655.336 192.704 652.025 200.7C648.715 208.696 643.861 215.961 637.742 222.081C631.622 228.201 624.356 233.056 616.36 236.368C608.363 239.681 599.792 241.385 591.136 241.385V241.385Z" fill="#16E7D6" />
        </svg>

        <svg className='absolute top-[40%] right-[130%]' width="1042" height="380" viewBox="0 0 1042 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75.2603 232.74C89.006 232.717 102.479 236.571 114.133 243.859C116.425 225.937 123.651 209.003 135.004 194.944C146.358 180.886 161.393 170.255 178.434 164.237C195.475 158.218 213.853 157.049 231.52 160.858C249.187 164.668 265.449 173.307 278.493 185.813C281.227 177.382 285.679 169.609 291.568 162.985C297.457 156.36 304.656 151.028 312.71 147.324C320.764 143.621 329.498 141.626 338.362 141.467C347.226 141.307 356.026 142.986 364.209 146.397C368.38 133.212 375.385 121.097 384.732 110.902C394.08 100.707 405.543 92.6777 418.32 87.3771C431.097 82.0766 444.879 79.6327 458.7 80.2164C472.521 80.8002 486.047 84.3976 498.332 90.7567C504.442 80.5571 513.094 72.1164 523.442 66.2592C533.791 60.4021 545.483 57.3289 557.374 57.3398C558.113 57.3398 558.902 57.3398 559.67 57.384C568.291 37.3279 583.569 20.8598 602.927 10.7598C622.284 0.659702 644.535 -2.45365 665.922 1.94531C687.309 6.34427 706.524 17.9861 720.321 34.9054C734.118 51.8248 741.653 72.9853 741.655 94.8149V95.1543C753.898 96.5053 765.341 101.9 774.171 110.486C783.002 119.071 788.716 130.356 790.409 142.553C813.207 135.882 837.679 137.996 858.993 148.48C880.308 158.964 896.917 177.055 905.543 199.183C918.391 193.064 932.451 189.915 946.682 189.968C960.913 190.021 974.95 193.274 987.752 199.488C1000.55 205.702 1011.79 214.716 1020.64 225.862C1029.48 237.009 1035.7 250.002 1038.84 263.879C1041.98 277.757 1041.95 292.162 1038.76 306.028C1035.58 319.894 1029.31 332.864 1020.42 343.979C1011.54 355.094 1000.27 364.068 987.445 370.235C974.621 376.403 960.572 379.606 946.341 379.608H75.2603C65.4651 379.848 55.7207 378.127 46.6008 374.546C37.4808 370.964 29.1697 365.595 22.1568 358.754C15.1438 351.913 9.57087 343.738 5.76575 334.712C1.96063 325.685 0.000208192 315.988 0.000208192 306.192C0.000208192 296.397 1.96063 286.7 5.76575 277.673C9.57087 268.646 15.1438 260.472 22.1568 253.631C29.1697 246.789 37.4808 241.42 46.6008 237.839C55.7207 234.257 65.4651 232.536 75.2603 232.777V232.74Z" fill="#3CEFE4" />
        </svg>
      </div>
    </section>
  )
}

export default DownloadApp