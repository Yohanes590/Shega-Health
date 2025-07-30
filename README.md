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

## Features Implemented
- Patient Card Info (completed)
- Medical Records (UI placeholder)
- Lab Results (UI placeholder)
- Appointments (UI placeholder)
- Prescriptions (UI placeholder)
- Emergency Info (UI placeholder)

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
3. you can see the web on http://localhost:3000/
   ```bash
   npm install
   npm run dev
