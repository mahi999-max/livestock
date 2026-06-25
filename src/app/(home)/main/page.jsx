'use client'
import AnimalCard from '@/app/component/AnimalCard';
import { GetAnimalBreeds, GetAnimalData, GetQurbaniTips } from '@/app/component/GetAnimalData';
import Link from 'next/link';
import React from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const MainPage = () => {

  const animal = GetAnimalData().slice(0, 4)
  console.log(animal);
  const tips = GetQurbaniTips()
  const breeds = GetAnimalBreeds()

  return (
    <div className='my-5 space-y-5 container mx-auto'>
      <h1 className='text-3xl font-bold btn btn-outline p-4 rounded-2xl text-gray-500'>Features</h1>
      {animal.length == 0 ? (<div className='flex items-center justify-center h-80vh'>
        <span className="loading loading-spinner loading-xl text-6xl"></span>
      </div>) :
        <div className='grid md:grid-cols-4 grid-cols-1 w-full gap-5 container mx-auto'>
          {
            animal.map((animal) => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
          }
        </div>}
      <Link href={'/all-animal'} className='flex justify-start md:justify-center'>
        <div className='btn bg-emerald-700 rounded-3xl p-4 text-2xl flex items-center gap-2 text-white'>
          Show More <FaArrowRight /></div></Link>


      <h1 className='rounded-3xl p-3 text-2xl font-bold w-fit bg-yellow-500 flex items-center gap-3'>Qurabani Tips <FaArrowDown /></h1>
      <div className='mt-5 w-full'>
        {
          tips.map((tips) => <div key={tips.id} className='space-y-3'>
            <h1 className='font-bold text-2xl text-red-400 break-all'>({tips.id}) {tips.title}</h1>
            {/* <p className='font-md text-gray-700 pl-5 wrap-break-word'>{tips.description}</p> */}
          </div>)
        }
      </div>



      <div className='border text-gray-400 my-8'></div>
      <h1 className='rounded-3xl p-3 text-2xl font-bold w-fit bg-yellow-500 flex items-center gap-3'>Top breeds for animal <FaArrowDown /></h1>
      <div className='mt-5 w-auto'>
        {
          breeds.map((tips) => <div key={tips.id} className='space-y-3'>
            <h1 className='font-bold text-xl md:text-2xl text-green-700'>({tips.id}) {tips.breed} <span className='text-sm text-black italic'>({tips.animal})</span></h1>
            {/* <p className='font-md text-gray-700 pl-5'>{tips.benefit}</p> */}
          </div>)
        }
      </div>


    </div>
  );
};

export default MainPage;