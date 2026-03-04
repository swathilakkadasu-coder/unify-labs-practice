// Your code here
// Simulated product data
const products = [
  { name: "Smartphone X", price: 50000, stock: 20 },
  { name: "Dining Table", price: 25000, stock: 5 },
  { name: "T-Shirt Classic", price: 1200, stock: 50 }
];

const productsList = document.getElementById("products-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <strong>${p.name}</strong><br>
    Price: ₹${p.price}<br>
    Stock: ${p.stock}
  `;
  productsList.appendChild(card);
});
