import { LoginInForm } from "@/components/login-form";

export default function Login () {
  return (
    <div className='px-8 py-16 container mx-auto max-w-5xl space-y-8'>
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">

      Login bhai
            </h1>
        </div>
        <LoginInForm/>
    </div>
  )
}