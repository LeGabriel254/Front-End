// Get form elements
const form = document.querySelector(".main__container__form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const queryType = document.querySelectorAll('input[name="query-type"]');
const message = document.getElementById("message");
const consent = document.getElementById("consent");

// Regular expressions for validation
const nameRegex = /^[a-zA-Z]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form submission event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // Validate first name
  if (!nameRegex.test(firstName.value.trim())) {
    showOrRemoveError(
      firstName,
      "Please enter a valid first name (at least 2 characters, letters only)"
    );
    isValid = false;
  } else {
    showOrRemoveError(firstName);
  }

  // Validate last name
  if (!nameRegex.test(lastName.value.trim())) {
    showOrRemoveError(
      lastName,
      "Please enter a valid last name (at least 2 characters, letters only)"
    );
    isValid = false;
  } else {
    showOrRemoveError(lastName);
  }

  // Validate email
  if (!emailRegex.test(email.value.trim())) {
    showOrRemoveError(email, "Please enter a valid email address");
    isValid = false;
  } else {
    showOrRemoveError(email);
  }

  // Validate query type
  if (!Array.from(queryType).some((radio) => radio.checked)) {
    showOrRemoveError(queryType[0], "Please select a query type");
    isValid = false;
  } else {
    showOrRemoveError(queryType[0]);
  }

  // Validate message
  if (message.value.trim().length < 10) {
    showOrRemoveError(
      message,
      "Please enter a message (at least 10 characters)"
    );
    isValid = false;
  } else {
    showOrRemoveError(message);
  }

  // Validate consent
  if (!consent.checked) {
    showOrRemoveError(consent, "Please consent to being contacted");
    isValid = false;
  } else {
    showOrRemoveError(consent);
  }

  // If all validations pass, submit the form
  if (isValid) {
    alert("Form submitted successfully!");
    // You can add form submission logic here
    form.reset();
  }
});

// Function to show error messages
function showOrRemoveError(element, message) {
  const parent = element.closest(".form__group") || element.parentElement;
  const errorSpan = parent.querySelector("span[id$='-error']");

  if (message) {
    errorSpan.textContent = message;
    errorSpan.classList.add("error-message");
    element.setAttribute("aria-invalid", "true");
  } else {
    errorSpan.textContent = "";
    errorSpan.classList.remove("error-message");
    element.setAttribute("aria-invalid", "false");
  }
}