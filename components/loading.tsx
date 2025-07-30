"use client"
import { BarLoader } from "react-spinners"
export default function LoadingAnimation() {
      return <>
            <div className="loading-screen h-screen w-[100%] backdrop-blur-2xl bg-[#00000056]">
            <BarLoader
            color="#008cff"
            height={4}
            />
            </div>
      </>
}