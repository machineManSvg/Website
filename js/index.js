const input = document.getElementById("btnCount");
const container = document.getElementById("buttonContainer");

// Function to create buttons dynamically
function renderButtons(count) {
    container.innerHTML = ""; // Clear previous buttons
    for (let i = 1; i <= count; i++) {
        const btn = document.createElement("button");
        btn.textContent = `Button ${i}`;
        btn.addEventListener("click", () => alert(`You clicked Button ${i}`));
        container.appendChild(btn);
    }
}

// Initial render
renderButtons(parseInt(input.value));

// Update buttons whenever input changes
input.addEventListener("input", () => {
    const count = parseInt(input.value) || 0;
    renderButtons(count);
});
