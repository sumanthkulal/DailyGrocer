# 🛒 DailyGrocer – Full-Stack Grocery Delivery Platform

DailyGrocer is a modern full-stack grocery delivery application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It provides customers with a seamless online shopping experience while enabling administrators to efficiently manage products, inventory, and orders through a dedicated dashboard.

The platform supports secure authentication, real-time cart management, online payments via Stripe, image uploads through Cloudinary, and responsive user interfaces optimized for desktop and mobile devices.

---

## 🚀 Features

### Customer Features

* User Registration & Login
* Secure JWT Authentication
* Browse Products by Category
* Product Search & Filtering
* Add to Cart / Update Quantity
* Address Management
* Cash on Delivery (COD)
* Online Payments with Stripe
* Order Placement & Tracking
* Fully Responsive Design

### Admin/Seller Features

* Seller Authentication
* Add New Products
* Upload Multiple Product Images
* Manage Inventory Status
* View Customer Orders
* Update Order Status
* Dashboard Analytics

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

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/DailyGrocer.git

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

Add the required credentials.

### 4. Run Backend

```bash
cd server

npm run server
```

### 5. Run Frontend

```bash
cd client

npm run dev
```

### 6. Open Application

```text
http://localhost:5173](https://dailygrocer-orpin.vercel.app
```

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Product Listing
* Product Details
* Cart Page
* Checkout Page
* Seller Dashboard
* Orders Management

---

## 🌟 Future Enhancements

* Product Reviews & Ratings
* Wishlist Functionality
* Coupon & Discount System
* Email Notifications
* Advanced Search Filters
* Sales Analytics Dashboard
* Multi-Vendor Support
* Progressive Web App (PWA)

---

## 👨‍💻 Author

**Sumanth Kulal**

* Full Stack Developer
* Computer Science Engineering (2026)
* MERN Stack Enthusiast

### Connect With Me

GitHub: https://github.com/sumanthkulal

LinkedIn: www.linkedin.com/in/sumanth-kulal

---

⭐ If you found this project useful, consider giving it a star on GitHub.
