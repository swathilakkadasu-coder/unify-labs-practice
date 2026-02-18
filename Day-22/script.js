
let canUseStorage = true;
try {
  localStorage.setItem("test", "1");
  localStorage.removeItem("test");
} catch (e) {
  canUseStorage = false;
}


const state = {
  data: [],
  favorites: canUseStorage ? JSON.parse(localStorage.getItem("fav")) || [] : [],
  theme: canUseStorage ? localStorage.getItem("theme") || "light" : "light"
};


const cards = document.getElementById("cards");
const loader = document.getElementById("loader");
const search = document.getElementById("search");
const sort = document.getElementById("sort");
const themeToggle = document.getElementById("themeToggle");


if (state.theme === "dark") document.body.classList.add("dark");

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  state.theme = document.body.classList.contains("dark") ? "dark" : "light";
  if (canUseStorage) localStorage.setItem("theme", state.theme);
};


const API_URL =
  "https://corsproxy.io/?https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20&page=1";


async function fetchData() {
  loader.innerText = "Loading data...";
  loader.style.display = "block";

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("API blocked");
    state.data = await res.json();
    render(state.data);
  } catch (e) {
    loader.innerText = "API blocked ❌ Showing demo data";
    state.data = demoData();
    render(state.data);
  } finally {
    loader.style.display = "none";
  }
}


function render(data) {
  cards.innerHTML = "";
  data.forEach(item => {
    const isFav = state.favorites.includes(item.id);
    cards.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>₹ ${item.current_price}</p>
        <button onclick="toggleFav('${item.id}')">
          ${isFav ? "★ Favorite" : "☆ Add Favorite"}
        </button>
      </div>
    `;
  });
}


window.toggleFav = id => {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(f => f !== id);
  } else {
    state.favorites.push(id);
  }
  if (canUseStorage)
    localStorage.setItem("fav", JSON.stringify(state.favorites));
  render(state.data);
};


search.oninput = () => {
  const val = search.value.toLowerCase();
  render(state.data.filter(i => i.name.toLowerCase().includes(val)));
};


sort.onchange = () => {
  let sorted = [...state.data];
  if (sort.value === "price_asc") sorted.sort((a,b)=>a.current_price-b.current_price);
  if (sort.value === "price_desc") sorted.sort((a,b)=>b.current_price-a.current_price);
  render(sorted);
};


function demoData() {
  return [
    { id: "btc", name: "Bitcoin", current_price: 5200000 },
    { id: "eth", name: "Ethereum", current_price: 310000 },
    { id: "sol", name: "Solana", current_price: 9500 },
    { id: "xrp", name: "XRP", current_price: 45 },
    { id: "ada", name: "Cardano", current_price: 55 }
  ];
}

fetchData();