//login

//username validation

var username = document.getElementById("username");
var usernameError = document.getElementById("usernameError");

function validateUsername(){
  let usernameformat = /^\w+([\.-]?\w+)*@\w+([\-]?\w+)*\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  if(username.value == "") { 
    usernameError.innerText = "Email cannot be blank";
    usernameError.style.color = "red";
    console.log("input field blank");
    return false;
  } 
  else if (username.value.match(usernameformat)){
    usernameError.innerText = "";
    console.log("valid email");
    return true;
  } 
  else {
    usernameError.innerText = "Please enter a valid Email!";
    usernameError.style.color = "red";
    console.log("invalid email");
    return false;
  }
}

//password

var loginpwd = document.getElementById("loginpwd");
var loginpwdError = document.getElementById("loginpwdError");

function validateloginPassword(){
  let pwdformat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if(loginpwd.value==""){
    loginpwdError.style.display = "inline";
    loginpwdError.innerText = "Password cannot be empty";
    loginpwdError.style.color = "red";
    console.log("input field blank");
    return false;
  } 
  else if(loginpwd.value.match(pwdformat)){
    loginpwdError.style.display = "inline";
    loginpwdError.innerText = "";
    return true;
  }
  else {
    passwordError.style.display = "inline";
    passwordError.innerText = "Please enter a strong password";
    passwordError.style.color = "red";
    return false;
  }
}

  var login =  document.getElementById("enter");

  login.addEventListener("submit", validateUsername);
  login.addEventListener("submit", validateloginPassword);

//signup

//first name validation
var fname = document.getElementById("firstname");
var fnameError = document.getElementById("fnameError");

function validateFname(){
  let fnameformat = /^([A-Za-z]+)$/;
  if(fname.value == "") { 
    fnameError.innerText = "First name cannot be blank";
    fnameError.style.color = "red";
    console.log("input field blank");
    return false;
  } 
  else if(fname.value.match(fnameformat)){
    fnameError.innerText = "";
    console.log("valid first name");
    return true;
  } 
  else {
    fnameError.innerText = "Please enter a valid name!";
    fnameError.style.color = "red";
    console.log("invalid first name");
    return false;
  }
}

//last name validation
var lname = document.getElementById("lastname");
var lnameError = document.getElementById("lnameError");

function validateLname(){
  let lnameformat = /^([A-Za-z]+)$/;
  if(lname.value == "") { 
    lnameError.innerText = "Last name cannot be blank";
    lnameError.style.color = "red";
    console.log("input field blank");
    return false;
  } 
  else if(lname.value.match(lnameformat)){
    lnameError.innerText = "";
    console.log("valid last name");
    return true;
  } 
  else {
    lnameError.innerText = "Please enter a valid name!";
    lnameError.style.color = "red";
    console.log("invalid first name");
    return false;
  }
}


//email validation
var email = document.getElementById("email");
var emailError = document.getElementById("emailError");

function validateEmail(){
  let emailformat = /^\w+([\.-]?\w+)*@\w+([\-]?\w+)*\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  if(email.value == "") { 
    emailError.innerText = "Email cannot be blank";
    emailError.style.color = "red";
    console.log("input field blank");
    return false;
  } 
  else if (email.value.match(emailformat)){
    emailError.innerText = "";
    console.log("valid email");
    return true;
  } 
  else {
    emailError.innerText = "Please enter a valid Email!";
    emailError.style.color = "red";
    console.log("invalid email");
    return false;
  }
}

//phone validation
var phone = document.getElementById("phone");
var phoneError = document.getElementById("phoneError");

function validatePhone(){
  let phoneformat = /^(\d{3})(\-|\s|\.)?(\d{3})(\-|\s|\.)?(\d{4})$/;
  if(phone.value == "") { 
    phoneError.innerText = "Phone no. cannot be blank";
    phoneError.style.color = "red";
    console.log("input field blank");
    return false;
  } 
  else if (phone.value.match(phoneformat)){
    phoneError.innerText = "";
    console.log("valid phone no.");
    return true;
  } 
  else {
    phoneError.innerText = "Please enter a valid Phone no.!";
    phoneError.style.color = "red";
    console.log("invalid phone no.");
    return false;
  }
}

//password validation
var password = document.getElementById("pwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var passwordError = document.getElementById("passwordError");
let progress = document.getElementById("pw-str");
let passwordStrength = document.getElementById("password-strength");

progress.style.display = "none"; 

// When the user clicks on the password field, show the message box
password.onfocus = function() {
  document.getElementById("message").style.display = "block";
  passwordError.style.display = "none";
}

// When the user clicks outside of the password field, hide the message box
password.onblur = function() {
  document.getElementById("message").style.display = "none";
  progress.style.display = "none";
}

// When the user starts to type something inside the password field
password.onkeyup = function () {
  let strength = 0;
  progress.style.display = "block";

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {  
    strength += 1;  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) { 
    strength += 1; 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) { 
    strength += 1; 
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(password.value.length >= 8) {
    strength += 1;
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  //strength bar
  if (strength < 2) {
    passwordStrength.classList.remove('progress-bar-warning');
    passwordStrength.classList.remove('progress-bar-success');
    passwordStrength.classList.add('progress-bar-danger');
    passwordStrength.style = 'width: 10%';
    console.log("weak");
} else if (strength == 3) {
    passwordStrength.classList.remove('progress-bar-success');
    passwordStrength.classList.remove('progress-bar-danger');
    passwordStrength.classList.add('progress-bar-warning');
    passwordStrength.style = 'width: 60%';
    console.log("moderate");
} else if (strength == 4) {
    passwordStrength.classList.remove('progress-bar-warning');
    passwordStrength.classList.remove('progress-bar-danger');
    passwordStrength.classList.add('progress-bar-success');
    passwordStrength.style = 'width: 100%';
    console.log("strong");
}
}

function validatePassword(){
  let pwdformat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if(password.value==""){
    passwordError.style.display = "inline";
    passwordError.innerText = "Password cannot be empty";
    passwordError.style.color = "red";
    console.log("input field blank");
    return false;
  } 
  else if(password.value.match(pwdformat)){
    passwordError.style.display = "inline";
    passwordError.innerText = "";
    console.log("strong password");
    return true;
  }
  else {
    passwordError.style.display = "inline";
    passwordError.innerText = "Please enter a strong password";
    passwordError.style.color = "red";
    console.log("weak password");
    return false;
  }
}

//confirm
var confirm = document.getElementById("confirm");
var confirmError = document.getElementById("confirmError");

confirm.onkeyup = function() {
  if(confirm.value === password.value){
    confirmError.innerText="";
  } else {
    confirmError.innerText="Password do not match";
    confirmError.style.color = "red";
  } 
}

var signup = document.getElementById("signup");

signup.addEventListener("submit", validateFname);
signup.addEventListener("submit", validateLname);
signup.addEventListener("submit", validateEmail);
signup.addEventListener("submit", validatePhone);
signup.addEventListener("submit", validatePassword);