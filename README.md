# 🛒 MERN E-Commerce Application

## 📌 Project Overview

This is a full-stack E-commerce web application built using the MERN stack.
It allows users to browse products, add items to cart, place orders, and make payments.
The application also includes an admin panel for managing products and orders.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login
* Browse Products
* Search Products
* Add to Cart / Remove from Cart
* Manage Delivery Address
* Place Orders
* Online Payment (PayPal)
* Product Reviews

### 🛠️ Admin Features

* Add / Update / Delete Products
* Manage Orders
* Manage Featured Products

---

## 🏗️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Other Integrations

* Cloudinary (Image Upload)
* PayPal (Payment Gateway)

---

## 📂 Project Structure

```
mern-ecommerce/
│
├── client/
│   ├── src/
│   └── public/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── helpers/
│   └── server.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/your-username/E-commerce.git
cd E-commerce
```

### 2. Setup Backend

```
cd server
npm install
```

Create `.env` file inside server folder:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

### 3. Setup Frontend

```
cd client
npm install
```

### 4. Run the Project

Start Backend:

```
cd server
npm start
```

Start Frontend:

```
cd client
npm run dev
```

---

## 👨‍💻 Author

Bharath K Shet
Shivamogga

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 📜 License

This project is licensed under the MIT License.
