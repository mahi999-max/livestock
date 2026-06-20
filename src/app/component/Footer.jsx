import Image from 'next/image';
import React from 'react';
import logo from '../../../public/asset/logo.png'
import { BsTiktok, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='w-6xl mx-auto'>
<footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
      <aside className="grid-flow-col items-center">
     <Image src={logo} alt='logo' width={200} height={200} className='rounded-full'></Image>
    <p>
      <span className='text-2xl font-bold'>Friends Agro Farm</span>
      <br />
      Providing reliable tech since 2018
    </p>
  </aside>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4 text-4xl">
      <BsTwitter></BsTwitter>
      <FaFacebook></FaFacebook>
      <BsTiktok></BsTiktok>
    </div>
  </nav>
    
  </nav>
</footer>
<footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
  
</footer>
        </div>
    );
};

export default Footer;