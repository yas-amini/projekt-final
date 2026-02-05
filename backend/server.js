// server.js - The main Express server

const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 4000; // Changed backend port to 4000

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Freaky Fashion API is on!');
});

// GET all products
app.get('/api/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

// GET single product by slug
app.get('/api/products/:slug', (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE slug = ?').get(req.params.slug);
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  res.json(product);
});

// Search products by name
app.get('/api/search', (req, res) => {
  const query = req.query.q || '';
  const products = db.prepare('SELECT * FROM products WHERE name LIKE ?').all(`%${query}%`);
  res.json(products);
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// POST new product (for admin form)
app.post('/api/products', (req, res) => {
  const { name, description, image, brand, sku, price } = req.body;
  
  // Create slug from name (e.g., "Blue Shirt" → "blue-shirt")
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[åä]/g, 'a').replace(/ö/g, 'o');
  
  try {
    const result = db.prepare(`
      INSERT INTO products (name, slug, description, image, brand, sku, price)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(name, slug, description, image, brand, sku, price);
    
    res.status(201).json({ id: result.lastInsertRowid, message: 'Product created!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});