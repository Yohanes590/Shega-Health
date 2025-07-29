export async function POST(req) {
  const body = await req.json();

  // Verify payment with Chapa (optional but best practice)
  const verify = await fetch(`https://api.chapa.co/v1/transaction/verify/${body.tx_ref}`, {
    headers: { Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}` },
  });
  const result = await verify.json();

  if (result.status === "success") {
    // Update your database here: mark user as paid
    console.log("Payment successful:", result.data);
  }

  return Response.json({ received: true });
}
