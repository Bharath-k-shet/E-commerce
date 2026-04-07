🛒 MERN E-Commerce Application
📌 Project Overview

This is a full-stack E-commerce web application built using the MERN stack. It allows users to browse products, add items to cart, place orders, and make payments. The application also includes an admin panel for managing products and orders.

🚀 Features
👤 User Features
User Registration & Login
Browse Products
Search Products
Add to Cart / Remove from Cart
Manage Delivery Address
Place Orders
Online Payment (PayPal)
Product Reviews
🛠️ Admin Features
Add / Update / Delete Products
Manage Orders
Manage Featured Products
🏗️ Tech Stack
Frontend (client/)
React.js (Vite)
Tailwind CSS
Axios
Backend (server/)
Node.js
Express.js
Database
MongoDB
Other Integrations
Cloudinary (Image Upload)
PayPal (Payment Gateway)
📂 Project Structure
mern-ecommerce/
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   └── public/
│
├── server/                # Backend (Node + Express)
│   ├── controllers/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── shop/
│   │   └── common/
│   ├── models/
│   ├── routes/
│   ├── helpers/
│   └── server.js
⚙️ Installation & Setup
🔹 1. Clone the Repository
git clone https://github.com/your-username/E-commerce.git
cd E-commerce
🔹 2. Setup Backend
cd server
npm install

Create .env file inside server/:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
🔹 3. Setup Frontend
cd client
npm install
🔹 4. Run the Project
Start Backend
cd server
npm start
Start Frontend
cd client
npm run dev
🌐 API Modules
Auth: Login / Register
Products: Fetch & Manage Products
Cart: Add / Remove Items
Orders: Place & Track Orders
Reviews: Product Reviews
Search: Product Search
💳 Payment Integration
PayPal payment gateway is integrated for secure transactions.
☁️ Image Upload
Cloudinary is used for storing and managing product images.
📸 Screenshots

(Add your project screenshots here)
