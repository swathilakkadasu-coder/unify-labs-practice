
function calculator() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("❌ Please enter valid numbers");
        return;
    }

    let sum = num1 + num2;
    let product = num1 * num2;
    let remainder = num1 % num2;

    alert(
        "Results 🧮\n" +
        "Sum: " + sum + "\n" +
        "Product: " + product + "\n" +
        "Remainder: " + remainder
    );
}

function magic8Ball() {
    const userName = prompt("Enter your name:");
    const question = prompt("Ask your question:");

    const responses = [
        "Yes, definitely! ✅",
        "No, not now ❌",
        "Maybe 🤔",
        "Ask again later ⏳",
        "Absolutely! 🔥",
        "I don't think so 😐"
    ];

    let randomIndex = Math.floor(Math.random() * responses.length);
    let answer = responses[randomIndex];

    alert(
        "Hello " + userName + "! 🎉\n" +
        "Your question: " + question + "\n" +
        "Magic 8-Ball says: " + answer
    );
}