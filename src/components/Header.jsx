import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav className='w-full flex justify-between items-center sticky bg-white z-10 top-0'>
        <h1 className='m-4 text-black uppercase font-bold'>Techystar.</h1>
        <main className=' flex justify-end w-[70%]'>
            <ul className='flex space-x-4 m-4'>
                <li className='hover:text-purple-500 text-black'><HashLink to={"/#home"}>Home</HashLink></li>
                <li className='hover:text-purple-500 text-black'><Link to={"/contact"}>Contact</Link></li>
                <li className='hover:text-purple-500 text-black'><HashLink to={"/#about"}>About</HashLink></li>
                <li className='hover:text-purple-500 text-black'><HashLink to={"/#brands"}>Brands</HashLink></li>
                <li className='hover:text-purple-500 text-black'><Link to={"/services"}>Services</Link></li>
            </ul>
        </main>
    </nav>
  )
}

export default Header;