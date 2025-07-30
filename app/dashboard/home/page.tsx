"use client"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { useEffect } from "react"
export default function HomePage() {
  const { user } = useUser()
  useEffect(() => {
    if(!user) return
  const CheckUser = async () => {
    const sendingUserId = await fetch("/api/check-user/", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        userId:user?.id
      })
    })
    const ServerResponse = await sendingUserId.json()
    console.log(ServerResponse)
  }
  CheckUser()
}, [user]) 

  return (
    <div className="home-cards ml-[400px] pt-[150px]">
      <div className="user-name-display">
        <p className="text-[24px]">Welcome back, {user?.fullName} 👋</p>
        <p>Here&apos;s your health summary</p>
      </div>
      <div className="flex-sections flex flex-wrap pt-[20px] gap-5">
        <div className="each-card pl-[40px] pt-[20px] cursor-default bg-[white] h-[200px] w-[710px]">
          <div className="each-info pt-[5px] text-[22px] font-bold">
            <h1>Medical Records</h1>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              Last Visit: <span className="text-[#666666]">July 15</span>
            </h2>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              Diagnosis: <span className="text-[#666666]">Asthma</span>
            </h2>
          </div>
          <div className="a-button mt-[20px]">
            <Link href="" className="text-[#2E86AB]">
              View Full History{" "}
            </Link>
          </div>
        </div>

        <div className="each-card pl-[40px] pt-[20px] cursor-default bg-[white] h-[200px] w-[710px]">
          <div className="each-info pt-[5px] text-[22px] font-bold">
            <h1>Prescriptions </h1>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              Amoxicillin: <span className="text-[#666666]">(2x/day)</span>
            </h2>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              Issued: <span className="text-[#666666]">July 15 - 2025</span>
            </h2>
          </div>
          <div className="a-button mt-[20px]">
            <Link href="" className="text-[#2E86AB]">
              View All{" "}
            </Link>
          </div>
        </div>

        <div className="each-card pl-[40px] pt-[20px] cursor-default bg-[white] h-[200px] w-[710px]">
          <div className="each-info pt-[5px] text-[22px] font-bold">
            <h1>Lab Results </h1>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              CBC Test: <span className="text-[#666666]">Normal</span>
            </h2>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              Date: <span className="text-[#666666]">July 13 - 2025</span>
            </h2>
          </div>
          <div className="a-button mt-[20px]">
            <Link href="" className="text-[#2E86AB]">
              View Report{" "}
            </Link>
          </div>
        </div>

        <div className="each-card pl-[40px] pt-[20px] cursor-default bg-[white] h-[200px] w-[710px]">
          <div className="each-info pt-[5px] text-[22px] font-bold">
            <h1>Emergency Info </h1>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              Blood Type: <span className="text-[#666666]">O+</span>
            </h2>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              Allergy: <span className="text-[#666666]">Penicillin</span>
            </h2>
          </div>
          <div className="each-info pt-[5px] text-[22px]">
            <h2>
              Chronic: <span className="text-[#666666]">Asthma</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
