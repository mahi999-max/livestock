'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const [email, setemail] = useState('')
    const [password, setpass] = useState('')
     const [name,setname]=useState('')
     const router=useRouter()
    const handlereg = async (e) => {
        e.preventDefault()
        console.log({ email, password });
        const { data, error } = await authClient.signUp.email({
            name:name,
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });

         if(error){
            toast.error(error.message)
         }
         else{
            toast.success('Register done successfully')
            router.push('/main')
         }

    }


    return (
        <div className=' flex justify-center items-center py-5'>
            <form onSubmit={handlereg}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-auto md:w-2xl border p-4">
                    <legend className="fieldset-legend text-2xl">Register</legend>
                   <label className="label" name='name'>Name</label>
                    <input type="text" className="input" placeholder="name" value={name}
                        onChange={(e) => setname(e.target.value)} />
                    <label className="label" name='email'>Email</label>
                    <input type="email" className="input" placeholder="Email" value={email}
                     onChange={(e) => setemail(e.target.value)} />
                    

                    <label className="label" name='password'>Password</label>
                    <input type="password" className="input" placeholder="Password" value={password}
                        onChange={(e) => setpass(e.target.value)} />

                    <button className="btn btn-neutral mt-4 w-fit" type='submit'>Sign Up</button>
                </fieldset>

            </form>
        </div>
    );
};

export default RegisterPage;