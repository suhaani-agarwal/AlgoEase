import NextAuth from "next-auth"

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import { db } from '@/lib/db';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db),

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder:"johndoe@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Example of authentication logic
        if(!credentials?.email || !credentials?.password){
          return null
        }
        const existinguser = await db.user.findUnique({
          where: {email: credentials?.email}
        });
        if(!existinguser){
          return null;
        }
        const passwordMatch = await compare(credentials?.password, existinguser.password);
        
        if(!passwordMatch){
          return null;
        }
        
        return {
          id :` ${existinguser.id}`,
          username : existinguser.username,
          email : existinguser.email
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy : 'jwt'
  },
  
  secret: process.env.JWT_SECRET,
};
