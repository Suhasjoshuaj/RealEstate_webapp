# 🏡 Real Estate Platform

A dynamic, full-stack real estate web application built with **Vite**, **Convex**, **Cloudinary**, **Resend**, and a custom **Node.js backend**.  
This project enables property listings with images, real-time updates via **Convex**, and contact form handling via email — all powered by a modern web stack.

---

## 🚀 Tech Stack

| Layer | Tech / Service | Description |
|-------|----------------|-------------|
| **Frontend** | [Vite](https://vitejs.dev/) | Fast development build tool for the web app. |
| **Backend** | [Node.js](https://nodejs.org/) + Express | Handles form submissions and server-side logic. |
| **Database** | [Convex](https://convex.dev/) | Serverless real-time database with schema validation and reactive queries. |
| **Email Service** | [Resend](https://resend.com/) | Sends automated emails from the contact form to Zoho Mail. |
| **Image Hosting** | [Cloudinary](https://cloudinary.com/) | Stores and serves images for property listings. |
| **Environment Config** | dotenv | Manages environment variables securely. |

---

## 🧭 Project Structure

```
RealEstate_webapp/
├── backend/
│   ├── .env
│   ├── package.json
│   ├── server.js              # Express backend for form submission & API routes
│   └── node_modules/
│
├── convex/
│   ├── _generated/
│   │   ├── api.js
│   │   ├── api.d.ts
│   │   ├── dataModel.d.ts
│   │   ├── server.d.ts
│   │   └── server.js
│   ├── schema.ts              # Convex schema definition for dynamic database
│   ├── property.ts            # Functions handling property data (CRUD)
│   ├── seed.ts                # Script to seed the Convex database
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   │   ├── script.js          # Frontend logic, fetches & displays properties
│   │   └── styles.css         # Styles for the app
│   ├── index.html             # Entry point
│   ├── .env.local             # Frontend environment variables (e.g., Convex URL)
│   ├── package.json
│   └── node_modules/
│
└── .gitignore
```

---

## ⚙️ Environment Variables

### Backend (`/backend/.env`)
```env
RESEND_API_KEY=your_resend_api_key
ZOHO_EMAIL=your_zoho_email_address
```

### Frontend (`/frontend/.env.local`)
```env
VITE_CONVEX_URL=your_convex_deployment_url
```

---

## 🧩 Features

- **Property Management**: Create, update, and list property data stored in Convex.
- **Cloudinary Integration**: Upload and host property images dynamically.
- **Convex Dynamic Database**: Schema-driven, real-time storage with strong typing.
- **Email Automation**: Contact form sends inquiries directly to your Zoho mail using Resend.
- **Modern Frontend Stack**: Vite + Vanilla JS for blazing-fast dev experience.
- **Environment-based Config**: Securely separates frontend and backend secrets.

---

## 🏗️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Suhasjoshuaj/RealEstate_webapp.git
cd RealEstate_webapp
```

### 2️⃣ Install Dependencies
```bash
# Backend
cd backend
npm install

# Convex
cd ../convex
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Setup Convex
```bash
npx convex dev
```
This will create the necessary backend and deploy your Convex functions.

### 4️⃣ Seed the Database
```bash
npx convex run
```
Or you can manually seed the database through Convex Dashboard.

### 5️⃣ Run the Backend Server
```bash
cd backend
node server.js
```

### 6️⃣ Run the Frontend (Vite)
```bash
cd frontend
npm run dev
```
Access your app at **http://localhost:5173** (by default).

---

## 📸 Image Upload Flow (Cloudinary)

1. Images are uploaded to **Cloudinary** through a signed upload request.
2. Cloudinary returns a **secure image URL**.
3. That URL is stored in the Convex property record.
4. The frontend fetches property data and displays the image using the Cloudinary link.

---

## 📬 Email Flow (Resend + Zoho)

- Users fill out a contact form on the frontend.
- The **backend (`server.js`)** receives the form data.
- It uses the **Resend API** to send the email to your **Zoho** inbox.
- All sensitive keys are hidden in `.env`.

---

## 🧠 Developer Notes

- Convex generates types automatically under `_generated/`.
- Don’t manually edit the `_generated` folder — it’s auto-generated.
- You can create new Convex functions (like CRUD operations) in `property.ts`.
- You can reseed data anytime using the `seed.ts` script.
- Remember to keep `.env` files out of version control.

---

## 🌐 Deployment

- **Frontend**: Deploy to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
- **Backend**: Deploy the Node.js server on [Render](https://render.com/) or [Railway](https://railway.app/).
- **Convex**: Hosted automatically when you run `npx convex deploy`.
- **Cloudinary**: Handles global CDN-hosted images automatically.

---

## 🛠️ Commands Summary

| Command | Location | Description |
|----------|-----------|-------------|
| `npm run dev` | `/frontend` | Starts Vite frontend |
| `node server.js` | `/backend` | Starts Express backend |
| `npx convex dev` | `/convex` | Runs Convex dev server |
| `npx convex run` | `/convex` | Seeds Convex DB with sample data |

---

## 🤝 Acknowledgements

- [Convex.dev](https://convex.dev) for the dynamic backend.
- [Cloudinary](https://cloudinary.com) for robust image storage.
- [Resend](https://resend.com) for reliable email delivery.
- [Vite](https://vitejs.dev) for a lightning-fast dev environment.
- [Node.js](https://nodejs.org) for server-side power.

---

## 🧾 License
This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 👨‍💻 Author

**Joshua J. Suhas**  
Building modern web apps with AI, automation, and elegant design.
