
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const layout = ({children}) => {
    return (
        <div className='container mx-auto'>
           <Navbar></Navbar><main className='w-auto md:w-6xl mx-auto container'>{children}</main><Footer></Footer>
        </div>
    );
};

export default layout;