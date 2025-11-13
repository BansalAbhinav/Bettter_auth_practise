'use client'
import React, { useState } from 'react'

import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { signOut } from '@/lib/auth-client'
import { toast } from 'sonner'

export const SignOutButton = () => {
     const [isPending, setisPending] = useState(false)
    const router = useRouter();
    async function handleClick(){
        await signOut({
            fetchOptions:{
            onRequest:()=>{setisPending(true)},
            onResponse:()=>{setisPending(false)},
                onError:(ctx)=>{
                    toast.error(ctx.error.message)
                },
                onSuccess:()=>{
                    toast.success("Sign Out Successfully")
                    router.push("/auth/login");
                }
            }
        })
    }
  return (
    <Button
    onClick={handleClick}
    size="sm"
    variant="destructive"
    disabled={isPending}
    >Sign Out</Button>
  )
}
