"use client"
import { SignIn } from "@clerk/nextjs";
export default function Login() {
      return <>
            <div className="sign-in-box h-screen w-full flex justify-center items-center">
             <SignIn afterSignInUrl="/dashboard/home"/>
            </div>
            
      </>
}