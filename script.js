// =========================
// PART 1: Event Handling
// =========================
const colorBtn = document.getElementById("colorBtn");
const colorMessage = document.getElementById("colorMessage");

colorBtn.addEventListener("click", () => {
  // Only change color if not in dark mode
  if (!document.body.classList.contains("dark-mode")) {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "lightblue" ? "#f0f0f0" : "lightblue";
  }
  colorMessage.textContent = "Background color changed!";
});


// =========================
// PART 2: Interactive Elements
// =========================

// 1. Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: change button text dynamically
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "🌙 Switch to Light Mode";
  } else {
    themeToggle.textContent = "🌞 Switch to Dark Mode";
  }
});


// 2. Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});


// =========================
// PART 3: Form Validation
// =========================
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Basic validation
  if (name === "" || email === "" || password === "") {
    message.textContent = "❌ All fields are required!";
    message.style.color = "red";
    return;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    message.textContent = "❌ Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  // Password validation
  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // If all validations pass
  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "green";
  form.reset();
});
