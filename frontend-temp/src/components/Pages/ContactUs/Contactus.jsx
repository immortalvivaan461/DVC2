import React from "react";
import HeroText from "../../UI/HeroText";
import Sidebar from "../../UI/Sidebar";
import ContactForm from "../../UI/ContactForm";


const Contactus = () => {
    return (
        <div>
            <div>
                <div className='flex align-center bg-[url(/src/assets/grains-banner.jpg)] w-full bg-no-repeat bg-cover bg-center sm:bg-bottom-right h-[610px]'>
                    <div className='banner-text text-white [background-color:rgba(86,164,41,0.5)] w-full  sm:w-1/2 pl-8 pt-28'>
                        <h1 className='text-[clamp(2.25rem,5vw,4rem)] font-extrabold mb-4 leading-[1.1]'>PREMIUM <span><HeroText /></span> DELIVERED <br /> <span className='text-[clamp(1.5rem,4vw,3.5rem)]'>TO GLOBAL MARKETS</span></h1>
                        <p>Harvested with care, delivered to the world 🌍. At Deep Vegetables Company, we bring you premium-quality grains like rice, wheat, maize, barley, millet, and more — nurtured in India’s fields, hygienically packed, and globally trusted.</p>
                    </div>
                </div>
                <div className="pl-8 py-2"><p>Your Global Partner in Fresh Vegetable Exports <span>✈︎</span></p></div>
                <div className="flex justify-center items-center">
                    <h1 className="font-extrabold text-[clamp(1.75rem,4vw,2.25rem)] border-b-10 border-b-green-700 px-8 text-black">CONTACT</h1>
                </div>
                <div className="flex flex-col md:flex-row mt-8 items-center md:items-stretch">
                    {/* pass as plain string, not inside quotes */}
                    <Sidebar visibility="hidden md:flex" />

                    <div className="w-11/12">
                        <div className='bg-[#D9D9D9] py-8 '>
                            <h1 className="font-bold text-[clamp(1.25rem,3vw,2rem)] pl-10">
                                Let’s Grow Together.
                            </h1>
                            <p className="pl-10">
                                Whether you're a wholesaler, retailer, exporter, or distributor — Deep Vegetables Company is here to supply you with premium-grade vegetables, directly sourced from Indian farms. Reach out to collaborate, inquire about bulk orders, or ask a question. Our team is just a message away.
                            </p>
                        </div>

                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-[url(/src/assets/india.jpg)] bg-no-repeat bg-center bg-contain" >
                <div className="h-[600px] flex flex-col backdrop-blur md:backdrop-blur-none bg-[#F6E9D6]/30 py-10">
                    <h1 className="text-start pl-4 md:text-end md:pl-0 md:pr-4  font-extrabold text-[clamp(1.25rem,3vw,2rem)]">WHERE WE ARE?</h1>
                    <div className="h-1/2 md:px-20 flex justify-center md:justify-start">
                        <div className="w-1/2 flex flex-col justify-center text-[clamp(1rem,2vw,1.5rem)]">
                            <h2 className="font-bold">NEW DELHI</h2>
                            <h3 className="font-semibold whitespace-nowrap">Phone:📞 +91 9953393099</h3>
                            <h3 className="font-semibold ">EMAIL:✉️ deepvegetablesco@gmail.com</h3>
                            <p><span className="font-semibold whitespace-nowrap">Office Address:</span>D-433 New Subzi Mandi, <br /> Azadpur Delhi 110033</p>
                        </div>
                    </div>

                    <div className="h-1/2 md:px-20 flex justify-center md:justify-end">
                        <div className="w-1/2 flex flex-col justify-center md:items-end">
                            <h2 className="font-bold">NEW DELHI</h2>
                            <h3 className="font-semibold whitespace-nowrap">Phone:📞 +91 9953393099</h3>
                            <h3 className="font-semibold">EMAIL:✉️ deepvegetablesco@gmail.com</h3>
                            <p><span className="font-semibold">Office Address:</span>
                                D-433 New Subzi Mandi, <br /> Azadpur Delhi 110033</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}


export default Contactus