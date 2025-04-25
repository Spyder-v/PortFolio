import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='bg-gray-900  py-4 shadow-md sticky top-0 z-50 '>
            <ul className='flex flex-row items-center px-10  gap-9 justify-center'>
                <li><NavLink 
                to="/"
                className={({isActive})=>
                isActive ? "text-purple-500 font-bold"
                : "text-gray-300 hover:text-purple-500 transition-all duration-300"}>Home</NavLink></li>
                <li><NavLink 
                to="/Projects"
                className={({isActive})=>
                    isActive ? "text-purple-500 font-bold"
                : "text-gray-300 hover:text-purple-500 transition-all duration-300"}>Projects</NavLink></li>
                <li><NavLink
                 to="/About"
                className={({isActive})=>
                    isActive ? "text-purple-500 font-bold"
                : "text-gray-300 hover:text-purple-500 transition-all duration-300"} >About</NavLink></li>
                <li><NavLink
                 to="/Contact"
                 className={({isActive})=>
                 isActive ?"text-purple-500 font-bold"
                : "text-gray-300 hover:text-purple-500 transition-all duration-300"}>Contact</NavLink></li>
                 </ul>
        </nav>
    )
}

export default Navbar
