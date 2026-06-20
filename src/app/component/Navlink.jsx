'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navlink =({href,children})=> {
    const pathname=usePathname()
    const isActive= href==pathname
    return (
        <Link href={href} className={isActive ? 'text-yellow-400' : ''}>{children}</Link>
    );
};

export default Navlink;