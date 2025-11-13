import { RegisterForm } from '@/components/register-form'
import { ReturnButton } from '@/components/return-button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-8 py-16 container mx-auto max-w-5xl space-y-8'>
        <div className="space-y-8">
          
                    <ReturnButton href="/" label = "Home"/>
            <h1 className="text-3xl font-bold">

      Register
            </h1>
      <RegisterForm/>
        </div>
          <p className="text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link href = "/auth/login" className="hover:text-foreground">
          Login
          </Link>
        </p>
    </div>
  )
}

export default page
