// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
});

function updateDOM() {
let text = document.getElementById("text")
  .innerHTML = "This is really cool!";
}

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
