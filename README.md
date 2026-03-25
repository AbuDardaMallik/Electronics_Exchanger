# ElecChanger – Real-Time Electronics Exchange Platform

A full-stack web application that allows users to exchange electronic devices with others using a secure workflow and real-time chat system.
Built with Node.js, Express, MongoDB, and Socket.io.

---
##  Live Demo

 https://elecchanger.onrender.com

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Socket.io](https://img.shields.io/badge/Socket.io-Realtime-black)
![License](https://img.shields.io/badge/License-ISC-blue)


## Features

###  Authentication
- Secure user signup & login using Passport.js
- Session-based authentication

###  Product Listings
- Create, edit, delete products
- View all available electronics
- Detailed product pages

###  Exchange System
- Send exchange requests
- Accept / Reject requests
- Prevent duplicate requests
- Exchange dashboard

###  Real-Time Chat
- One-to-one private chat
- Instant message delivery (Socket.io)
- Sent ✔, Delivered ✔✔, Seen status
- Auto-scroll chat UI

###  Review & Rating
- Add reviews to products
- Star rating system
- Build user trust
---

##  Architecture

This project follows the MVC (Model-View-Controller) pattern:

- Models → MongoDB schemas
- Views → EJS templates
- Controllers → Business logic
- Routes → API endpoints
- Socket.io → Real-time communication

Data Flow:
Client → Routes → Controllers → Database → Views / Socket Events

## How It Works

1. User lists a product
2. Another user sends an exchange request
3. Owner accepts/rejects the request
4. On acceptance, users can chat in real-time
5. After exchange, users can leave reviews

## Tech Stack

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

## Project Structure (MVC)

Electronics_Exchanger/
│
├── models/ # Database schemas
├── routes/ # Express routes
├── controllers/ # Business logic
├── views/ # EJS templates
├── public/ # CSS, JS, static files
├── app.js # Main server file

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/AbuDardaMallik/Electronics_Exchanger.git
cd Electronics_Exchanger
Install dependencies:
npm install
Create a .env file:
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
Run the app:
node app.js
Open in browser:
http://localhost:8080
🔐 Environment Variables
Variable	Description
ATLASDB_URL	MongoDB connection string
SECRET	Session secret key

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/AbuDardaMallik/Electronics_Exchanger.git
cd Electronics_Exchanger

2. Install dependencies:
npm install

3. Create a .env file:
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key

4. Run the app:
node app.js

5. Open in browser:
http://localhost:8080

## Environment Variables
| Variable    | Description               |
| ----------- | ------------------------- |
| ATLASDB_URL | MongoDB connection string |
| SECRET      | Session secret key        |


---

```



## Screenshots 

## Login Page

<img width="1919" height="878" alt="Screenshot 2026-03-26 033603" src="https://github.com/user-attachments/assets/019b52f7-fa3f-43ae-8dde-7921d3a2b550" />


### SignUp Page

<img width="1919" height="881" alt="Screenshot 2026-03-26 033624" src="https://github.com/user-attachments/assets/102fcb40-3f56-4b33-b98f-5fbdbb3d7927" />


### Home Page Before Login
<img width="1919" height="880" alt="Screenshot 2026-03-26 033526" src="https://github.com/user-attachments/assets/12df0611-916e-4be0-b588-15ac74a69568" />


### Home Page After Login

<img width="1917" height="881" alt="Screenshot 2026-03-26 032833" src="https://github.com/user-attachments/assets/8f0b9997-43bd-4d36-b618-b2bbd8477421" />



### Profile Page

<img width="1919" height="881" alt="Screenshot 2026-03-26 034638" src="https://github.com/user-attachments/assets/c518c977-0f73-4db8-bfdb-47e71d0d81ac" />
<img width="1918" height="878" alt="Screenshot 2026-03-26 034658" src="https://github.com/user-attachments/assets/f5752f4c-4853-4430-8a6c-90ceceb02e89" />



### Add Product
<img width="1919" height="881" alt="Screenshot 2026-03-26 033728" src="https://github.com/user-attachments/assets/a1db9fdd-c70b-472f-890a-2ee79fb6f796" />


### Edit Product

<img width="1919" height="882" alt="Screenshot 2026-03-26 033802" src="https://github.com/user-attachments/assets/2c67f14f-6cb7-40c5-8213-6d28bb572708" />


### Chat System

<img width="1844" height="873" alt="Screenshot 2026-03-26 034423" src="https://github.com/user-attachments/assets/88f9ae4b-4c05-4860-a1ac-bb60dc72fa90" />


### Exchange Dashboard
<img width="1919" height="879" alt="Screenshot 2026-03-20 191857" src="https://github.com/user-attachments/assets/1dcca64b-19fc-45b6-aef6-dceb18729942" />

### Reviews

<img width="1919" height="874" alt="Screenshot 2026-03-20 192835" src="https://github.com/user-attachments/assets/19c46590-0f78-4983-b6fc-dfc8f2d07d78" />

### Add Reviews
<img width="1919" height="872" alt="Screenshot 2026-03-26 032727" src="https://github.com/user-attachments/assets/7a336cb3-8f9a-4f5c-a4e9-b1dd0ca81529" />



### Edit Reviews
<img width="1919" height="876" alt="Screenshot 2026-03-26 032612" src="https://github.com/user-attachments/assets/1d6ed86a-89b6-4660-9b8d-8d0d0f64809c" />

### Show Page

<img width="1919" height="880" alt="Screenshot 2026-03-26 033016" src="https://github.com/user-attachments/assets/d598b58a-ab1e-4cc9-b1d9-ac7d5d60fbbe" />



##  Future Improvements

- Typing indicator in chat
- Online/offline user status
- Push notifications
- Image upload (Cloudinary/AWS)
- Advanced search filters


---




##  Demo Login

| Email | Username | Password |
|------|----------|----------|
| abu@gmail.com | abu | abu |
| darda@gmail.com | darda | darda |
| mallik@gmail.com | mallik | mallik |

## Challenges Faced

- Implementing real-time chat using Socket.io
- Managing room-based communication
- Handling message seen logic
- Preventing duplicate exchange requests

## What I Learned

- Building scalable MVC architecture
- Real-time communication with WebSockets
- MongoDB data relationships & population
- Authentication using Passport.js

##  License

This project is licensed under the MIT License.

##  Author

**Abu Darda Mallik**

- GitHub: https://github.com/AbuDardaMallik
- Email: abudardamallik62@gmail.com

## Contribution

Contributions are welcome! Feel free to fork this repository and submit a pull request.
