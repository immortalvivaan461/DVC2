import './Home.css'
import HeroText from '../../UI/HeroText';
import Sidebar from '../../UI/Sidebar';

import VegatableList from '../../mini-components/FruitList'
import FruitList from '../../mini-components/FruitList';
import SpiceList from '../../mini-components/SpiceList'
import GrainList from '../../mini-components/GrainList'


const Home = () => {
    return (
        <div>
            <div className='flex align-center bg-[url(/src/assets/home-banner.jpg)] w-full bg-no-repeat bg-cover bg-bottom-right h-[610px]'>
                <div className='banner-text pt-28 text-white [background-color:rgba(86,164,41,0.5)] w-full  sm:w-1/2'>
                    <h1 className='text-[clamp(2.25rem,5vw,4rem)] font-extrabold mb-4 leading-[1.1]'>PREMIUM <span><HeroText /></span> DELIVERED <br /> <span className='text-[clamp(1.5rem,4vw,3.5rem)]'>TO GLOBAL MARKETS</span></h1>
                    <p>‘At Deep Vegetables Company, we specialize in sourcing and supplying high-quality fresh vegetables like broccoli, zucchini, capsicum, sweet corn, lettuce, and more. Whether you're a wholesaler, importer, or distributor — we’re your reliable partner in global vegetable export. 🌍 Grown in India, Trusted Worldwide.’</p>

                </div>
            </div>
            <div className='home-side flex flex-col md:flex-row'>
                <Sidebar />
                <div className='home-products w-full '>
                    <VegatableList />
                    <hr />
                    <FruitList />
                    <hr />
                    <SpiceList />
                    <hr />
                    <GrainList />
                </div>
                
            </div>
        </div>
    )
}

export default Home;