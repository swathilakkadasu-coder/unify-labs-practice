// Your code here

class Pet {
  #health;
  #hunger;
  #energy;

  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.#health = 80;
    this.#hunger = 50;
    this.#energy = 50;
  }

  get health() { return this.#health; }
  get hunger() { return this.#hunger; }
  get energy() { return this.#energy; }

  set health(value) {
    this.#health = Math.min(100, Math.max(0, value));
  }

  set hunger(value) {
    this.#hunger = Math.min(100, Math.max(0, value));
  }

  set energy(value) {
    this.#energy = Math.min(100, Math.max(0, value));
  }

  feed() {
    this.hunger -= 15;
    this.health += 10;
    return "🍖 Your pet enjoyed the meal!";
  }

  play() {
    if (this.energy < 10) return "😴 Too tired to play!";
    this.energy -= 15;
    this.hunger += 15;
    this.health -= 5;
    return "🎾 Playing is fun!";
  }

  sleep() {
    this.energy += 25;
    this.health += 5;
    return "💤 Sleeping peacefully...";
  }

  decay() {
    this.hunger += 1;
    this.energy -= 1;
    if (this.hunger > 70) this.health -= 1;
  }
}

// Pet Instance
const pet = new Pet("Bunny", "Rabbit");

// DOM
const petName = document.getElementById("petName");
const petType = document.getElementById("petType");
const healthBar = document.getElementById("healthBar");
const hungerBar = document.getElementById("hungerBar");
const energyBar = document.getElementById("energyBar");
const message = document.getElementById("message");

function updateUI() {
  petName.textContent = pet.name;
  petType.textContent = `Type: ${pet.type}`;
  healthBar.value = pet.health;
  hungerBar.value = pet.hunger;
  energyBar.value = pet.energy;
}

function feedPet() {
  message.textContent = pet.feed();
  updateUI();
}

function playPet() {
  message.textContent = pet.play();
  updateUI();
}

function sleepPet() {
  message.textContent = pet.sleep();
  updateUI();
}

// Auto simulation
setInterval(() => {
  pet.decay();
  updateUI();
}, 3000);

// Initial Render
updateUI();