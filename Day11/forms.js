const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop auto submit

  // get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // reset errors
  nameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  confirmPasswordError.style.display = "none";

  let isValid = true;

  // Name validation
  if (name.length <= 2) {
    nameError.textContent = "Name must be at least 3 characters";
    nameError.style.display = "block";
    isValid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address";
    emailError.style.display = "block";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    passwordError.style.display = "block";
    isValid = false;
  }

  // Confirm password check
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordError.style.display = "block";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset(); // clear inputs
  }
});
