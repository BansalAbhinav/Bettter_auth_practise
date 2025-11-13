import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Button>hello</Button>
      <p className="text-muted-foreground text-sm">
          Don&apos;t  have an account?{" "}
          <Link href = "/auth/register" className="hover:text-foreground">
          Register
          </Link>
        </p>
    </div>
  )
}

export default page
