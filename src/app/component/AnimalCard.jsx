import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({animal}) => {
    return (
        <div className="card bg-base-100 w-auto shadow-sm">
  <div className='relative h-64 w-full'>
    <Image src={animal.image} alt='animal' fill className="object-contain rounded-t-lg"
></Image>
  </div>
  <div className="card-body">
    <h2 className="card-title justify-between">
      {animal.name}
    </h2>
    <div className="badge bg-blue-400 p-3 text-white">{animal.category}</div>

    <p>{animal.description}</p>
    <div className="card-actions justify-end">
      <Link href={`/all-animal/${animal.id}`}>
            <div className="btn btn-primary p-3 rounded-3xl">Show Details</div></Link>
    </div>
  </div>
</div>
    );
};

export default AnimalCard;