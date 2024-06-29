const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");
console.log(inputElement);
console.log(outputElement);
inputElement.addEventListener("input", trimmedElement);

function trimmedElement() {
  const trimmedValue = inputElement.value.trim();

  if (trimmedValue === "") {
    outputElement.textContent = "Anonymous";
  } else {
    outputElement.textContent = trimmedValue;
  }
}
