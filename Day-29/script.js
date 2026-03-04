// Your code here
const postsDiv = document.getElementById("posts");
const toggle = document.getElementById("toggle");

toggle.onclick = () => {
  document.body.classList.toggle("dark");
};

async function loadPosts() {
  const res = await fetch("/api/posts");
  const data = await res.json();
  postsDiv.innerHTML = "";
  data.forEach(p => {
    postsDiv.innerHTML += `
      <div class="card">
        <h3>${p.title}</h3>
        <small>${p.category}</small>
        <p>${p.content}</p>
        <button onclick="deletePost('${p._id}')">Delete</button>
      </div>
    `;
  });
}

async function createPost() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const content = document.getElementById("content").value;

  await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, category, content })
  });

  loadPosts();
}

async function deletePost(id) {
  await fetch(`/api/posts?id=${id}`, { method: "DELETE" });
  loadPosts();
}

loadPosts();