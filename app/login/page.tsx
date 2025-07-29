"use client"
export default function Login() {
const handleLogin = () => {
  window.location.href = "/api/auth/login";
};
      return <>
            <div className="sign-in-box h-screen w-full flex justify-center items-center">
                  <div className="login-box-center w-[400px] h-[200px] bg-white ">
                        <div className="box-header pt-[25px] pl-[20px]">
                        <h1 className="text-[22px] font-bold">Sign In</h1>
                        <h1 className="">to continue shega health</h1>
                        </div>
                        <div className="login-button text-center mt-[20px]">
                              <button onClick={handleLogin} className="w-[350px] bg-green-500 text-white cursor-pointer h-[50px] ">Login With Fayda</button>
                        </div>
                  </div>
            </div>
            
      </>
}