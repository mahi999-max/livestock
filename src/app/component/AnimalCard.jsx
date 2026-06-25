'use client'
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({animal}) => {

    const {data : session}=useSession()

    return (
<div className="card bg-base-100 w-90 md:w-full shadow-sm container">
  <figure className='relative h-64 w-full p-5'>
    <Image
      src={animal.image} fill className='object-contain'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{animal.name}</h2>
    <p>{animal.description}</p>
    <div className="card-actions justify-end">
      <Link href={session? `/all-animal/${animal.id}` : '/signin'}>
      <button className="btn btn-primary">Show details</button></Link>
    </div>
  </div>
</div>
    );
};

export default AnimalCard;