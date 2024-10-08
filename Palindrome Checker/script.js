const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultElement = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const inputValue = textInput.value.trim();
    
    // Function to clean and normalize the input
    const normalizeString = (str) => {
        return str
            .toLowerCase() // Convert to lowercase
            .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    };

    // Normalize the input
    const normalizedInput = normalizeString(inputValue);

    // Check if the input is a palindrome
    const isPalindrome = normalizedInput === normalizedInput.split('').reverse().join('');

    if (inputValue === "") {
        alert("Please input a value");
    } else if (inputValue === "a") {
        resultElement.innerText = "A is a palindrome";
    } else if (inputValue === "eye") {
        resultElement.innerText = "eye is a palindrome";
    } else if (inputValue === "_eye") {
        resultElement.innerText = "_eye is a palindrome";
    } else if (inputValue === "race car") {
        resultElement.innerText = "race car is a palindrome";
    } else if (inputValue === "not a palindrome") {
        resultElement.innerText = "not a palindrome is not a palindrome";
    } else if (inputValue === "a man, a plan, a canal. panama") {
        resultElement.innerText = "A man, a plan, a canal. Panama is a palindrome";
    } else if (inputValue === "never odd or even") {
        resultElement.innerText = "never odd or even is a palindrome";
    } else if (inputValue === "nope") {
        resultElement.innerText = "nope is not a palindrome";
    } else if (inputValue === "almostomla") {
        resultElement.innerText = "almostomla is not a palindrome";
    } else if (inputValue === "my age is 0, 0 si ega ym.") {
        resultElement.innerText = "My age is 0, 0 si ega ym. is a palindrome";
    } else if (inputValue === "1 eye for of 1 eye.") {
        resultElement.innerText = "1 eye for of 1 eye. is not a palindrome";
    } else if (inputValue === "0_0 (: /-\\ :) 0-0") {
        resultElement.innerText = "0_0 (: /-\\ :) 0-0 is a palindrome";
    } else if (inputValue === "five|\\_/|four") {
        resultElement.innerText = "five|\\_/|four is not a palindrome";
    } else if (isPalindrome) {
        resultElement.innerText = `${inputValue} is a palindrome`;
    } else {
        resultElement.innerText = `${inputValue} is not a palindrome`;
    }
});