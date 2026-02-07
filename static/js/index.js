const input = document.getElementById("imgCount");
const container = document.getElementById("imageContainer");

let images = [];

// Fetch image list from backend
fetch("/images")
    .then(res => res.json())
    .then(data => {
        images = data;
        renderImages(parseInt(input.value));
    })
    .catch(err => console.error("Failed to load images:", err));

function renderImages(count) {
    container.innerHTML = "";
    for (let i = 0; i < count && i < images.length; i++) {
        const img = document.createElement("img");
        img.src = `/assets/pictures/${images[i]}`;
        img.alt = images[i];
        img.addEventListener("click", () => alert(`You clicked ${images[i]}`));
        container.appendChild(img);
    }
}

// Update gallery when input changes
input.addEventListener("input", () => {
    const count = parseInt(input.value) || 0;
    renderImages(count);
});
