// Your code here
// Initial product list
let products = [
  { name: "Smartphone X", category: "Electronics", price: 500, stock: 20, tags: [] },
  { name: "Laptop Pro", category: "Electronics", price: 900, stock: 0, tags: [] },
  { name: "T-Shirt Classic", category: "Clothing", price: 1200, stock: 50, tags: [] },
  { name: "Dining Table", category: "Furniture", price: 250, stock: 5, tags: [] },
  { name: "Headphones Max", category: "Electronics", price: 150, stock: 0, tags: [] }
];

// Utility to render products
function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <strong>${p.name}</strong><br>
      Category: ${p.category}<br>
      Price: ₹${p.price}<br>
      Stock: ${p.stock}<br>
      Featured: ${p.featured ? "true" : "false"}<br>
      Tags: ${p.tags.join(", ")}
    `;
    container.appendChild(card);
  });
}

// Show initial products
renderProducts(products, "products-list");

// --- Mass Updates ---
// $inc: Increase price of Electronics by +10
products.forEach(p => {
  if (p.category === "Electronics") {
    p.price += 10;
  }
});

// $set: Set featured:true for items priced > 500
products.forEach(p => {
  if (p.price > 500) {
    p.featured = true;
  }
});

// $push: Add 'new-arrival' tag to Clothing
products.forEach(p => {
  if (p.category === "Clothing") {
    p.tags.push("new-arrival");
  }
});

// Show updated products
renderProducts(products, "updated-products");

// --- Cleanup ---
// deleteMany: Remove items with stock = 0
products = products.filter(p => p.stock !== 0);

// countDocuments: Verify remaining count
console.log("Remaining products count:", products.length);

// Show final products
renderProducts(products, "final-products");
