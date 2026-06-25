'use client'
import AnimalCard from "@/app/component/AnimalCard";
import { GetAnimalData } from "@/app/component/GetAnimalData";
import { useEffect, useState } from "react";
import Loading from "../loading";
import Category from "@/app/component/Category";
import { useSearchParams } from "next/navigation";


const AllAnimal = ()=> {
    const searchParams= useSearchParams()
    const type = searchParams.get('type')
   
      const animal=GetAnimalData()
     const filteredCategory= type ? animal.filter((animal)=>animal.type.toLowerCase()===type.toLowerCase()) : animal
   const isLoading = !animal; 

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Loading />
            </div>
        );
    }
   
 
    return (
        <div className="my-5 space-y-3">
            <Category></Category>
             <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-fit'>
           {
            filteredCategory.map((animal)=><AnimalCard key={animal.id} animal={animal}></AnimalCard>)
           }    
        </div> 
        </div>
    );
};

export default AllAnimal;