'use client'
import React from 'react';
import { GetAnimalData } from './GetAnimalData';
import Link from 'next/link';

const Category = () => {
    const animal=GetAnimalData()
    const uniqueTypes = [...new Set(animal.map(item => item.type))];
    return (
        <div className='flex gap-2'>
            {
                uniqueTypes.map((type)=><Link href={`?type=${type.toLowerCase()}`} key={type}><div className='btn btn-outline gap-2'>{type}</div></Link>)
            }
        </div>
    );
};

export default Category;