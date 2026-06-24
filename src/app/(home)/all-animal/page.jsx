'use client'
import AnimalCard from "@/app/component/AnimalCard";
import { GetAnimalData } from "@/app/component/GetAnimalData";
import { useEffect, useState } from "react";
import Loading from "../loading";


const AllAnimal = ()=> {
      const animal=GetAnimalData()
   const isLoading = !animal; 

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Loading />
            </div>
        );
    }
   
 
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