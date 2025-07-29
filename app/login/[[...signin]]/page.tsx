"use client"
import { SignIn } from "@clerk/nextjs";
export default function Login() {
const handleLogin = () => {
  window.location.href = "/api/auth/login";
};
      return <>
            <div className="sign-in-box h-screen w-full flex justify-center items-center">
                  <div className="login-box-center w-[auto] h-[auto] bg-white ">
                        <SignIn afterSignInUrl="/dashboard/home"/>
                        <div className="login-button text-center mt-[20px]">
                              <button onClick={handleLogin} className="w-[350px] bg-green-500 text-white cursor-pointer h-[50px] ">Login With Fayda</button>
                        </div>
                  </div>
            </div>
            
      </>
}