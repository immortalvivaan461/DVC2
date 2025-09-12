import React from 'react'
import HeroText from '../../UI/HeroText'
import Sidebar from '../../UI/Sidebar'
import SpiceList from '../../mini-components/SpiceList'

const Spices = () => {
    return (
        <div>
            <div className='flex align-center bg-[url(/src/assets/spices-banner.jpg)] w-full bg-no-repeat bg-cover bg-center h-[610px]'>
                <div className='banner-text text-white [background-color:rgba(86,164,41,0.5)] w-full sm:w-1/2 pl-8 pt-28'>
                    <h1 className='text-[clamp(2.25rem,5vw,4rem)] font-extrabold mb-4 leading-[1.1]'>PREMIUM <span><HeroText /></span> DELIVERED <br /> <span className='text-[clamp(1.5rem,4vw,3.5rem)]'>TO GLOBAL MARKETS</span></h1>
                    <p>Rich in aroma, rooted in tradition, delivered to the world 🌍. At Deep Vegetables Company, we bring you premium-quality spices like turmeric, cumin, coriander, cardamom, black pepper, and more — carefully sourced, hygienically packed, and globally trusted.</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <Sidebar />
                <div>
                    <SpiceList productsPerPage={16} />
                </div>
            </div>
        </div>
    )
}

export default Spices