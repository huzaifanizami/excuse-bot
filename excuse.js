let excuses = ["sick", "family emergency", "tire burst", "appointment"];
let randomIndex = Math.floor(Math.random() * excuses.length);
let message = excuses[randomIndex];
console.log(message);
