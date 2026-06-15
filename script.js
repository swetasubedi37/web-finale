// Button alert
document.getElementById("welcomeBtn").addEventListener("click", () => {
    alert("Welcome to Sweta Subedi's Portfolio 🎬");
});

// DARK / LIGHT MODE
const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // change icon
    if(document.body.classList.contains("dark")){
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});
