# Shega Health Hackathon Project

## Overview

Shega Health is a simple but powerful healthcare app demo built for the Fayda Hackathon. It provides users with secure authentication, patient card management, and a payment system integrated with local banks.

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

## How to Run

1. Clone the repository.  
2. Install dependencies with `npm install` or `yarn`.  
3. Configure your environment variables for Clerk and Chapa payment API keys.  
4. Run the app locally with `npm run dev` or `yarn dev`.  
5. Navigate to `/login` to authenticate via Clerk.  
6. Use the payment button on Card Info to test payment flow.

---

## Final Notes

This project was built solo under a tight deadline for the Fayda Hackathon. The focus was on delivering a working MVP with solid user authentication and payment integration.

Thank you for reviewing this submission — feedback and support are greatly appreciated!

---

*Developer:* [Your Name]  
*Email:* your.email@example.com  
*GitHub:* https://github.com/yourusername
