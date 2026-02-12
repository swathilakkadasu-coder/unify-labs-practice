// Your code here
const inputField = document.getElementById("inputText");

// Auto Update Stats
inputField.addEventListener("input", updateStats);

// Title Case
const toTitleCase = (text) => {
  return text
    .trim()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Vowel Counter
const countVowelLetters = (text) => {
  const vowels = "aeiou";
  let count = 0;

  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
};

// Secret Message
const secretMessage = (text) => {
  const forbiddenWords = ["love", "hate", "secret"];
  return text
    .split(" ")
    .map(word =>
      forbiddenWords.includes(word.toLowerCase()) ? "***" : word
    )
    .join(" ");
};

// Word, Character & Reading Time
function updateStats() {
  const text = inputField.value.trim();

  const words = text === "" ? 0 : text.split(/\s+/).length;
  const characters = text.length;
  const readingTime = Math.ceil(words / 200); // 200 words per minute

  document.getElementById("wordCount").innerText = words;
  document.getElementById("charCount").innerText = characters;
  document.getElementById("readingTime").innerText =
    readingTime + " min";
}

// Button Actions
function convertToTitleCase() {
  const input = inputField.value;
  document.getElementById("result").innerText = toTitleCase(input);
}

function countVowels() {
  const input = inputField.value;
  const total = countVowelLetters(input);
  document.getElementById("result").innerText = `Total Vowels: ${total}`;
}

function generateSecretMessage() {
  const input = inputField.value;
  document.getElementById("result").innerText = secretMessage(input);
}

function clearText() {
  inputField.value = "";
  document.getElementById("result").innerText = "";
  updateStats();
}

// Download TXT
function downloadText() {
  const text = inputField.value;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "formatted_text.txt";
  link.click();
}

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}