// Change Background Color Between Two Colors
const colorButton = document.getElementById("colorButton");
let isDefaultColor = true;
colorButton.onclick = function () {
    if (isDefaultColor) {
        document.body.style.backgroundColor = "#ffcccb"; // Light red
    } else {
        document.body.style.backgroundColor = "#e0f7fa"; // Light cyan
    }
    isDefaultColor = !isDefaultColor;
};

// Adjust Text Size Dynamically
const textSizeSlider = document.getElementById("textSizeSlider");
const sliderValue = document.getElementById("sliderValue");
textSizeSlider.addEventListener('input', function () {
    document.body.style.fontSize = textSizeSlider.value + "px";
    sliderValue.textContent = textSizeSlider.value + "px";
});

// Modal
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = function () {
    modal.style.display = "block";
};

closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Form Validation
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.onsubmit = function (event) {
    let isValid = true;
    
    // Name Validation
    if (nameInput.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    
    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters, including one uppercase letter and one number.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
};

// Bonus: Dropdown Change Message
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdownMessage");

dropdown.addEventListener("change", function () {
    if (dropdown.value === "option1") {
        dropdownMessage.textContent = "You selected Option 1!";
    } else if (dropdown.value === "option2") {
        dropdownMessage.textContent = "You selected Option 2!";
    } else {
        dropdownMessage.textContent = "";
    }
});
