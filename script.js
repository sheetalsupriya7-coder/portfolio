// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});

// Example: dynamic name change (optional)
const nameSpan = document.getElementById("name");
nameSpan.textContent = "Your Name"; // Replace with your real name
