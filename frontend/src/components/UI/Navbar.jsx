import './Navbar.css';

import TextType from './TextType';
import logo from "../../assets/logo.png";

import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    // Close menu on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
            setIsSmallScreen(window.innerWidth < 600);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="bg-white shadow">
            <div className="main-head-container">
                <div className='nav-starter'>
                    {/* <NavLink className='ms-4' href="">INQUIRY</NavLink> */}
                    <NavLink
                        className="ms-4"
                        href="https://api.whatsapp.com/send?phone=919876543210&text=Hello"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        INQUIRY
                    </NavLink>

                    {!isSmallScreen && (
                        <TextType
                            text={[
                                "Bulk Vegetables, Delivered Nationwide ",
                                "Fresh From Farms to Your Business",
                                "Pan-India Bulk Vegetable Delivery"
                            ]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    )}
                    <NavLink to='/contactus'>CONTACTS</NavLink>
                </div>
                <div className="main-head-subcontainer">

                    {/* Left Links */}
                    <div className="nav-btns hidden md:flex items-center space-x-6">
                        <NavLink to='/vegetables' className= {({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} btn uppercase`
                        }>Vegetables</NavLink>
                        <NavLink to='/fruits' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} btn uppercase`
                        }>Fruits</NavLink>
                        <NavLink to='/spices' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} btn uppercase`
                        }>Spices</NavLink>
                        <NavLink to='/grains' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} btn uppercase`
                        }>Grains</NavLink>
                        <hr className='styled-hr' />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-700 focus:outline-none text-2xl"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Logo Center */}
                    <div className="">
                        <NavLink to='' className='logo-link'><img className='Logo-head' src={logo} alt="company-logo" /></NavLink>
                    </div>

                    {/* Right Icons */}
                    <div className="right-icons">
                        <NavLink to='/OurStory' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} hidden lg:inline-block font-bold text-lg`
                        }>OUR STORY</NavLink>
                        <NavLink to="/" className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} hidden lg:inline-block font-bold`
                        }>PRODUCTS</NavLink>
                        {/* <NavLink to='' className="text-gray-700 hover:text-green-600">
                            <User className="w-6 h-6" />
                        </NavLink> */}
                        {/* <NavLink to='' className="text-gray-700 hover:text-green-600">
                            <ShoppingCart className="w-6 h-6" />
                        </NavLink> */}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="m-view-btns md:hidden bg-white px-4 pb-4">
                    <NavLink to='/' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} block py-2 uppercase`
                        }>Products</NavLink>
                    <NavLink to='/vegetables' className={({ isActive }) =>
                        `${isActive ? "text-orange-700" : "text-black"} block py-2 uppercase`
                    }>Vegetables</NavLink>
                    <NavLink to='/Fruits' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} block py-2 uppercase`
                        }>Fruits</NavLink>
                    <NavLink to='/spices' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} block py-2 uppercase`
                        }>Spices</NavLink>
                    <NavLink to='/grains' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} block py-2 uppercase`
                        }>Grains</NavLink>
                    <NavLink to='/OurStory' className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-black"} block py-2 uppercase`
                        }>our Story</NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
