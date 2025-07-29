"use client";
import { useEffect } from "react";
export default function CallbackPage() {
   useEffect(() => {
  fetch("/api/auth/userinfo")
    .then(res => res.json())
    .then(data => console.log("User info:", data))
    .catch(err => console.error(err));
}, []);

  return <div>Fetching user data...</div>;
}
