import React from 'react'
import HeroText from '../../UI/HeroText'
import Sidebar from '../../UI/Sidebar'
import GrainList from '../../mini-components/GrainList'

const Grains = () => {
    return (
        <div>
            <div className='flex align-center bg-[url(/src/assets/grains-banner.jpg)] w-full bg-no-repeat bg-cover bg-center sm:bg-bottom-right h-[610px]'>
                <div className='banner-text text-white [background-color:rgba(86,164,41,0.5)] w-full  sm:w-1/2 pl-8 pt-28'>
                    <h1 className='text-[clamp(2.25rem,5vw,4rem)] font-extrabold mb-4 leading-[1.1]'>PREMIUM <span><HeroText /></span> DELIVERED <br /> <span className='text-[clamp(1.5rem,4vw,3.5rem)]'>TO GLOBAL MARKETS</span></h1>
                    <p>Harvested with care, delivered to the world 🌍. At Deep Vegetables Company, we bring you premium-quality grains like rice, wheat, maize, barley, millet, and more — nurtured in India’s fields, hygienically packed, and globally trusted.</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <Sidebar />
                <div>
                    <GrainList productsPerPage={16} />
                </div>
            </div>
        </div>
    )
}

export default Grains