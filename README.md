#  ElecChanger – Electronics Exchange Platform

ElecChanger is a full-stack web application that allows users to exchange electronic gadgets with others. The platform includes a real-time chat system, exchange request workflow, and product review system.

---

##  Features

###  Authentication
- User signup & login (Passport.js)
- Secure session management

###  Product System
- Add, edit, delete product listings
- View all available products
- Each product has detailed information

###  Exchange System
- Send exchange requests
- Accept / Reject requests
- Dashboard for sent & received exchanges
- Prevent duplicate requests

###  Real-Time Chat
- One-to-one private chat using Socket.io
- Instant message delivery
-  Single tick (sent)
-  Double tick (delivered)
-  Seen status
- Auto-scroll & modern chat UI

###  Review & Rating System
- Users can review products
- Each product has its own review section
- Ratings help build trust between users

---

##  Tech Stack

**Frontend:**
- EJS (Embedded JavaScript)
- HTML, CSS, Bootstrap

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose)

**Authentication:**
- Passport.js

**Real-time:**
- Socket.io

---

##  Project Structure (MVC)
Electronics_Exchanger/
│
├── models/ # Database schemas
├── routes/ # Express routes
├── controllers/ # Business logic
├── views/ # EJS templates
├── public/ # CSS, JS, static files
├── app.js # Main server file

---

##  Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/ElecChanger.git

2. Install dependencies:
      npm install

3. Start MongoDB:
      mongosh

4. Run the server:
      nodemon app.js

5. Open in browser:
      http://localhost:8080/listings
>>>>>>> 7ff1b307fb2608f3aea9cdf6a0cbbb865748ce3b
