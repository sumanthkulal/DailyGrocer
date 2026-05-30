# 🛒 DailyGrocer – Full-Stack Grocery Delivery Platform

DailyGrocer is a modern full-stack grocery delivery application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The platform provides customers with a seamless online shopping experience while enabling administrators to efficiently manage products, inventory, and orders through a dedicated dashboard.

It features secure authentication, real-time cart management, Stripe payment integration, Cloudinary image storage, and a fully responsive user interface optimized for desktop and mobile devices.

---

## 🌐 Live Demo

🚀 **Live Application:** https://dailygrocer-orpin.vercel.app

Experience the complete grocery shopping workflow including product browsing, cart management, checkout, and order placement.

---

## 🎯 Project Highlights

* Built a complete full-stack MERN application from scratch.
* Implemented secure JWT Authentication using HTTP-only cookies.
* Integrated Stripe Payment Gateway for online transactions.
* Managed product image uploads using Cloudinary.
* Developed responsive UI with React and Tailwind CSS.
* Implemented role-based Seller/Admin Dashboard.
* Designed RESTful APIs using Express.js and MongoDB.
* Deployed production-ready frontend and backend infrastructure.

---

## 🚀 Features

### Customer Features

* User Registration & Login
* Secure JWT Authentication
* Browse Products by Category
* Product Search & Filtering
* Add to Cart & Update Quantity
* Address Management
* Cash on Delivery (COD)
* Online Payments via Stripe
* Order Placement & Tracking
* Responsive Mobile-Friendly Design

### Admin/Seller Features

* Seller Authentication
* Add New Products
* Upload Multiple Product Images
* Manage Product Inventory
* View Customer Orders
* Update Order Status
* Dashboard Management

---

## 🏗️ System Architecture

```text
+--------------------------------------------------------------------------+
|                             Frontend Client                              |
|          Vite Core Runtime Hub  <-->  Stateless Global Context           |
|                                         |                                |
|                                         v                                |
|                               React Router DOM Engine                    |
+--------------------------------------------------------------------------+
                                     |
                       Asynchronous HTTP Transports 
                         (Axios / httpOnly Credentials)
                                     |
                                     v
+--------------------------------------------------------------------------+
|                             Backend API Gateway                          |
|             Express Route Interceptor  <--> JWT Token Verification       |
+--------------------------------------------------------------------------+
         |                                |                        |
   Multer Parsing Buffers        Stripe Session Factory     Mongoose ODM Layers
         |                                |                        |
         v                                v                        v
+------------------+             +------------------+     +----------------+
|  Cloudinary CDN  |             |  Stripe Checkout |     |  MongoDB Atlas |
|   Asset Vault    |             |  Gateway Panel   |     | Database Core  |
+------------------+             +------------------+     +----------------+
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Tailwind CSS
* Axios
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* BcryptJS
* Multer

### Third-Party Services

* Cloudinary
* Stripe

---

## 📂 Project Structure

```text
DailyGrocer/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── package.json
│
└── README.md
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | `/api/user/register` | Register User        |
| POST   | `/api/user/login`    | Login User           |
| GET    | `/api/user/is-auth`  | Check Authentication |
| GET    | `/api/user/logout`   | Logout User          |

### Products

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| GET    | `/api/product/list`  | Get All Products |
| POST   | `/api/product/add`   | Add Product      |
| POST   | `/api/product/stock` | Update Stock     |

### Cart & Address

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/cart/update` | Update Cart   |
| POST   | `/api/address/add` | Add Address   |
| GET    | `/api/address/get` | Get Addresses |

### Orders

| Method | Endpoint            | Description                    |
| ------ | ------------------- | ------------------------------ |
| POST   | `/api/order/cod`    | Place COD Order                |
| POST   | `/api/order/stripe` | Create Stripe Checkout Session |

---

## ⚙️ Environment Variables

### Backend (`server/.env`)

```env
PORT=4000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

NODE_ENV=development

SELLER_EMAIL=admin@example.com
SELLER_PASSWORD=your_admin_password

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### Frontend (`client/.env`)

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=$
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/sumanthkulal/DailyGrocer.git

cd DailyGrocer
```

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

### 3. Configure Environment Variables

Create `.env` files inside:

```text
server/.env
client/.env
```

Add the required environment variables.

### 4. Run Backend Server

```bash
cd server
npm run server
```

### 5. Run Frontend Application

```bash
cd client
npm run dev
```

### 6. Open Application

```text
http://localhost:5173
```

---

## 🌟 Future Enhancements

* Product Reviews & Ratings
* Wishlist Functionality
* Coupon & Discount System
* Email Notifications
* Advanced Search & Filters
* Sales Analytics Dashboard
* Multi-Vendor Marketplace Support
* Progressive Web App (PWA)

---

## 👨‍💻 Developer

**Sumanth Kulal**

Full Stack Developer | MERN Stack Developer | Computer Science Engineering (2026)

### 📬 Connect With Me

🔗 GitHub
https://github.com/sumanthkulal

💼 LinkedIn
https://www.linkedin.com/in/sumanth-kulal

🌐 Live Project
https://dailygrocer-orpin.vercel.app

---

⭐ If you found this project useful, consider giving it a star on GitHub.
