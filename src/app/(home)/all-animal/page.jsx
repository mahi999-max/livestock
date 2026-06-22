'use client'
import AnimalCard from "@/app/component/AnimalCard";
import { GetAnimalData } from "@/app/component/GetAnimalData";
import { useEffect, useState } from "react";


const AllAnimal = ()=> {
     const animal=GetAnimalData()
 
    return (
        <div className="my-5">
             <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-fit'>
           {
            animal.map((animal)=><AnimalCard key={animal.id} animal={animal}></AnimalCard>)
           }    
        </div> 
        </div>
    );
};

export default AllAnimal;