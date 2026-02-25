const loadBtn = document.getElementById("loadBtn");
const productsDiv = document.getElementById("products");

loadBtn.addEventListener("click", async () => {
  productsDiv.innerHTML = "Loading...";

  try {
    const response = await fetch("http://localhost:5000/products");
    const products = await response.json();

    productsDiv.innerHTML = "";

    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹ ${product.price}</p>
        <p>Stock: ${product.stock}</p>
      `;

      productsDiv.appendChild(div);
    });

  } catch (error) {
    productsDiv.innerHTML = "❌ Failed to load products";
    console.error(error);
  }
});