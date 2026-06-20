'use client'
import AnimalCard from '@/app/component/AnimalCard';
import { GetAnimalBreeds, GetAnimalData, GetQurbaniTips } from '@/app/component/GetAnimalData';
import Link from 'next/link';
import React from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const MainPage = () => {

    const animal=GetAnimalData().slice(0,4)
    console.log(animal);
    const tips=GetQurbaniTips()
    const breeds=GetAnimalBreeds()
    
    return (
        <div className='my-5 space-y-5'>
          <h1 className='text-3xl font-bold btn btn-outline p-4 rounded-2xl text-gray-500'>Features</h1> 
          <div className='grid grid-cols-4 gap-5'>
           {
            animal.map((animal)=><AnimalCard key={animal.id} animal={animal}></AnimalCard>)
           }    
        </div> 
        <Link href={'/all-animal'} className='flex justify-center'>
        <div className='btn bg-emerald-700 rounded-3xl p-4 text-2xl flex items-center gap-2 text-white'>
Show More <FaArrowRight /></div></Link>
           
           
            <h1 className='rounded-3xl p-3 text-2xl font-bold w-fit bg-yellow-500 flex items-center gap-3'>Qurabani Tips <FaArrowDown/></h1>
            <div className='mt-5'>
                {
                  tips.map((tips)=><div key={tips.id} className='space-y-3'>
                    <h1 className='font-bold text-2xl text-red-400'>({tips.id}) {tips.title}</h1>
                    <p className='font-md text-gray-700 pl-5'>{tips.description}</p>
                  </div>)
                }
            </div>
              <div className='border text-gray-400 my-8'></div>
            <h1 className='rounded-3xl p-3 text-2xl font-bold w-fit bg-yellow-500 flex items-center gap-3'>Top breeds for animal <FaArrowDown/></h1>
            <div className='mt-5'>
                {
                  breeds.map((tips)=><div key={tips.id} className='space-y-3'>
                    <h1 className='font-bold text-2xl text-green-700'>({tips.id}) {tips.name}</h1>
                    <p className='font-md text-gray-700 pl-5'>{tips.benefit}</p>
                  </div>)
                }
            </div>
            
         
        </div>
    );
};

export default MainPage;