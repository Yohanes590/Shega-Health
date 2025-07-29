"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PaymentSuccess() {
  const router = useRouter()

  useEffect(() => {
    // Mark card as bought locally
    localStorage.setItem("hasBoughtCard", "true")

    // Optionally redirect to dashboard after 2 seconds
    const timeout = setTimeout(() => {
      router.push("/dashboard/card-info")
    }, 2000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-4">Redirecting to your dashboard...</p>
    </div>
  )
}
