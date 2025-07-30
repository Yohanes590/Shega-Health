# Shega Health Hackathon Project

## Overview

Shega Health is a simple but powerful healthcare app demo built for the Fayda Hackathon. It provides users with secure authentication, patient card management, and a payment system integrated with local banks.

---

## Tech Stack

- **Frontend:** Next.js (React framework) with Tailwind CSS  
- **Authentication:** Clerk.dev  
- **Payment Integration:** Chapa API (local bank payment gateway)  
- **State Management:** React hooks (useState, useEffect)  
- **Deployment:** (Add your deployment platform if any, e.g., Vercel)  

---

## Features Completed

- **User Authentication with Clerk:**  
  Users can register and log in securely using Clerk. User information like full name is displayed on the Home page.

- **Payment Integration with Local Banks:**  
  The payment system uses a local bank gateway (via Chapa API) to enable users to buy a patient card. Payment flow is fully functional and redirects users after successful payment.

- **Core Pages:**  
  - **Home:** Welcomes logged-in users with personalized greetings and a health summary.  
  - **Card Info:** Displays patient card status and demo card details (e.g., card number, diagnosis) with clear calls to action if verification/payment is needed.

---

## Landing Page Design

The landing page is designed to warmly welcome users and clearly communicate the purpose of Shega Health. It features:

- A clean, modern look with brand colors  
- Clear calls to action for login and payment  
- Responsive design for both desktop and mobile  

![Landing Page Screenshot](/public/Landing%20Page.jpg)

The user dashboard design is currently under development and will provide personalized health insights and card management.

---

## Features In Progress / Planned

- **National ID Login with Fayda:**  
  Integration of Fayda’s national ID login is about 70% complete but currently not stable. It will be finalized and fully integrated after the hackathon.

- **Additional Medical Features:**  
  Pages such as Medical Records, Lab Results, Appointment, Prescriptions, and Emergency Info are planned but not yet implemented.

---

## Known Issues

- Some demo data is used in the Card Info section; this will be replaced with real backend data in the next version.  
- Fayda login and user data fetching need more work to become reliable.

---

## How to Run Locally

1. Clone the repository.  
2. Install dependencies with:  
   ```bash
   npm install
