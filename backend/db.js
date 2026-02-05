// db.js - Database setup for Freaky Fashion
// This file creates the database, products table, and adds sample data

const Database = require("better-sqlite3");
const path = require("path");

// Create or open the database file
const db = new Database(path.join(__dirname, "freaky_fashion.db"));

// Create the products table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    image TEXT,
    brand TEXT,
    sku TEXT UNIQUE,
    price INTEGER NOT NULL
  )
`);

// Sample products for Freaky Fashion
const products = [
  {
    name: "Svart T-Shirt",
    slug: "svart-tshirt",
    description:
      "En klassisk svart t-shirt i mjuk bomull. Perfekt för vardagsbruk eller som bas i din garderob. Tidlös design som passar alla tillfällen.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    brand: "Lansen",
    sku: "SVA123",
    price: 199,
  },
  {
    name: "Vit T-Shirt",
    slug: "vit-tshirt",
    description:
      "En fräsch vit t-shirt i premiumkvalitet. Tillverkad av 100% ekologisk bomull för maximal komfort och hållbarhet.",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400",
    brand: "Lansen",
    sku: "VIT123",
    price: 199,
  },
  {
    name: "Blå Hoodie",
    slug: "bla-hoodie",
    description:
      "Mysig hoodie i marinblå nyans. Perfekt för svalare dagar. Luva med dragsko och stora fickor fram.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    brand: "Nordic Style",
    sku: "BLA456",
    price: 499,
  },
  {
    name: "Svarta Jeans",
    slug: "svarta-jeans",
    description:
      "Stilrena svarta jeans med slim fit. Stretchmaterial för bekväm passform hela dagen.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    brand: "Denim Co",
    sku: "JEA789",
    price: 699,
  },
  {
    name: "Grå Kappa",
    slug: "gra-kappa",
    description:
      "Elegant grå kappa i ullblandning. Dubbelknäppt med klassisk silhuett. Perfekt för höst och vinter.",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400",
    brand: "Nordic Style",
    sku: "KAP001",
    price: 1499,
  },
  {
    name: "Röd Klänning",
    slug: "rod-klanning",
    description:
      "Vacker röd klänning med A-linje. Perfekt för fest eller speciella tillfällen. Dragkedja i ryggen.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    brand: "Elegance",
    sku: "KLA002",
    price: 899,
  },
  {
    name: "Svart Skinnjacka",
    slug: "svart-skinnjacka",
    description:
      "Klassisk svart skinnjacka i äkta läder. Tidlös design med dragkedja och fickor. En investering som håller i åratal.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    brand: "Leather Works",
    sku: "SKI003",
    price: 2499,
  },
  {
    name: "Beige Chinos",
    slug: "beige-chinos",
    description:
      "Snygga beige chinos i bekväm passform. Perfekt för kontoret eller en avslappnad helg.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
    brand: "Casual Line",
    sku: "CHI004",
    price: 599,
  },
];

// Check if products already exist
const existingCount = db
  .prepare("SELECT COUNT(*) as count FROM products")
  .get();

if (existingCount.count === 0) {
  // Insert products into database
  const insertProduct = db.prepare(`
    INSERT INTO products (name, slug, description, image, brand, sku, price)
    VALUES (@name, @slug, @description, @image, @brand, @sku, @price)
  `);

  // Use a transaction for better performance
  const insertMany = db.transaction((products) => {
    for (const product of products) {
      insertProduct.run(product);
    }
  });

  insertMany(products);
  console.log("✅ Database seeded with " + products.length + " products!");
} else {
  console.log("ℹ️ Database already has " + existingCount.count + " products");
}

// Export the database so other files can use it
module.exports = db;
