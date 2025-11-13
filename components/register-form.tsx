"use client";
import React, { useState } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
    const [isPending, setisPending] = useState(false);
    const router = useRouter();
    async function handleSubmit(evt: React.FormEvent<HTMLFormElement>){
        evt.preventDefault();
        const formData = new FormData(evt.target as HTMLFormElement);

        const name = String(formData.get('name'))
        if(!name) return toast.error("Please Enter Your Name")
            
            const email = String(formData.get('email'))
        if(!email) return toast.error("Please Enter Your email")

            const password = String(formData.get('password'))
        if(!password) return toast.error("Please Enter Your password")


    console.log({name,email,password});
    
    await signUp.email(
       { name,
        email,
        password},
        {
            onRequest:()=>{setisPending(true)},
            onResponse:()=>{setisPending(false)},
            onError:(ctx)=>{
                toast.error(ctx.error.message);
                
            },
            onSuccess:()=>{
                toast.success("Registration Complete. You'r Good To Go.")
                router.push("/auth/login")
            },
        }
    )
        }
  return ( 
    <form  onSubmit={handleSubmit} 
    className='max-w-sm w-full space-y-4'>
{/**Name */}
        <div className="space-y-2">
            <Label htmlFor='name'>Name</Label>
            <Input id="name" name = "name"/>
        </div>
     {/**Email */}   
         <div className="space-y-2">
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id="email" name = "email"/>
        </div>
{/**Password */}   
         <div className="space-y-2">
            <Label htmlFor='password'>Password</Label>
            <Input type="password" id="password" name = "password"/>
        </div>
<Button type='submit' className='w-full' disabled={isPending}>Register</Button>
    </form>
  )
}