export async function POST(req) {
  const body = await req.json();
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.CHAPA_SECRET_KEY}`);
  headers.append("Content-Type", "application/json");

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const chapaBody = JSON.stringify({
    amount: body.amount,
    currency: "ETB",
    email: body.email,
    first_name: body.first_name,
    last_name: body.last_name,
    phone_number: body.phone_number,
    tx_ref: `card-${Date.now()}`,
    callback_url: `${appUrl}/api/webhook`,
    return_url: `${appUrl}/payment-success`,
    "customization[title]": "Patient Card Payment",
    "customization[description]": "Payment for patient card",
  });

  const response = await fetch("https://api.chapa.co/v1/transaction/initialize", {
    method: "POST",
    headers,
    body: chapaBody,
  });

  const data = await response.json();
  return Response.json(data);
}
