"use client"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"

export default function CardInfo() {
  const { user } = useUser()
  const [userBoughtCard, setUserBoughtCard] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fakeCardNumber, setFakeCardNumber] = useState<string | null>(null)

  useEffect(() => {
    // Check if user bought card
    const bought = localStorage.getItem("hasBoughtCard") === "true"
    setUserBoughtCard(bought)

    // Generate or fetch persistent fake card number if paid
    if (bought) {
      let card = localStorage.getItem("fakeCardNumber")
      if (!card) {
        card = "SC-" + Math.floor(100000000000 + Math.random() * 900000000000)
        localStorage.setItem("fakeCardNumber", card)
      }
      setFakeCardNumber(card)
    }
  }, [])

  async function handlePay() {
    setLoading(true)
    const res = await fetch("/api/chapa-init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: "400",
        email: user?.primaryEmailAddress?.emailAddress || "user@example.com",
        first_name: user?.firstName || "FirstName",
        last_name: user?.lastName || "LastName",
        phone_number: "0912345678",
      }),
    })

    const data = await res.json()
    setLoading(false)

    if (data.status === "success" && data.data.checkout_url) {
      window.location.href = data.data.checkout_url
    } else {
      alert("Payment initialization failed: " + data.message)
    }
  }

  return (
    <div className="ml-[400px]">
      {!userBoughtCard ? (
        <>
          <div className="user-name-display pt-[150px]">
            <p className="text-[24px]">Please Verify Your Card</p>
            <p>Follow These Steps</p>
          </div>
          <div className="simple-card w-[400px] mt-[40px] h-[200px] bg-white rounded shadow p-5">
            <div className="card-content">
              <h1 className="font-bold text-[22px]">Patient Card Price</h1>
              <p>400 ETB</p>
              <button
                disabled={loading}
                onClick={handlePay}
                className="mt-[20px] w-[95%] cursor-pointer text-white h-[50px] bg-green-600 rounded disabled:opacity-50"
              >
                {loading ? "Processing..." : "Pay now"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="main-card pt-[150px]">
          <div className="paid-card-info bg-white w-[400px] p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Your Patient Card</h2>
            <p>
              <strong>Name:</strong> {user?.fullName || "Unknown User"}
            </p>
            <p>
              <strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}
            </p>
            <p>
              <strong>Card Number:</strong>{" "}
              {fakeCardNumber ? (
                <span className="font-mono">{fakeCardNumber}</span>
              ) : (
                <span className="text-gray-400">Generating...</span>
              )}
            </p>
            <p className="mt-2 text-green-600 font-semibold">Status: Active</p>
          </div>
        </div>
      )}
    </div>
  )
}
