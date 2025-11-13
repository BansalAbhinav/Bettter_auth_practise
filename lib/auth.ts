import { betterAuth } from "better-auth";
import {prisma} from "../lib/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { hashPassword, verifyPassword } from "./argon";
export const auth = betterAuth({
database:prismaAdapter(prisma,{
    provider:"postgresql",
}),
emailAndPassword:{
    enabled:true,
    minPasswordLength:6,
    autoSignIn:false,
    password:{
        hash: hashPassword,
        verify:verifyPassword
    }
},
advanced:{
    database:{
        generateId:false,
    }
}

}); 