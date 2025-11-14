"use server";

import { auth } from "@/lib/auth"

export async function signupEmailAction(formData:FormData ){
    const name = String(formData.get('name'))
        if(!name) return {error:"Please Enter Your Name"}
            
            const email = String(formData.get('email'))
        if(!email) return {error:"Please Enter Your email"}

            const password = String(formData.get('password'))
        if(!password) return {error:"Please Enter Your password"}
        try {
            await auth.api.signUpEmail({
                body:{
                    name,
                    email,
                    password
                },
            })
            return {error:null};
            
        } catch (err) {
            if(err instanceof Error){
                return{error:"Oops! Something Went Wrong While Registering the User"};
            }
            return{error:"Internal Server Error"};
        }
}