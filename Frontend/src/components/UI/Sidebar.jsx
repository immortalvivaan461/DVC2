import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ visibility }) => {
    return (
        <div className={`side-container ${visibility}`}>
        <div className='side-bar'>
                <NavLink to='/' className={({ isActive }) => `${isActive ? "text-orange-700" : "text-black"}`}>PRODUCTS</NavLink>
                <NavLink to='/vegetables' className={({ isActive }) => `${isActive ? "text-orange-700" : "text-black"}`}>VEGETABLES</NavLink>
                <NavLink to='/fruits' className={({ isActive }) => `${isActive ? "text-orange-700" : "text-black"}`}>FRUITS</NavLink>
                <NavLink to='/spices' className={({ isActive }) => `${isActive ? "text-orange-700" : "text-black"}`}>SPICES</NavLink>
                <NavLink to='/grains' className={({ isActive }) => `${isActive ? "text-orange-700" : "text-black"}`}>GRAINS</NavLink>   
        </div>
        </div>
    )
}




export default Sidebar;
