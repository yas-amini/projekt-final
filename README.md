# Wearhaus - Online Clothing Store

This is a full-stack e-commerce web application called `Wearhaus`. It is designed to demonstrate a comprehensive understanding of modern web development principles. It features a robust backend API built with Node.js and a dynamic, interactive frontend powered by React. The application provides functionalities for displaying products, viewing product details, and includes an administrative section for managing products.

## Features

- **Product Catalog:** Browse and view a list of available products.
- **Product Detail Pages:** See detailed information for each product.
- **Search Functionality:** (Implied by `SearchResultsPage.jsx`) Search for products.
- **Administrative Panel:** (Implied by `AdminNewProductPage.jsx`, `AdminProductListPage.jsx`)
  - List all products.
  - Add new products.
- **Responsive Design:** (Implied by CSS files) User-friendly interface across various devices.

## Technologies Used

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool that provides a lightning-fast development experience.
- **CSS Modules / Plain CSS:** For styling components.

### Backend

- **Node.js:** A JavaScript runtime for building server-side applications.
- **Express.js:** (Likely, given `server.js` and `db.js`) A fast, unopinionated, minimalist web framework for Node.js.
- **Database:** (Placeholder, specific database unknown from structure, but `db.js` suggests one) Used for storing product information.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js) or Yarn

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd projekt-final
```

### 2. Backend Setup

Navigate to the `backend` directory, install dependencies, and start the server.

```bash
cd backend
npm install # or yarn install
node server.js # or npm start if defined in package.json
```

The backend server should start on `http://localhost:5000` (or another port if specified in `server.js`).

### 3. Frontend Setup

Open a new terminal window, navigate to the `frontend` directory, install dependencies, and start the development server.

```bash
cd ../frontend
npm install # or yarn install
npm run dev # or yarn dev
```

The frontend application should open in your browser, typically at `http://localhost:5173`.

## Project Structure

The project is divided into two main parts: `backend` and `frontend`.

```
projekt-final/
├───backend/                  # Node.js backend application
│   ├───db.js                 # Database connection and models
│   ├───server.js             # Main server file, API routes
│   └───package.json          # Backend dependencies and scripts
└───frontend/                 # React frontend application
    ├───public/               # Static assets
    ├───src/                  # Frontend source code
    │   ├───assets/           # Images and other static assets
    │   ├───components/       # Reusable UI components (e.g., Header, Footer, ProductCard)
    │   │   ├───BenefitsSection.jsx
    │   │   ├───Footer.jsx
    │   │   ├───Header.jsx
    │   │   ├───HeroSection.jsx
    │   │   └───ProductCard.jsx
    │   ├───pages/            # Top-level page components
    │   │   ├───admin/        # Admin-specific pages
    │   │   │   ├───AdminNewProductPage.jsx
    │   │   │   └───AdminProductListPage.jsx
    │   │   ├───Home.jsx
    │   │   ├───ProductDetailPage.jsx
    │   │   └───SearchResultsPage.jsx
    │   ├───App.jsx           # Main application component, often handles routing
    │   ├───main.jsx          # Entry point for the React application
    │   └───index.css         # Global styles
    ├───index.html            # Main HTML file for the frontend
    └───package.json          # Frontend dependencies and scripts
```

## Usage

Once both the backend and frontend servers are running:

1.  Open your browser to `http://localhost:5173` (or wherever your frontend is served).
2.  Navigate through the application to view products, search, etc.
3.  Access administrative features by navigating to the appropriate routes (e.g., `/admin/products` if implemented).

