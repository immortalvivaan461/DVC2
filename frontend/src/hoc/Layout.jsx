import react from 'react'
import Navbar from '../components/UI/Navbar'
import Footer from '../components/UI/Footer'
import Sidebar from '../components/UI/Sidebar'
import HeroText from '../components/UI/HeroText'
import TextType from '../components/UI/TextType'

import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Sidebar /> */}
            <Footer />
        </>
    )
}

export default Layout