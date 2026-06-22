'use client'
import { GetAnimalData } from '@/app/component/GetAnimalData';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';

const AnimalDetails = () => {
    const animals=GetAnimalData()
    const params=useParams()
    console.log(params.id);
    const animal=animals.find((animal)=>animal.id==params.id)
    console.log(animal?.name);
    if(!animal){
        return <h1>Loading.....</h1>
    }
    return (
        <div className='my-10 w-70vh mx-auto'>
            <div className="card card-side shadow-sm md:flex grid items-center bg-gray-50">
  <figure>
    <Image
      src={animal?.image} width={300} height={300}
      alt={animal?.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-amber-600 font-bold text-3xl">{animal?.name}</h2>
    <h2 className="card-title">Type: {animal?.type}</h2>
    <div className='font-semibold text-xl opacity-60'>
    <h1>Breed: {animal?.breed}</h1>
    <h1>Weight: {animal?.weight}</h1>
    <h1>Age: {animal?.age}</h1>
    <h1>Location: {animal?.location}</h1>
    <p>About: {animal?.description}</p>
    <p>Price: {animal?.price}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AnimalDetails;