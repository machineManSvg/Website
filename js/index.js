/*
console.log("Hello, World!");
console.log("This is a simple Node.js application.");

window.alert("Alert!!!");
window.alert("Alert 2!!!");
*/
document.getElementById("myH1").textContent = "Hello, World!";
document.getElementById("myP").textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button clicked!");
});

const x = 10;
const y = 20;
const sum = x + y;

document.getElementById("myH1").textContent = `The sum of ${x} and ${y} is: ${sum}`;
document.getElementById("myH2").textContent = "The sum of " + x + " and " + y + " is: " + sum;
let myH3 = document.getElementById("myH3");
myH3.textContent = "Reference to H3 element";
myH3.style.color = "blue";
myH3.style.fontSize = "2em";
