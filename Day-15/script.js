// Your code here
const output = document.getElementById("output");
const input = document.getElementById("commandInput");

// ================= GLOBAL STATE =================
let balance = 1000;
const UNIT_PRICE = 50;
const MASTER_PIN = "9999";
const SECRET_WORD = "munna";

let loggedIn = false;
let loginAttempts = 3;
let currentModule = "login";

// Print to terminal
function print(text) {
    output.innerHTML += text + "<br>";
    output.scrollTop = output.scrollHeight;
}

// Boot message
print("=== VIRTUAL CORE v2.0 ===");
print("ENTER MASTER PIN:");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {

        const command = input.value.trim();
        print("> " + command);
        input.value = "";

        handleCommand(command);
    }
});

function handleCommand(command) {

    if (currentModule === "login") {
        handleLogin(command);
        return;
    }

    if (currentModule === "bank") {
        handleBank(command);
        return;
    }

    if (currentModule === "shop") {
        handleShop(command);
        return;
    }

    if (currentModule === "vault") {
        handleVault(command);
        return;
    }

    // Main commands
    switch (command.toLowerCase()) {
        case "bank":
            currentModule = "bank";
            print("BANK MODE: deposit, withdraw, balance, back");
            break;

        case "shop":
            currentModule = "shop";
            print("Enter quantity to purchase:");
            break;

        case "vault":
            currentModule = "vault";
            print("HINT: Name close to your heart.");
            print("Enter secret word:");
            break;

        case "exit":
            print("Shutting down system...");
            input.disabled = true;
            break;

        default:
            print("Unknown command.");
    }
}

// ================= LOGIN =================
function handleLogin(pin) {
    if (pin === MASTER_PIN) {
        loggedIn = true;
        currentModule = "main";
        print("ACCESS GRANTED.");
        print("Available commands: bank, shop, vault, exit");
    } else {
        loginAttempts--;
        print("WRONG PIN. Attempts left: " + loginAttempts);

        if (loginAttempts === 0) {
            print("SYSTEM SELF-DESTRUCT.");
            input.disabled = true;
        }
    }
}

// ================= BANK =================
function handleBank(command) {
    const cmd = command.toLowerCase();

    if (cmd === "deposit") {
        print("Enter amount:");
        currentModule = "deposit";
        return;
    }

    if (cmd === "withdraw") {
        print("Enter amount:");
        currentModule = "withdraw";
        return;
    }

    if (cmd === "balance") {
        print("Current Balance: ₹" + balance);
        return;
    }

    if (cmd === "back") {
        currentModule = "main";
        print("Returned to main menu.");
        return;
    }

    if (currentModule === "deposit") {
        const amount = parseFloat(command);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            print("Deposited. Balance: ₹" + balance);
        } else {
            print("Invalid amount.");
        }
        currentModule = "bank";
        return;
    }

    if (currentModule === "withdraw") {
        const amount = parseFloat(command);
        if (!isNaN(amount) && amount > 0) {
            if (amount > balance) {
                print("INSUFFICIENT FUNDS.");
            } else {
                balance -= amount;
                print("Withdrawn. Balance: ₹" + balance);
            }
        } else {
            print("Invalid amount.");
        }
        currentModule = "bank";
    }
}

// ================= SHOP =================
function handleShop(command) {
    const quantity = parseInt(command);

    if (isNaN(quantity) || quantity <= 0) {
        print("Invalid quantity.");
    } else {

        let discount = 0;

        if (quantity >= 6 && quantity <= 10) {
            discount = 0.10;
        } else if (quantity >= 11) {
            discount = 0.20;
        }

        let total = quantity * UNIT_PRICE;
        let finalPrice = total - (total * discount);

        if (finalPrice > balance) {
            print("Not enough balance.");
        } else {
            balance -= finalPrice;
            print("Purchase successful.");
            print("Discount: " + (discount * 100) + "%");
            print("Remaining Balance: ₹" + balance);
        }
    }

    currentModule = "main";
}

// ================= VAULT =================
function handleVault(command) {

    if (command.toLowerCase() === SECRET_WORD) {
        print("SECRET UNLOCKED!");
        print("Easter Egg: You are mastering logic.");
    } else {
        print("Wrong word.");
    }

    currentModule = "main";
}