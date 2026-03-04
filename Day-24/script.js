// Your code here
// Simulated bulk insert (like insertMany in MongoDB)
const products = [
  {
    name: "Smartphone X",
    category: "Electronics",
    price: 50000,
    stock: 20,
    specs: { color: "Black", weight: "180g" }
  },
  {
    name: "Laptop Pro",
    category: "Electronics",
    price: 90000,
    stock: 10,
    specs: { color: "Silver", weight: "1.5kg" }
  },
  {
    name: "T-Shirt Classic",
    category: "Clothing",
    price: 1200,
    stock: 50,
    specs: { color: "Blue", size: "M" }
  },
  {
    name: "Dining Table",
    category: "Furniture",
    price: 25000,
    stock: 5,
    specs: { material: "Wood", weight: "30kg" }
  },
  {
    name: "Headphones Max",
    category: "Electronics",
    price: 15000,
    stock: 30,
    specs: { color: "White", weight: "250g" }
  }
];

// Render all products
const productsList = document.getElementById("products-list");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <strong>${p.name}</strong><br>
    Category: ${p.category}<br>
    Price: ₹${p.price}<br>
    Stock: ${p.stock}<br>
    Specs: ${JSON.stringify(p.specs)}
  `;
  productsList.appendChild(card);
});

// Query: Electronics only, sorted by price desc, limit 2
const topElectronics = products
  .filter(p => p.category === "Electronics")
  .sort((a, b) => b.price - a.price)
  .slice(0, 2);

const topElectronicsDiv = document.getElementById("top-electronics");
topElectronics.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <strong>${p.name}</strong><br>
    Price: ₹${p.price}<br>
    Specs: ${JSON.stringify(p.specs)}
  `;
  topElectronicsDiv.appendChild(card);
});
