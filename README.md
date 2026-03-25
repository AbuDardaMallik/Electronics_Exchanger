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

<img width="1919" height="873" alt="Screenshot 2026-03-20 190431" src="https://github.com/user-attachments/assets/b5b13752-c4df-4ab0-9e4f-d9f51db728ec" />

### SignUp Page

<img width="1919" height="875" alt="Screenshot 2026-03-20 190411" src="https://github.com/user-attachments/assets/5136b76c-8e98-4359-b684-14c967b3ba6a" />

### Home Page Before Login
<img width="1919" height="877" alt="Screenshot 2026-03-20 190306" src="https://github.com/user-attachments/assets/7ce4d843-c7a6-4b68-876b-5083c2d35a53" />

### Home Page After Login

<img width="1917" height="881" alt="Screenshot 2026-03-26 032833" src="https://github.com/user-attachments/assets/e53102c4-bcce-4056-a61d-1ed8f79b88d0" />


### Profile Page

<img width="1912" height="877" alt="Screenshot 2026-03-20 194139" src="https://github.com/user-attachments/assets/ed54041f-7204-4ea1-95fc-0e5a20b672de" />

### Add Product
<img width="1919" height="880" alt="Screenshot 2026-03-20 190710" src="https://github.com/user-attachments/assets/d8bb6665-be15-4d2a-b666-8c16450346ac" />

### Edit Product

<img width="1918" height="876" alt="Screenshot 2026-03-20 194448" src="https://github.com/user-attachments/assets/0573c2d9-281c-41a5-94fb-57ffd98ec117" />

### Chat System

<img width="1917" height="878" alt="Screenshot 2026-03-20 191529" src="https://github.com/user-attachments/assets/d17a9ed9-939c-4f2f-8893-6195ba0dc11c" />

### Exchange Dashboard
<img width="1919" height="879" alt="Screenshot 2026-03-20 191857" src="https://github.com/user-attachments/assets/1dcca64b-19fc-45b6-aef6-dceb18729942" />

### Reviews

<img width="1919" height="874" alt="Screenshot 2026-03-20 192835" src="https://github.com/user-attachments/assets/19c46590-0f78-4983-b6fc-dfc8f2d07d78" />

### Add Reviews
<img width="1919" height="872" alt="Screenshot 2026-03-26 032727" src="https://github.com/user-attachments/assets/7a336cb3-8f9a-4f5c-a4e9-b1dd0ca81529" />



### Edit Reviews
<img width="1919" height="876" alt="Screenshot 2026-03-26 032612" src="https://github.com/user-attachments/assets/1d6ed86a-89b6-4660-9b8d-8d0d0f64809c" />

### Show Page

<img width="1919" height="880" alt="Screenshot 2026-03-20 191217" src="https://github.com/user-attachments/assets/ed74e735-ef85-49b8-b4ce-ad49b3b29784" />
<img width="1912" height="878" alt="Screenshot 2026-03-20 191355" src="https://github.com/user-attachments/assets/8cf1ce12-e137-49a3-ad82-f6b88990f5bd" />


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
