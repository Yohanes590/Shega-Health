"use client"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || ""
  const route = pathname.split("/")[2] || ""

  function isActive(routeName: string) {
    return route === routeName
  }

  const baseBtnClasses =
    "transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]"
  const activeBtnStyle = "bg-[#0045635e]"

  const { user } = useUser()

  return (
    <>
      <div className="side-nav-bar bg-[var(--pri_color)] h-screen w-[350px] pt-[40px] fixed">
        <div className="heading cursor-pointer pl-[30px] text-white font-bold text-[40px] ">
          <h1>
            Shega <br />
            Health
          </h1>
        </div>

        <div className="sub-buttons pl-[20px] mt-[50px] space-y-2">
          <div
            onClick={() => window.location.assign("/dashboard/home")}
            className={`hover-buttons1 ${baseBtnClasses} ${isActive("home") ? activeBtnStyle : ""}`}
          >
            Home
          </div>
          <div
            onClick={() => window.location.assign("/dashboard/card-info")}
            className={`hover-buttons2 ${baseBtnClasses} ${isActive("card-info") ? activeBtnStyle : ""}`}
          >
            Card Info
          </div>
          <div
            onClick={() => window.location.assign("/dashboard/medical-records")}
            className={`hover-buttons3 ${baseBtnClasses} ${isActive("medical-records") ? activeBtnStyle : ""}`}
          >
            Medical Records
          </div>
          <div
            onClick={() => window.location.assign("/dashboard/lab-results")}
            className={`hover-buttons4 ${baseBtnClasses} ${isActive("lab-results") ? activeBtnStyle : ""}`}
          >
            Lab Results
          </div>
          <div
            onClick={() => window.location.assign("/dashboard/appointment")}
            className={`hover-buttons5 ${baseBtnClasses} ${isActive("appointment") ? activeBtnStyle : ""}`}
          >
            Appointment
          </div>
          <div
            onClick={() => window.location.assign("/dashboard/prescriptions")}
            className={`hover-buttons6 ${baseBtnClasses} ${isActive("prescriptions") ? activeBtnStyle : ""}`}
          >
            Prescriptions
          </div>
          <div
            onClick={() => window.location.assign("/dashboard/Emergency-Info")}
            className={`hover-buttons7 ${baseBtnClasses} ${isActive("Emergency-Info") ? activeBtnStyle : ""}`}
          >
            Emergency Info
          </div>
        </div>
      </div>

      <div className="fixed right-[30px] mt-[20px]">
        <UserButton />
      </div>

      {children}
    </>
  )
}
