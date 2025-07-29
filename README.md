# Shega Health – Digital Health Card Platform

## Overview
Shega Health is a digital health solution enabling patients to easily access and manage their medical records, lab results, prescriptions, and health card information.  
Our platform integrates **Telebirr payments** for card issuance and aims to simplify healthcare access in Ethiopia.

## Key Features
- **Digital Health Card**: Secure patient health card with unique QR code.  
- **Telebirr Payment Integration**: Quick and easy payment for card activation.  
- **Medical Records**: Centralized storage and easy retrieval of patient records.  
- **Lab Results & Prescriptions**: Quick access to lab results and prescriptions.  
- **User Authentication**: Implemented via Clerk for this demo, planned integration with Fayda ID.  
- **Secure Logout**: Users can safely log out of their account.

## Current Limitations
- **Fayda Login Integration Issue:**  
  There is currently a known issue with Fayda login:  
  > “There seems to be an issue with your FAN. Please contact Fayda Support.”  
  Due to time constraints and being a solo developer, the full Fayda login integration is not yet functional.  

- **Workaround:**  
  For the purpose of this hackathon demo, **user authentication is handled via Clerk**, which provides login, logout, and user info features.  
  Fayda integration is planned for the next phase.

## Tech Stack
- **Frontend**: Next.js, TailwindCSS  
- **Backend**: Node.js/Express  
- **Database**: MongoDB  
- **Authentication**: Clerk (demo) / Fayda (planned)  
- **Payment**: Telebirr API integration

## Getting Started
1. Clone the repo:  
   `git clone <your-repo-url>`
2. Install dependencies:  
   `npm install`
3. Run the development server:  
   `npm run dev`

## Future Work
- Complete Fayda ID login integration once the FAN issue is resolved.  
- Expand medical records, lab results, appointments, prescriptions, and emergency info modules.  
- Improve UI/UX and add notifications and reminders.

---

**Developed during Fayda Hackathon 2025 – Solo Developer Project**  
*Thank you for reviewing my project!*
