// server.js - Main Express server that handles API routes and database communication

const express = require("express"); // Web server framework
const cors = require("cors"); // Allows frontend apps to call this API
const db = require("./db"); // Database connection

const app = express();
const PORT = 4000; // Backend server port

// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Allow server to read JSON request bodies

// Basic test route to verify server is running
app.get("/", (req, res) => {
  res.send("Freaky Fashion API is on!");
});

// GET all products
app.get("/api/products", (req, res) => {
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products);
});

// GET all hero items
app.get("/api/hero-items", (req, res) => {
  try {
    const heroItems = db.prepare("SELECT * FROM hero_items").all();
    res.json(heroItems);
  } catch (error) {
    // Likely occurs if the hero_items table does not exist
    console.error(
      "Could not fetch hero items. Ensure the 'hero_items' table exists in your database.",
      error.message,
    );
    res.status(500).json({
      error:
        "Could not fetch hero items. The 'hero_items' table might be missing.",
    });
  }
});

// GET a single product using its slug
app.get("/api/products/:slug", (req, res) => {
  const product = db
    .prepare("SELECT * FROM products WHERE slug = ?")
    .get(req.params.slug);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

// Search products by name using query parameter (?q=searchTerm)
app.get("/api/search", (req, res) => {
  const query = req.query.q || "";
  const products = db
    .prepare("SELECT * FROM products WHERE name LIKE ?")
    .all(`%${query}%`);

  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// POST create a new product (typically used by admin form)
app.post("/api/products", (req, res) => {
  const { name, description, image, brand, sku, price } = req.body;

  // Generate URL-friendly slug from product name
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[åä]/g, "a")
    .replace(/ö/g, "o");

  try {
    const result = db
      .prepare(
        `
      INSERT INTO products (name, slug, description, image, brand, sku, price)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
      )
      .run(name, slug, description, image, brand, sku, price);

    res.status(201).json({
      id: result.lastInsertRowid,
      message: "Product created!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
