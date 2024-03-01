const email = document.getElementById("user-name");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!email.value) {
    alert("please enter your email address");
  } else if (!password.value) {
    alert("please enter your password");
  }
  if (email.value && password.value) {
    alert("login successfully");
    window.location.href = "/";
  }
});
