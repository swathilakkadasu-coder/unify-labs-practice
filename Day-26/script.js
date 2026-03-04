// Your code here
// Simulated product data (to be replaced with backend fetch)
const products = [
  { name: "Smartphone X", category: "Electronics", price: 50000, stock: 20 },
  { name: "Dining Table", category: "Furniture", price: 25000, stock: 5 },
  { name: "T-Shirt Classic", category: "Clothing", price: 1200, stock: 50 }
];

// Render products
const productsList = document.getElementById("products-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <strong>${p.name}</strong><br>
    Category: ${p.category}<br>
    Price: ₹${p.price}<br>
    Stock: ${p.stock}
  `;
  productsList.appendChild(card);
});
