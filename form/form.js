const form = document.querySelector("#registerForm");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const usernameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    }

    if (password.value.length < 8) {
        passwordError.textContent = "Password must have at least 8 characters";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Registration successful!";
        form.reset();
    }
});