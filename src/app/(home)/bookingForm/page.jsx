'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const BookingForm = () => {
    const router = useRouter()
    const handlesubmit = (e) => {
        e.preventDefault()
        toast.success('Booking Confirmed')
        setTimeout(() => {
            router.push('/all-animal');
        }, 1500);
    }
    return (
        <div className=' flex justify-center items-center py-5'>
        <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handlesubmit}>


            <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input validator" placeholder="Enter your full name" required />
                <p className="validator-hint hidden">Required</p>
            </fieldset>
            <fieldset className="fieldset">
                <label className="label">Phone Number</label>
                <input type="number" className="input validator" placeholder="Enter your Phone number" required />
                <p className="validator-hint hidden">Required</p>
            </fieldset>
            <fieldset className="fieldset">
                <label className="label">Address</label>
                <input type="text" className="input validator" placeholder="Enter your full address" required />
                <p className="validator-hint hidden">Required</p>
            </fieldset>

            <button className="btn btn-neutral mt-4" type="submit">Confirm</button>
            <button className="btn btn-ghost mt-1" type="reset">Reset</button>
        </form></div>
    );
};

export default BookingForm;