# 🛍️MyShop – React E-commerce Application

A **production-style E-commerce frontend application** built using **React, Redux Toolkit, and Tailwind CSS**.  
The project showcases **dynamic routing, category-based filtering via home page images, and scalable state management**, making it suitable for frontend internships and junior developer roles.

🔗 **Live Link:** https://myshopdev.vercel.app/

---

## 🎯 Project Highlights

- Category-based product filtering using **dynamic URLs**
- **Home page category images** trigger filtering on click
- Dynamic routing with React Router
- Centralized cart and product state using Redux Toolkit
- Modular and reusable component structure
- Fully responsive UI
- Deployed on Vercel

---

## 🚀 Features

- Dynamic product listing
- Category filter via Home page images
- Dynamic category routes (e.g. `/category/denim`)
- Add / Remove products from cart
- Cart quantity & total price calculation
- Order placement flow with success popup
- Global state management (Redux Toolkit)
- Client-side routing
- Mobile-first responsive design

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS

**Tooling & Deployment**
- Vite
- Git & GitHub
- Vercel

---

## 📁 Project Structure

src/
│── assets/
│ └── Homepagee/
│ ├── 1.png
│ ├── 2.png
│ ├── 3.png
│ ├── 4.png
│ ├── beauty.webp
│ ├── fragrances.webp
│ ├── furniture.jpg
│ └── groceries.jpg
│
│── sounds/
│ └── Congratulationspopup.mp3
│
│── Componenets/
│ ├── AddItemButton.jsx
│ ├── Button.jsx
│ ├── Card.jsx
│ ├── CartCheck.jsx
│ ├── FilteredProductsCard.jsx
│ ├── FilterItems.jsx
│ ├── navbar.jsx
│ ├── OrderForm.jsx
│ ├── OrderProduct.jsx
│ ├── poster.jsx
│ ├── ProductDetail.jsx
│ ├── SuccessPopup.jsx
│ └── ThemeToggleButton.jsx
│
│── layouts/
│ ├── cartlayouts.jsx
│ └── ProductDetailLayout.jsx
│
│── Pages/
│ ├── Cartitem.jsx
│ ├── Footer.jsx
│ ├── header.jsx
│ ├── Home.jsx
│ ├── NotFoundPage.jsx
│ ├── Order.jsx
│ └── Product.jsx
│
│── redux/
│ ├── dummyproducts.js
│ ├── slice.js
│ └── Store.js
│
│── App.jsx
│── main.jsx
│── index.css

---

## ⚙️ Local Setup

```bash
git clone https://github.com/ajitdevv/myshop
cd myshop
npm install
npm run dev
