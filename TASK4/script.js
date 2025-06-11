// Example: Update progress bar value dynamically
// Could be extended with localStorage for persistent tracking
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progress");
  if (progress) {
    // Simulate increase on some action (e.g., video watch)
    setTimeout(() => {
      progress.value = 60;
      progress.nextElementSibling.textContent = "60%";
    }, 3000);
  }
});
