import React from 'react'
import Carousel from '../../UI/Carousel'


const OurStory = () => {
  return (
    <div>
      {/* banner */}
      <div className='w-full bg-[url(/src/assets/story-banner.png)] h-[510px] bg-cover bg-no-repeat bg-bottom-right flex justify-center items-center'>
        <div className='w-full [background-color:rgba(86,164,41,0.5)] flex flex-col justify-center md:justify-start pl-8'>

          <h1 className='text-[clamp(2.5rem,5vw,4rem)] font-extrabold'>ROOTED IN <span className='text-orange-700'>INDIA</span>,<br />
            GROWING FOR THE <br />WORLD </h1>
          <p className='pl-6 md:pl-12'>--Bringing freshness, quality, and trust to every harvest.</p>
        </div>
      </div>

      {/* about */}
      <div className='w-full flex flex-col md:flex-row justify-center items-center mb-10'>
        <div className='md:w-1/2 h-full flex justify-center items-center'>
          <h2 className='text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold py-8 pt-8 px-5 text-center md:text-start'>Connecting Cultures <br />Through Quality <br /> Produce</h2></div>
        <div className='w-4/5 md:w-1/2 flex justify-center items-center md:py-5'>
          <p>At Deep Vegetables Company, we believe that food is more than nourishment — it’s a celebration of culture, connection, and community. From the bustling farms of India to dinner tables around the world, our vegetables, fruits, spices, and grains carry with them stories of tradition, care, and togetherness. We take pride in not only exporting high-quality agricultural products, but also in being part of the everyday moments that bring people closer — a family meal, a festive gathering, or a simple shared recipe. Every product we deliver is a reflection of our love for honest food and our belief that the warmth of a meal can connect hearts across borders. At Deep Vegetables, it’s not just about trade — it’s about trust, memories, and the timeless joy of food.</p>
        </div>
      </div>

      {/* founder */}
      <div className='bg-[url(/src/assets/bg-founder.webp)] bg-cover bg-center bg-no-repeat w-full '>

        <div className="bg-transparent flex flex-col md:flex-row items-center p-6 md:p-12">
          {/* Left Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/src/assets/pfp.jpg" // replace with your founder image path
              alt="Founder"
              className="rounded-lg shadow-lg object-cover w-80 h-96"
            />
          </div>

          <div className="md:w-1/2 bg-pink-600 text-white rounded-lg p-8 mt-6 md:mt-0 md:ml-8 relative">
            {/* Small Badge */}
            <span className="absolute -top-6 left-6 bg-teal-400 text-white font-bold px-4 py-2 rounded-full text-sm shadow-md">
              MEET OUR FOUNDER
            </span>

            {/* Heading & Text */}
            <h2 className="text-lg font-bold mb-4">
              A PASSIONATE AGRICULTURE ENTHUSIAST TURNED ENTREPRENEUR, OUR FOUNDER’S VISION FOR INNOVATION AND SUSTAINABILITY LED TO THE CREATION OF DEEP VEGETABLES COMPANY.
            </h2>
            <p className="text-sm leading-relaxed">
              Our founder established Deep Vegetables Company to connect Indian farmers with global markets while delivering fresh, high-quality produce. His vision is rooted in innovation, sustainability, and a commitment to making food systems more efficient and responsible.
              <br /><br />
              With over 7 years of experience in agricultural exports, he has built international partnerships, streamlined supply chains, and promoted ethical sourcing—positioning Deep Vegetables Company as a trusted bulk supplier for retailers and grocery chains worldwide. 
              <br /><br />
              By embracing AI-driven crop management, precision farming, and climate-smart practices, he continues to drive growth while reducing environmental impact. Today, the company exports to the UAE, Vietnam, Saudi Arabia, and beyond, with a mission to make food not just a product, but a force for positive change.
            </p>
          </div>

        </div>

      </div>

      {/* testonomials */}
      <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto p-4 md:auto-rows-[150px] auto-rows-[75px] md:pt-20">
        <div className="row-span-2">
          <img src="/src/assets/products/s18.png" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="row-span-3 col-span-1">
          <img src="/src/assets/products/s25.png" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="row-span-1">
          <img src="/src/assets/products/s33.png" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="row-span-2">
          <img src="/src/assets/products/s15.png" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="row-span-1">
          <img src="/src/assets/products/s8.png" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>

      {/* emopowering */}
      <div className='flex justify-center items-center md:pt-20'>
        <div className='w-11/12 [background-color:#0DCABB] flex flex-col md:flex-row py-20 md:py-30 justify-center items-center md:px-15 rounded-2xl'>
          <div className='w-8/12 flex justify-center items-center flex-col'>
            <h2 className='text-[clamp(1.5rem,3vw,2.75rem)] font-bold text-white leading-[1.1]'>EMPOWERING COMMUNITIES THROUGH ETHICAL SOURCING</h2>
            <p>At Deep Vegetables Company, our mission goes far beyond delivering high-quality vegetables, fruits, spices, and grains to tables across the globe. We are deeply committed to uplifting the communities that grow and harvest our products. By partnering directly with responsible Indian farmers and producers, DVC ensures that every purchase supports fair trade practices and strengthens local economies. Our approach to ethical sourcing means that your choices help build a healthier planet, empower small-scale growers, and foster a more sustainable future for generations to come.</p></div>

          <div className='w-8/12 md:w-4/12'><img className='w-[100%] h-96 object-cover' src="/src/assets/empower.jpg" alt="farmor" /></div>
        </div>
      </div>
     
     {/* Carousel */}
     <div className='w-full h-[600px] flex justify-center items-center flex-col bg-red-100'>
        <div className='flex justify-center items-center flex-col w-8/12 md:pb-14 pt-20'>
          <h1 className='text-[clamp(1.25rem,3vw,2.25rem)] font-semibold md:font-bold text-center text-[#E47900]'>🚚 From Farm to Freight: The Product Journey at Deep Vegetables Company</h1>
          <p className='md:font-semibold text-center pt-4 pb-4'>At Deep Vegetables Company, we specialize in sourcing, processing, and exporting premium-quality vegetables, fruits, spices, and grains in bulk — connecting Indian agriculture to global demand with efficiency and integrity.</p>
        </div>
      <Carousel />
     </div>
      
    </div>
  )
}

export default OurStory
