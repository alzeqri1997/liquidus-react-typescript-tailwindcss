import { useRef, useLayoutEffect } from "react"
import {gsap} from 'gsap'

const Clouds2 = () => {
  const cloudContainerRef = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.clouds-container',
          start: '-=300px 65%',
          end: '+=620px',
          scrub: 2,
          pin: true,
        }
      }).to('.clouds-container__icon1', {
        xPercent: -120
      }).to('.clouds-container__icon2', {
        xPercent: 150
      },"<").to('.clouds-container__icon3', {
        xPercent: -100
      }, "<").to('.clouds-container__icon4', {
        xPercent: 150
      }, "<").to('.clouds-container__icon5', {
        xPercent:-100
      },"<")
    }, cloudContainerRef)

    return () => ctx.revert()

  }, [])
  return (
    <div className="max-sm:hidden" ref={cloudContainerRef} >
      <div className='relative clouds-container container pt-[100px]  ' >
        <svg className=' absolute bottom-[0] left-[-50%]' width="3176" height="473" viewBox="0 0 3176 473" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1178_4996)">
            <path className="clouds-container__icon1" opacity="0.05" d="M2287.78 355.89C2280.07 355.89 2272.39 356.773 2264.88 358.52C2255.47 316.462 2229.95 279.769 2193.8 256.316C2157.64 232.864 2113.73 224.521 2071.49 233.08C2067.81 218.266 2060.84 204.474 2051.09 192.73C2041.34 180.987 2029.07 171.596 2015.18 165.257C2001.3 158.919 1986.16 155.796 1970.9 156.122C1955.64 156.448 1940.65 160.214 1927.05 167.14C1907.19 142.061 1881.9 121.802 1853.09 107.884C1824.29 93.9649 1792.7 86.7467 1760.71 86.7701C1664.96 86.7701 1584.03 150.14 1557.53 237.22C1544.35 233.643 1530.58 232.765 1517.05 234.638C1503.52 236.511 1490.51 241.097 1478.8 248.12C1456.95 213.069 1422.71 187.52 1382.89 176.545C1343.07 165.571 1300.57 169.974 1263.85 188.88C1241.61 159.318 1212.04 136.076 1178.06 121.456C1144.08 106.835 1106.87 101.343 1070.11 105.522C1033.36 109.702 998.332 123.409 968.502 145.285C938.672 167.162 915.073 196.45 900.04 230.25C893.976 229.583 887.881 229.249 881.78 229.25C838.02 229.25 796.051 246.634 765.108 277.577C734.164 308.521 716.78 350.489 716.78 394.25C716.78 438.011 734.164 479.979 765.108 510.923C796.051 541.866 838.02 559.25 881.78 559.25C886.327 559.25 890.83 559.067 895.29 558.7H2287.78C2314.68 558.7 2340.48 548.015 2359.49 528.995C2378.51 509.975 2389.2 484.178 2389.2 457.28C2389.2 430.382 2378.51 404.585 2359.49 385.565C2340.48 366.545 2314.68 355.86 2287.78 355.86V355.89Z" fill="#49FAEE" />
            <path className="clouds-container__icon2" d="M1890.74 403.67C1884.85 308.44 1805.74 233.03 1709.06 233.03C1668.85 233.034 1629.78 246.345 1597.93 270.887C1566.08 295.429 1543.24 329.821 1532.99 368.7C1515.31 358.872 1495.6 353.237 1475.4 352.23C1455.19 351.222 1435.03 354.869 1416.46 362.889C1397.88 370.909 1381.4 383.088 1368.28 398.486C1355.16 413.884 1345.75 432.09 1340.78 451.7C1323.02 447.157 1304.33 447.75 1286.89 453.41C1280.4 435.74 1270.11 419.716 1256.73 406.477C1243.35 393.237 1227.22 383.107 1209.48 376.807C1191.74 370.506 1172.84 368.19 1154.1 370.023C1135.37 371.855 1117.27 377.792 1101.09 387.41C1085.93 368.855 1065.67 355.135 1042.82 347.933C1019.96 340.732 995.499 340.363 972.437 346.874C949.375 353.384 928.717 366.489 913 384.578C897.284 402.668 887.194 424.955 883.97 448.7H882.85C857.281 448.7 832.759 458.857 814.678 476.938C796.598 495.018 786.44 519.541 786.44 545.11C786.44 570.68 796.598 595.202 814.678 613.282C832.759 631.363 857.281 641.52 882.85 641.52H1891.12V641.44C1922.27 640.822 1951.93 628.003 1973.72 605.74C1995.51 583.478 2007.69 553.551 2007.64 522.398C2007.59 491.246 1995.32 461.357 1973.46 439.162C1951.6 416.968 1921.9 404.241 1890.75 403.72L1890.74 403.67Z" fill="#79FFFA" />
            <path className="clouds-container__icon3" d="M885.78 273.29C885.781 261.885 883.536 250.592 879.173 240.055C874.809 229.518 868.413 219.943 860.349 211.878C852.285 203.813 842.711 197.416 832.175 193.051C821.638 188.686 810.345 186.44 798.94 186.44C793.216 186.439 787.505 186.999 781.89 188.11C779.309 169.102 772.508 150.913 761.986 134.875C751.463 118.837 737.486 105.356 721.078 95.4207C704.669 85.4854 686.246 79.3471 667.157 77.4558C648.069 75.5644 628.799 77.9678 610.76 84.4899C601.804 59.9423 585.581 38.7067 564.251 23.6129C542.921 8.51907 517.498 0.28392 491.369 0.00477538C465.24 -0.274369 439.647 7.41571 417.999 22.0504C396.352 36.685 379.678 57.5692 370.2 81.9199C352.937 73.6818 334.048 69.4173 314.92 69.44C292.602 69.4276 270.665 75.2311 251.273 86.2785C231.88 97.3258 215.701 113.236 204.33 132.44C198.469 130.999 192.456 130.27 186.42 130.27C171.551 130.267 157.016 134.684 144.662 142.96C132.309 151.236 122.694 162.998 117.04 176.75C109.263 174.7 101.253 173.664 93.21 173.67C68.4892 173.67 44.7808 183.49 27.3006 200.971C9.8203 218.451 0 242.159 0 266.88C0 291.601 9.8203 315.309 27.3006 332.789C44.7808 350.27 68.4892 360.09 93.21 360.09H798.94C821.964 360.09 844.047 350.946 860.331 334.669C876.616 318.392 885.769 296.314 885.78 273.29V273.29Z" fill="#8CFFF7" />
            <path className="clouds-container__icon4" d="M3076.63 402.2C3058.01 402.169 3039.75 407.392 3023.96 417.27C3020.85 392.98 3011.06 370.029 2995.68 350.975C2980.3 331.922 2959.93 317.514 2936.84 309.357C2913.75 301.201 2888.84 299.616 2864.91 304.779C2840.97 309.942 2818.93 321.651 2801.26 338.6C2797.56 327.174 2791.52 316.639 2783.54 307.661C2775.56 298.683 2765.81 291.456 2754.9 286.436C2743.98 281.417 2732.15 278.714 2720.14 278.497C2708.13 278.281 2696.21 280.557 2685.12 285.18C2679.47 267.309 2669.98 250.89 2657.31 237.073C2644.65 223.255 2629.11 212.373 2611.8 205.19C2594.49 198.006 2575.82 194.694 2557.09 195.485C2538.36 196.276 2520.03 201.152 2503.39 209.77C2495.11 195.946 2483.39 184.507 2469.37 176.569C2455.34 168.63 2439.5 164.465 2423.39 164.48C2422.39 164.48 2421.32 164.48 2420.28 164.54C2408.6 137.358 2387.9 115.039 2361.67 101.35C2335.44 87.6614 2305.29 83.4419 2276.31 89.4038C2247.33 95.3657 2221.3 111.144 2202.61 134.075C2183.91 157.006 2173.7 185.684 2173.7 215.27V215.73C2157.11 217.561 2141.61 224.873 2129.64 236.509C2117.68 248.144 2109.93 263.439 2107.64 279.97C2076.75 270.928 2043.59 273.794 2014.71 288.003C1985.83 302.211 1963.33 326.73 1951.64 356.72C1934.23 348.428 1915.18 344.159 1895.9 344.231C1876.62 344.302 1857.6 348.712 1840.25 357.134C1822.9 365.555 1807.68 377.772 1795.69 392.879C1783.71 407.986 1775.28 425.595 1771.03 444.403C1766.78 463.211 1766.81 482.735 1771.13 501.527C1775.45 520.319 1783.94 537.899 1795.98 552.963C1808.02 568.026 1823.29 580.188 1840.67 588.547C1858.04 596.906 1877.08 601.248 1896.36 601.25H3076.63C3089.9 601.576 3103.11 599.243 3115.46 594.389C3127.82 589.536 3139.08 582.259 3148.58 572.987C3158.08 563.715 3165.64 552.636 3170.79 540.402C3175.95 528.168 3178.6 515.026 3178.6 501.75C3178.6 488.474 3175.95 475.332 3170.79 463.098C3165.64 450.864 3158.08 439.785 3148.58 430.513C3139.08 421.241 3127.82 413.964 3115.46 409.111C3103.11 404.257 3089.9 401.924 3076.63 402.25V402.2Z" fill="#3CEFE4" />
            <path className="clouds-container__icon5" d="M247.02 530.76H966.92C978.637 530.769 990.215 528.235 1000.86 523.335C1011.5 518.435 1020.95 511.285 1028.56 502.378C1036.17 493.47 1041.76 483.017 1044.94 471.741C1048.12 460.465 1048.82 448.633 1046.98 437.062C1045.14 425.49 1040.82 414.455 1034.3 404.718C1027.79 394.98 1019.24 386.772 1009.24 380.659C999.247 374.546 988.045 370.674 976.408 369.311C964.772 367.947 952.978 369.124 941.841 372.76C936.39 357.914 927.737 344.451 916.496 333.327C905.254 322.204 891.701 313.693 876.798 308.4C861.896 303.106 846.01 301.16 830.271 302.7C814.531 304.24 799.324 309.228 785.73 317.31C775.098 304.317 761.46 294.109 745.998 287.569C730.535 281.029 713.712 278.353 696.983 279.773C680.254 281.192 664.122 286.665 649.983 295.718C635.843 304.771 624.121 317.131 615.831 331.73C605.457 320.491 592.865 311.526 578.851 305.4C564.837 299.275 549.705 296.121 534.41 296.14C533.17 296.14 531.94 296.14 530.71 296.2C518.897 268.711 499.282 245.288 474.294 228.831C449.306 212.375 420.041 203.606 390.12 203.61C350.225 203.623 311.912 219.219 283.35 247.074C254.787 274.928 238.235 312.837 237.22 352.72C215.374 355.132 195.185 365.517 180.518 381.887C165.852 398.257 157.738 419.461 157.73 441.44C157.727 453.168 160.033 464.782 164.519 475.619C169.004 486.456 175.581 496.302 183.872 504.597C192.164 512.892 202.009 519.471 212.844 523.96C223.679 528.45 235.292 530.76 247.02 530.76V530.76Z" fill="#16E7D6" />
          </g>
          <defs>
            <clipPath id="clip0_1178_4996">
              <rect width="3176" height="473" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>


  )
}

export default Clouds2