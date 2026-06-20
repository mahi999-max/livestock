'use client'
import { useEffect, useState } from "react";

export function GetAnimalData() {
    const [animal, setanimal] = useState([])
    useEffect(() => {
        fetch('/data.json')
        .then((res) => res.json())
        .then((data) => setanimal(data))
    },[]
    )
    return animal;

}

export function GetQurbaniTips() {
    const [animal, setanimal] = useState([])
    useEffect(() => {
        fetch('/tips.json')
        .then((res) => res.json())
        .then((data) => setanimal(data))
    },[]
    )
    return animal;

}
export function GetAnimalBreeds() {
    const [animal, setanimal] = useState([])
    useEffect(() => {
        fetch('/breed.json')
        .then((res) => res.json())
        .then((data) => setanimal(data))
    },[]
    )
    return animal;

}