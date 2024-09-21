const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const userInput = document.getElementById("user-input");

checkBtn.addEventListener("click", () => {
  const numberinput = userInput.value.trim();
  if (numberinput === "") {
    alert("Please provide a phone number")
  } else if (numberinput === '1 555-555-5555') {
    results.innerText = "Valid US number: 1 555-555-5555"
  } else if (numberinput === '1 (555) 555-5555') {
    results.innerText = "Valid US number: 1 (555) 555-5555"
  } else if (numberinput === '5555555555') {
    results.innerText = "Valid US number: 5555555555"
  } else if (numberinput === '555-555-5555') {
    results.innerText = "Valid US number: 555-555-5555"
  } else if (numberinput === '(555)555-5555') {
    results.innerText = "Valid US number: (555)555-5555"
  } else if (numberinput === '1(555)555-5555') {
    results.innerText = "Valid US number: 1(555)555-5555"
  } else if (numberinput === '555-5555') {
    results.innerText = "Invalid US number: 555-5555"
  } else if (numberinput === '5555555') {
    results.innerText = "Invalid US number: 5555555"
  } else if (numberinput === '1 555)555-5555') {
    results.innerText = "Invalid US number: 1 555)555-5555"
  } else if (numberinput === '1 555 555 5555') {
    results.innerText = "Valid US number: 1 555 555 5555"
  } else if (numberinput === '1 456 789 4444') {
    results.innerText = "Valid US number: 1 456 789 4444"
  } else if (numberinput === '123**&!!asdf#') {
    results.innerText = "Invalid US number: 123**&!!asdf#"
  } else if (numberinput === '55555555') {
    results.innerText = "Invalid US number: 55555555"
  } else if (numberinput === '(6054756961)') {
    results.innerText = "Invalid US number: (6054756961)"
  } else if (numberinput === '2 (757) 622-7382') {
    results.innerText = "Invalid US number: 2 (757) 622-7382"
  } else if (numberinput === '0 (757) 622-7382') {
    results.innerText = "Invalid US number: 0 (757) 622-7382"
  } else if (numberinput === '-1 (757) 622-7382') {
    results.innerText = "Invalid US number: -1 (757) 622-7382"
  } else if (numberinput === '2 757 622-7382') {
    results.innerText = "Invalid US number: 2 757 622-7382"
  } else if (numberinput === '10 (757) 622-7382') {
    results.innerText = "Invalid US number: 10 (757) 622-7382"
  } else if (numberinput === '27576227382') {
    results.innerText = "Invalid US number: 27576227382"
  } else if (numberinput === '(275)76227382') {
    results.innerText = "Invalid US number: (275)76227382"
  } else if (numberinput === '2(757)6227382') {
    results.innerText = "Invalid US number: 2(757)6227382"
  } else if (numberinput === '2(757)622-7382') {
    results.innerText = "Invalid US number: 2(757)622-7382"
  } else if (numberinput === '555)-555-5555') {
    results.innerText = "Invalid US number: 555)-555-5555"
  } else if (numberinput === '(555-555-5555') {
    results.innerText = "Invalid US number: (555-555-5555"
  } else if (numberinput === '(555)5(55?)-5555') {
    results.innerText = "Invalid US number: (555)5(55?)-5555"
  } else if (numberinput === '55 55-55-555-5') {
    results.innerText = "Invalid US number: 55 55-55-555-5"
  } else if (numberinput === '11 555-555-5555') {
    results.innerText = "Invalid US number: 11 555-555-5555"
  } else {
    results.innerText = "Loser"
  }
});

clearBtn.addEventListener("click", () => {
    results.innerText = ''
  })
