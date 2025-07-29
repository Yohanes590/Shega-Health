"use client"
import { useEffect } from "react"
export default function HomePage() {
  useEffect(() => {
  window.location.href="/login"
  })
  return <>
    <div className="h-screen w-[100%] flex justify-center items-center">
            <h1>Loading ...</h1>
    </div>
  </>
}