// Your code here
// Sample data (same as MongoDB Compass entries)
const interns = [
  { name: "Aarav Sharma", role: "Frontend Intern", joinedDate: "2026-03-01" },
  { name: "Meera Patel", role: "Backend Intern", joinedDate: "2026-03-02" },
  { name: "Rohan Iyer", role: "Data Intern", joinedDate: "2026-03-03" }
];

// Render interns into the page
const internsList = document.getElementById("interns-list");

interns.forEach(intern => {
  const card = document.createElement("div");
  card.className = "intern-card";
  card.innerHTML = `
    <strong>${intern.name}</strong><br>
    Role: ${intern.role}<br>
    Joined: ${intern.joinedDate}
  `;
  internsList.appendChild(card);
});
