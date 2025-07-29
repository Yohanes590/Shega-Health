"use client"
import { UserButton } from "@clerk/nextjs"
import { useEffect } from "react"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const pathName = window.location.pathname
    const route = pathName.split("/")[2] // Get third part of URL

    const routeMap: Record<string, string> = {
      home: ".hover-buttons1",
      "card-info": ".hover-buttons2",
      "medical-records": ".hover-buttons3",
      "lab-results": ".hover-buttons4",
      appointment: ".hover-buttons5",
      prescriptions: ".hover-buttons6",
      "emergency-info": ".hover-buttons7",
    }

    const targetClass = routeMap[route]
    if (targetClass) {
      const button = document.querySelector(targetClass) as HTMLElement
      if (button) button.style.background = "#0045635e"
    }
  }, [])
      return <>
             <div className="side-nav-bar bg-[var(--pri_color)] h-screen w-[350px] pt-[40px] fixed">
                  <div className="heading cursor-pointer pl-[30px] text-white font-bold text-[40px] ">
                        <h1>Shega <br/> Health</h1>
                  </div>  

                  <div className="sub-buttons pl-[20px] mt-[50px]">
                        <div onClick={()=>{window.location.href="/dashboard/home"}} className="hover-buttons1 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Home</div>
                        <div onClick={()=>{window.location.href="/dashboard/card-info"}} className="hover-buttons2 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Card Info</div>
                        <div onClick={()=>{window.location.href="/dashboard/medical-records"}} className="hover-buttons3 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Medical Records</div>
                        <div onClick={()=>{window.location.href="/dashboard/lab-results"}} className="hover-buttons4 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Lab Results</div>
                        <div onClick={()=>{window.location.href="/dashboard/appointment"}} className="hover-buttons5 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Appointment</div>
                        <div onClick={()=>{window.location.href="/dashboard/Prescriptions"}} className="hover-buttons5 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Prescriptions</div>
                        <div onClick={()=>{window.location.href="/dashboard/Emergency Info"}} className="hover-buttons6 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Emergency Info</div>
                  </div>

            </div>
            <div className="fixed right-[30px] mt-[20px] ">
                  <UserButton/>
            </div>
      {children}
      </>
}