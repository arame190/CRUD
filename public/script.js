let usName = document.getElementById('usName');
let usSurname = document.getElementById('usSurname');
let usAge = document.getElementById('usAge');
let usPassword = document.getElementById('usPassword');
let usPhoneNumber = document.getElementById('usPhoneNumber');
let usEmail = document.getElementById('usEmail');
let usCheck = document.getElementById('usCheck');
let showPasswordCheckbox = document.getElementById('showPassword');
let passwordInput = document.getElementById('passwordInput');

function getVal() {
  fetch("/addName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: usName.value, surname: usSurname.value, Age: usAge.value, password: usPassword.value, PhoneNumber: usPhoneNumber.value, email: usEmail.value })
  })

}


window.onload = function () {
  var usCheck = document.getElementById('usCheck');
  var usPassword = document.getElementById('usPassword');

  usCheck.onclick = togglePassword;

  function togglePassword() {
    if (usCheck.checked) {
      usPassword.type = "text"; // Show password
    } else {
      usPassword.type = "password"; // Hide password
    }
  }
}

showPasswordCheckbox.onclick = togglePassword;

function togglePassword() {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text"; // Show password
  } else {
    passwordInput.type = "password"; // Hide password
  }
}


function login() {
  const loadingContainer = document.getElementById('loadingContainer');

  loadingContainer.style.display = 'block';
  signupform.style.display = 'none';
  loginform.style.display = 'none';
  forgetpassword.style.display = 'none';

  setTimeout(() => {
    loadingContainer.style.display = 'none';

    document.getElementById("loginform").style.display = "block";
    document.getElementById("signupform").style.display = "none";
    document.getElementById("forgetpassword").style.display = "none";

    console.log('Performing login actions...');
  }, 1000);
}

function signup() {
  const loadingContainer = document.getElementById('loadingContainer');

  loadingContainer.style.display = 'block';
  signupform.style.display = 'none';
  loginform.style.display = 'none';
  forgetpassword.style.display = 'none';

  setTimeout(() => {
    loadingContainer.style.display = 'none';

    document.getElementById("signupform").style.display = "block";
    document.getElementById("loginform").style.display = "none";
    document.getElementById("forgetpassword").style.display = "none";

    console.log('Performing signup actions...');
  }, 1000);
}

function forgetpass() {
  const loadingContainer = document.getElementById('loadingContainer');

  loadingContainer.style.display = 'block';
  signupform.style.display = 'none';
  loginform.style.display = 'none';
  forgetpassword.style.display = 'none';

  setTimeout(() => {
    loadingContainer.style.display = 'none';

    document.getElementById("forgetpassword").style.display = "block";
    document.getElementById("loginform").style.display = "none";
    document.getElementById("signupform").style.display = "none";
    
  }, 1000);
}


function goBack() {
  const loadingContainer = document.getElementById('loadingContainer');

  loadingContainer.style.display = 'block';
  signupform.style.display = 'none';
  loginform.style.display = 'none';
  forgetpassword.style.display = 'none';

  setTimeout(() => {
    loadingContainer.style.display = 'none';

    document.getElementById("loginform").style.display = "block";
    document.getElementById("forgetpassword").style.display = "none";
    document.getElementById("signupform").style.display = "none";

  }, 1000);
}