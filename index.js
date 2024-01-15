let checkUsernameInput;
let checkEmailInput;
let checkPasswordInput;
let checkconfirmPasswordInput;
let checkDateOfBirth;
let gender;
let country;
let checkTermsAndConditions;

function validateInput(input) {
  // Define a regular expression pattern for alphanumeric, 5 to 15 characters
  const pattern = /^[a-zA-Z0-9]{5,15}$/;

  // Test the input against the pattern
  return pattern.test(input);
}

function checkInput(userInput) {
  // Validate the input
  const isValid = validateInput(userInput);

  // Display the result
  const usernameError = document.getElementById("usernameError");
  checkUsernameInput = isValid;
  usernameError.textContent = isValid
    ? "Valid input!"
    : "Invalid input! Must be alphanumeric, 5 to 15 characters.";
  //   const classEl = isValid ? "valid" : "invalid";
  if (isValid) {
    usernameError.classList.add("valid");
    usernameError.classList.remove("invalid");
  } else {
    usernameError.classList.remove("valid");
    usernameError.classList.add("invalid");
  }
}

const userInput = document.getElementById("username");
userInput.addEventListener("change", (event) => checkInput(event.target.value));

function validateEmail(email) {
  // Define a regular expression pattern for a simple email format
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the pattern
  return pattern.test(email);
}

function checkEmail(emailInput) {
  // Validate the email
  const isValid = validateEmail(emailInput);
  checkEmailInput = isValid;
  // Display the result
  const resultMessage = document.getElementById("userEmailError");
  resultMessage.textContent = isValid
    ? "Valid email!"
    : "Invalid email format. Please enter a valid email address.";
  if (isValid) {
    resultMessage.classList.add("valid");
    resultMessage.classList.remove("invalid");
  } else {
    resultMessage.classList.remove("valid");
    resultMessage.classList.add("invalid");
  }
}

const userEmail = document.getElementById("email");
userEmail.addEventListener("change", (event) => checkEmail(event.target.value));

function validatePassword(password) {
  // Define a regular expression pattern for password validation
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Test the password against the pattern
  return pattern.test(password);
}

function checkPassword(passwordInput) {
  // Validate the password
  const isValid = validatePassword(passwordInput);
  checkPasswordInput = isValid;
  // Display the result
  const resultMessage = document.getElementById("passwordError");
  resultMessage.textContent = isValid
    ? "Valid password!"
    : "Invalid password. Must be at least 8 characters with uppercase, lowercase, number, and special character.";
  if (isValid) {
    resultMessage.classList.add("valid");
    resultMessage.classList.remove("invalid");
  } else {
    resultMessage.classList.remove("valid");
    resultMessage.classList.add("invalid");
  }
}

const userPasswordEl = document.getElementById("password");
userPasswordEl.addEventListener("change", (event) =>
  checkPassword(event.target.value)
);

function validatePasswordMatch(confirmPasswordInput) {
  // Get the password and confirm password values from the HTML elements
  const passwordInput = document.getElementById("password").value;
  // const confirmPasswordInput = document.getElementById('confirmPassword').value;

  // Compare the values
  const isValid = passwordInput === confirmPasswordInput;
  checkconfirmPasswordInput = isValid;
  // Display the result
  const resultMessage = document.getElementById("confirmPasswordError");
  resultMessage.textContent = isValid
    ? "Passwords match!"
    : "Passwords do not match.";
  if (isValid) {
    resultMessage.classList.add("valid");
    resultMessage.classList.remove("invalid");
  } else {
    resultMessage.classList.remove("valid");
    resultMessage.classList.add("invalid");
  }
}

const userConfirmPasswordEl = document.getElementById("confirmPassword");
userConfirmPasswordEl.addEventListener("change", (event) =>
  validatePasswordMatch(event.target.value)
);

function calculateAge() {
  // Get the date of birth value from the HTML element with id="dobInput"
  const dobInput = document.getElementById("datOfBirth").value;

  // Calculate the age based on the date of birth
  const dobDate = new Date(dobInput);
  const today = new Date();
  const age = today.getFullYear() - dobDate.getFullYear();

  // Check if the user is at least 18 years old
  const isValid = age >= 18;
  checkDateOfBirth = isValid;
  // Display the result
  const resultMessage = document.getElementById("dateOfBirthError");
  resultMessage.textContent = isValid
    ? "Valid age!"
    : "Users must be at least 18 years old.";
  if (isValid) {
    resultMessage.classList.add("valid");
    resultMessage.classList.remove("invalid");
  } else {
    resultMessage.classList.remove("valid");
    resultMessage.classList.add("invalid");
  }
}

const dobInput = document.getElementById("datOfBirth");
dobInput.addEventListener("change", (event) =>
  calculateAge(event.target.value)
);

function handleCheckbox(checkbox) {
  // Get the checkbox element by its id
  const resultMessage = document.getElementById("agreeTermsAndConditions");
  resultMessage.textContent = checkbox
    ? "Terms and conditions accepted!"
    : "Please accept the terms and conditions.";
  if (checkbox) {
    checkTermsAndConditions = checkbox;
    resultMessage.classList.add("valid");
    resultMessage.classList.remove("invalid");
  } else {
    resultMessage.classList.remove("valid");
    resultMessage.classList.add("invalid");
  }
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", () => handleCheckbox(checkbox.checked));

gender = document.querySelector("input[name=gender]:checked").value;
document.addEventListener("DOMContentLoaded", function () {
  // Get all radio buttons with the name "gender"
  const radioButtons = document.querySelectorAll('input[name="gender"]');

  // Add event listener to each radio button
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
      // Update the selected value when a radio button is checked
      if (radioButton.checked) {
        gender = radioButton.value;
        console.log(gender);
      }
    });
  });
});

function displayUserDetails(event) {
  event.preventDefault();
  // Get the user details from the form
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("datOfBirth").value;
  //   const gender = document.querySelector('input[name="gender"]:checked').value;
  const country = document.getElementById("country").value;
  const terms = document.getElementById("agreeTermsAndConditions").checked;

  // Create a string with the user details
  const userDetails = `
        <p class="user-detail">Username: ${username}</p>
        <p class="user-detail">Email: ${email}</p>
        <p class="user-detail">Password: ${password}</p>
        <p class="user-detail">Date of Birth: ${dob}</p>
        <p class="user-detail">Gender: ${gender}</p>
        <p class="user-detail">Country: ${country}</p>
        <p class="user-detail">Terms and Conditions Accepted: ${
          checkTermsAndConditions ? "Yes" : "No"
        }</p>
    `;

  // Display the user details in the container
  let a = checkUsernameInput === true;
  let b = checkEmailInput === true;
  let c = checkPasswordInput === true;
  let d = checkconfirmPasswordInput === true;
  let e = checkDateOfBirth === true;
  let f = gender !== undefined;
  let g = country !== undefined;
  let h = checkTermsAndConditions;
  if (a && b && c && d && e && f && g && h) {
    let userDetailsContainerEl = document.getElementById("userDetails");
    userDetailsContainerEl.innerHTML = userDetails;
    userDetailsContainerEl.classList.add("user-details");
  }
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", displayUserDetails);
