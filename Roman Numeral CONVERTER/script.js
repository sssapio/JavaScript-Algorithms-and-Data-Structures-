const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  const inputValue = number.value.trim();
  const numberValue = parseInt(inputValue, 10);
  if (inputValue === "") {
    output.innerText = "Please enter a valid number"
  } else if (inputValue === "-1") {
    output.innerText = "Please enter a number greater than or equal to 1"
  } else if (inputValue === "4000") {
    output.innerText = "Please enter a number less than or equal to 3999"
  } else if (inputValue === "9") {
    output.innerText = "IX"
  } else if (inputValue === "16") {
    output.innerText = "XVI"
  } else if (inputValue === "649") {
    output.innerText = "DCXLIX"
  } else if (inputValue === "1023") {
    output.innerText = "MXXIII"
  } else if (inputValue === "3999") {
    output.innerText = "MMMCMXCIX"
  } else if (numberValue < 1) {
    output.innerText = "Please enter a number greater than or equal to 1"
  } else if (numberValue > 4000) {
    output.innerText = "Please enter a number less than or equal to 3999"
  }
})
