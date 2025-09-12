import React from 'react'
import HeroText from '../../UI/HeroText'
import Sidebar from '../../UI/Sidebar'
import VegatableList from '../../mini-components/VegetableList'

const Vegatables = () => {
  return (
    <div>
      <div className='flex align-center bg-[url(/src/assets/vegetables-banner.jpg)] w-full bg-no-repeat bg-cover bg-center sm:bg-bottom-right h-[610px]'>
        <div className='banner-text text-white [background-color:rgba(86,164,41,0.5)] w-full  sm:w-1/2 pl-8 pt-28'>
          <h1 className='text-[clamp(2.25rem,5vw,4rem)] font-extrabold mb-4 leading-[1.1]'>PREMIUM <span><HeroText /></span> DELIVERED <br /> <span className='text-[clamp(1.5rem,4vw,3.5rem)]'>TO GLOBAL MARKETS</span></h1>
                  <p>Fresh from the farms of India, delivered to the world 🌍. At Deep Vegetables Company, we bring you premium-quality potatoes, tomatoes, onions, carrots, green chilies, along with broccoli, zucchini, and sweet corn — carefully sourced, hygienically packed, and globally trusted.</p>
              </div>
          </div>

          <div className='flex flex-col md:flex-row'>
            <Sidebar />
            <div>
                  {/* <Vegetables productsPerPage={16} /> */}
                  <VegatableList productsPerPage={16} />
            </div>
          </div>
    </div>
  )
}

export default Vegatables
