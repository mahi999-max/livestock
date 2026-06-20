import Image from 'next/image';
import React from 'react';
import logo from '../../../public/asset/logo.png'
import Link from 'next/link';
import Navlink from './Navlink';
const Navbar = () => {
    return (
        <div className='w-6xl bg-gray-100 mx-auto container'>
            <div className='flex  justify-between items-center font-bold w-full mx-auto px-3 py-2'>
           <div><Image src={logo} alt='logo' width={60} height={60} className='rounded-full'></Image></div> 
           <div className='list-none flex gap-3'>
            <Navlink href={'/main'}><li>Home</li></Navlink>
            <Navlink href={'/all-animal'}><li>All Animals</li></Navlink>         
           </div>
           <div className='list-none flex gap-3'>
            <Link href={'/'}><li>Sign In</li></Link>
            <Link href={'/'}><li>Sign Out</li></Link>
            </div>
        
        </div>
        </div>
    );
};

export default Navbar;