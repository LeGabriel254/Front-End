document.addEventListener('DOMContentLoaded',  () => {
const form =  document.getElementById('registration-form')
const feedbackDiv = document.getElementById('form-feedback')

form.addEventListener('submit', (event) => {
  //Preventing submission defafult
  event.preventDefault();

  const name = document.getElementById('username');
  const userEmail = document.getElementById('email')
  const userPassword = document.getElementById('password');
  

  //Initialize validation variables
  const username = name.value.trim();
  const email = userEmail.value.trim();
  const password = userPassword.value.trim();

let isValid = true;
 let message = [];

  // Check if any field is empty
  if (name === "" || userEmailemail === "" || userPassword === "") {
    alert("Please fill out all fields.");  // Alert for incomplete form
    return;  // Stop further validation and submission
}

// Username Form Validation
 if(username.length < 3){
  isValid = false;
  message.push('Name must be atleast 3 characters long');
}else if(/\d/.test(username)){
  isValid = false;
  message.push('Username must not contain numbers.')
}
  // Email Form Validation
  if(!email.includes('@') || !email.includes('.')){
    isValid = false;
    message.push("Email must contain both '@' and '.' characters.")
  }
  
  // password Form Validation
  if(password.length < 8){
    isValid =false
    message.push('password must be atleast 8 charachters long.')
  }


// Make the feedbackDiv visible
feedbackDiv.style.display = "block";

// Check if isValid is true or false
if (isValid) {
    // If the validation is successful
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";  // Set text color to success green
} else {
    // If validation fails, display the error messages
    feedbackDiv.innerHTML = message.join('<br>');  // Join error messages with line breaks
    feedbackDiv.style.color = "#dc3545";  // Set text color to error red
}

})


})