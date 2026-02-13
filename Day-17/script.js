

const tasks = [
    { name: "Build Portfolio", status: "Completed" },
    { name: "Fix Login Bug", status: "Pending" },
    { name: "Deploy API", status: "Completed" },
    { name: "Write Tests", status: "Pending" },
    { name: "Optimize Database", status: "Completed" }
];

const prices = [100, 250, 400, 150, 300];
const expenses = [12000, 8000, 15000, 5000, 10000];




const completedTasks = tasks.filter(task => task.status === "Completed");
const completionRate = (completedTasks.length / tasks.length) * 100;

document.getElementById("completionRate").textContent =
    `Completion Rate: ${completionRate.toFixed(2)}%`;


// Display tasks dynamically
function displayTasks(taskArray) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    taskArray.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.name} - ${task.status}`;
        taskList.appendChild(li);
    });
}

displayTasks(tasks);



document.getElementById("searchInput").addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();

    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchValue)
    );

    displayTasks(filteredTasks);
});




const taxRate = 0.18;

const pricesWithTax = prices
    .map(price => price + price * taxRate)
    .sort((a, b) => b - a); // High → Low

const priceList = document.getElementById("priceList");

pricesWithTax.forEach(price => {
    const li = document.createElement("li");
    li.textContent = "₹ " + price.toFixed(2);
    priceList.appendChild(li);
});


// ------------------------------
// 4️⃣ REDUCE - TOTAL & AVERAGE
// ------------------------------

const totalBudget = expenses.reduce((sum, value) => sum + value, 0);

const averageExpense = totalBudget / expenses.length;

document.getElementById("totalBudget").textContent =
    "Total Budget: ₹ " + totalBudget;

document.getElementById("averageExpense").textContent =
    "Average Expense: ₹ " + averageExpense.toFixed(2);