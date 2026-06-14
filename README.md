# 🛠️ DigiTool - Digital Tools Marketplace

A modern, high-performance, and fully responsive E-commerce web application dedicated to digital tools. Built using the cutting-edge **React 19**, **Vite 8**, and **Tailwind CSS v4**, this application provides users with a seamless shopping cart experience, real-time price updates, and a clean checkout simulation.

## 🌐 Live Demo
👉 **[Explore DigiTool Live](https://delightful-youtiao-758695.netlify.app/)**

---

## 📸 Project Preview
*(এখানে আপনার তৈরি করা ১০ সেকেন্ডের চলন্ত GIF বা স্ক্রিনশটটি ড্র্যাগ অ্যান্ড ড্রপ করে বসিয়ে দিন)*

---

## 🚀 Features

- **Interactive Product Catalog:** Showcases modern digital tools with beautifully designed cards utilizing **DaisyUI v5**.
- **Instant Add-to-Cart:** Clicking the **"Buy Now"** button instantly pushes the selected digital tool into the user's cart.
- **Dynamic Price Calculation:** The cart automatically updates the total price in real-time as items are added, eliminating any lag.
- **Effortless Item Removal:** Users can remove any tool from their cart with a single click, instantly deducting its individual price from the total cost.
- **Seamless Checkout Simulation:** Clicking the **"Proceed"** button smoothly processes the order, triggers a success alert, and empties the cart for the next purchase.
- **Fully Responsive Layout:** Developed with a mobile-first philosophy using **Tailwind CSS v4**, ensuring pixel-perfect layout fluidity across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Tools

### Core Technologies
![React](https://img.shields.io/badge/react-19.2.6-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361dafb)
![Vite](https://img.shields.io/badge/vite-8.0.12-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### Styling & UI Components
![TailwindCSS](https://img.shields.io/badge/tailwindcss-4.3.0-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyui-5.5.19-%235A0EF8.svg?style=for-the-badge&logo=daisyui&logoColor=white)

### Dependencies & Quality Control
- **React 19 & Vite 8:** Utilizing the latest rendering engine optimization for lightweight and lightning-fast builds.
- **React Toastify v11:** Integrated to provide smooth, beautiful, and non-blocking toast notifications during cart actions.
- **ESLint 10:** Configured to enforce optimal JavaScript standard practices and maintain strict code quality.

---

## 🧠 Challenges I Faced & What I Learned

- **State Syncing & Cart Deductions:** Learned how to efficiently manage array states in React, ensuring that removing an object from the state correctly updates both the UI list and mutates the overall total price accurately.
- **Tailwind v4 Migration:** Successfully navigated the structural changes of the brand new **Tailwind CSS v4** setup, specifically integrating it through the modern `@tailwindcss/vite` configuration layer.
- **Array Methods Mastery:** Sharpened my skills using core JavaScript array methods like `.filter()` for item deletion and `.reduce()` (or conditional iteration) for accumulating the dynamic total price.
