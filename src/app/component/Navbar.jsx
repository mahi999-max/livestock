'use client'
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/asset/logo.png'
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient, useSession } from '@/lib/auth-client';
const Navbar = () => {
    const { data: session } = useSession();

    const handleSignOut = async () => {
        await authClient.signOut();
        window.location.href = "/";
    };
    return (
        <div className='w-full mx-auto container bg-gray-100'>
        <div className='max-w-6xl'>
            <div className='flex  justify-between items-center font-bold w-full mx-auto px-3 py-2'>
           <div><Image src={logo} alt='logo' width={60} height={60} className='rounded-full'></Image></div> 
           <div className='list-none flex gap-3'>
            <Navlink href={'/main'}><li>Home</li></Navlink>
            <Navlink href={'/all-animal'}><li>All Animals</li></Navlink>         
           </div>
           <div className='list-none md:flex gap-3'>
            {session ? (
                <button onClick={handleSignOut} className="cursor-pointer">
                <li>Logout</li>
             </button>
                        ) : (
            <><Navlink href={'/signin'}><li>Sign In</li></Navlink>
            <Navlink href={'/register'}><li>Register</li></Navlink></>
                        )}
            </div>
        
        </div>
        </div>
        </div>
    );
};

export default Navbar;