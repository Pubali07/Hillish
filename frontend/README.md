# 🌿 Hillish — Taste of North-East India

**Hillish** is a full-stack food ordering platform inspired by the rich culinary heritage of **North-East India**.
The brand focuses on **local condiments, indigenous ingredients, and traditional recipes**, bringing authentic hill flavors to everyone.

From fermented delicacies to hand-picked spices, Hillish celebrates food that is **pure, local, and deeply rooted in culture**.

---

## 🧭 Brand Philosophy

* 🌱 Locally sourced North-Eastern ingredients
* 🏔️ Inspired by hill culture and traditional cooking
* 🍃 Minimal processing, authentic taste
* ❤️ Supporting local farmers and artisans

Hillish is not just food — it’s a **story from the hills**.

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* React Router
* Context API (Global State)
* CSS (custom styling)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Stripe (Checkout Payments)

---

## 💳 Payment Integration

* Secure online payments using **Stripe Checkout**
* Redirect-based Stripe session flow
* Test & Live mode supported

---

## 📦 Features

* 🛒 Add local food items to cart
* 🧾 Real-time cart total calculation
* 📍 Delivery details collection
* 💳 Secure payment via Stripe
* 📦 Order creation & storage in MongoDB
* 🔐 Environment-based configuration

---

## 🗂️ Project Structure

```
hillish/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   └── index.html
│
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
STRIPE_SECRET_KEY=your_stripe_secret_key
```

⚠️ Never commit `.env` to GitHub.

---

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
npm run server
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌏 Future Enhancements

* Admin dashboard for product management
* Order history & tracking
* User authentication
* Regional language support
* Subscription boxes for condiments

---

## 🧑‍💻 Developed By

**Pubali Saikia**
Full-Stack Developer
🌄 Inspired by North-East India

---

## ❤️ A Note

Hillish is built with love for local food, culture, and technology — aiming to preserve traditional flavors while embracing modern platforms.
