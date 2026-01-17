const inputEl = document.querySelector("#name-input");
inputEl.addEventListener("input", handleInput)

const outputEl = document.querySelector("#name-output");

function handleInput(event) {
    let name = event.target.value.trim();
    outputEl.textContent = name || "Anonymous";
}