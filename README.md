# ElecChanger – Real-Time Electronics Exchange Platform

ElecChanger is a full-stack web application that allows users to exchange electronic gadgets with others. The platform includes a real-time chat system, exchange request workflow, and product review system.

---

## Features

### Authentication

- User signup & login (Passport.js)
- Secure session management

### Product System

- Add, edit, delete product listings
- View all available products
- Each product has detailed information

### Exchange System

- Send exchange requests
- Accept / Reject requests
- Dashboard for sent & received exchanges
- Prevent duplicate requests

### Real-Time Chat

- One-to-one private chat using Socket.io
- Instant message delivery
- Single tick (sent)
- Double tick (delivered)
- Seen status
- Auto-scroll & modern chat UI

### Review & Rating System

- Users can review products
- Each product has its own review section
- Ratings help build trust between users

---

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

---

##  Features Screenshot Section
## Login Page
<img width="1919" height="873" alt="Screenshot 2026-03-20 190431" src="https://github.com/user-attachments/assets/b5b13752-c4df-4ab0-9e4f-d9f51db728ec" />

### SignUp Page
<img width="1919" height="875" alt="Screenshot 2026-03-20 190411" src="https://github.com/user-attachments/assets/5136b76c-8e98-4359-b684-14c967b3ba6a" />

###  Home Page Before Login
<img width="1919" height="877" alt="Screenshot 2026-03-20 190306" src="https://github.com/user-attachments/assets/7ce4d843-c7a6-4b68-876b-5083c2d35a53" />

###  Home Page After Login
<img width="1918" height="873" alt="Screenshot 2026-03-20 190529" src="https://github.com/user-attachments/assets/6572c35b-3561-432e-a006-add20ca79c75" />

### Profile Page
<img width="1912" height="877" alt="Screenshot 2026-03-20 194139" src="https://github.com/user-attachments/assets/ed54041f-7204-4ea1-95fc-0e5a20b672de" />

###  Add Product
<img width="1919" height="880" alt="Screenshot 2026-03-20 190710" src="https://github.com/user-attachments/assets/d8bb6665-be15-4d2a-b666-8c16450346ac" />

###  Edit Product
<img width="1918" height="876" alt="Screenshot 2026-03-20 194448" src="https://github.com/user-attachments/assets/0573c2d9-281c-41a5-94fb-57ffd98ec117" />


###  Chat System
<img width="1917" height="878" alt="Screenshot 2026-03-20 191529" src="https://github.com/user-attachments/assets/d17a9ed9-939c-4f2f-8893-6195ba0dc11c" />

###  Exchange Dashboard
<img width="1919" height="879" alt="Screenshot 2026-03-20 191857" src="https://github.com/user-attachments/assets/1dcca64b-19fc-45b6-aef6-dceb18729942" />

###  Reviews
<img width="1919" height="874" alt="Screenshot 2026-03-20 192835" src="https://github.com/user-attachments/assets/19c46590-0f78-4983-b6fc-dfc8f2d07d78" />

###  Add Reviews
<img width="1919" height="880" alt="Screenshot 2026-03-20 190804" src="https://github.com/user-attachments/assets/9ddd5ad1-6ed4-4993-ab6b-fc0c6a277f08" />

###  Edit Reviews
<img width="1919" height="885" alt="Screenshot 2026-03-20 191252" src="https://github.com/user-attachments/assets/87386e82-eb45-4e9a-88ce-baed8886c16b" />


### Show Page 
<img width="1919" height="880" alt="Screenshot 2026-03-20 191217" src="https://github.com/user-attachments/assets/ed74e735-ef85-49b8-b4ce-ad49b3b29784" />
<img width="1912" height="878" alt="Screenshot 2026-03-20 191355" src="https://github.com/user-attachments/assets/8cf1ce12-e137-49a3-ad82-f6b88990f5bd" />

##  Live Demo
Coming soon...

##  How It Works

1. User lists a product
2. Another user sends an exchange request
3. Owner accepts/rejects the request
4. On acceptance, users can chat in real-time
5. After exchange, users can leave reviews

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/AbuDardaMallik/Electronics_Exchanger.git

2. Install dependencies:
      npm install

3. Start MongoDB:
      mongosh

4. Run the server:
      nodemon app.js

5. Open in browser:
      http://localhost:8080/listings
```

##  Demo Login

Email: abu@gmail.com 
username: abu
Password: abu

Email: umme@gmail.com 
username: umme
Password: umme

Email: habiba@gmail.com 
username: habiba
Password: habiba


##  Challenges Faced

- Implementing real-time chat using Socket.io
- Managing room-based communication
- Handling message seen logic
- Preventing duplicate exchange requests

##  What I Learned

- Building scalable MVC architecture
- Real-time communication with WebSockets
- MongoDB data relationships & population
- Authentication using Passport.js

##  Contribution

Contributions are welcome! Feel free to fork this repository and submit a pull request.

##  License

This project is licensed under the MIT License.

##  Author

Abu Darda Mallik  
abudardamallik62@gmail.com  
GitHub: https://github.com/AbuDardaMallik
