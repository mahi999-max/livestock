'use client'
import AnimalCard from "@/app/component/AnimalCard";
import { GetAnimalData } from "@/app/component/GetAnimalData";
import { useEffect, useState } from "react";


const AllAnimal = ()=> {
     const animal=GetAnimalData()
 
    return (
        <div className="my-5">
             <div className='grid grid-cols-4 gap-5'>
           {
            animal.map((animal)=><AnimalCard key={animal.id} animal={animal}></AnimalCard>)
           }    
        </div> 
        </div>
    );
};

export default AllAnimal;