const email = document.getElementById("user-name");
const btn = document.querySelector(".new-pass-btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!email.value) {
    alert("enter your email address");
  }
  if (email.value) {
    alert("password send to your email");
    window.location.href = "/";
  }
});
