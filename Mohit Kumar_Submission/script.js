// For reset button to clear the input, localStorage and sessionStorage
let btnClear = document.querySelector("#reset");
let inputs = document.querySelectorAll("input");
let selects = document.querySelectorAll("select");
btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  selects.forEach((select) => (select.value = "Select Team"));
  localStorage.clear();
  sessionStorage.clear();
});

// Submit Button to change bg color on hover 
const submit_btn = document.getElementById("submit-btn");

submit_btn.addEventListener("mouseover", function handleMouseOver() {
  submit_btn.style.color = "#fff";
});

submit_btn.addEventListener("mouseout", function handleMouseOut() {
  submit_btn.style.color = "#000";
});

// Reset Button to change bg color on hover 
const reset = document.getElementById("reset");

reset.addEventListener("mouseover", function handleMouseOver() {
  reset.style.color = "#fff";
});

reset.addEventListener("mouseout", function handleMouseOut() {
  reset.style.color = "#000";
});

// form success message
const form = document.querySelector("form");
const success_msg = document.querySelector("#success-msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  success_msg.classList.add("show");
  setTimeout(() => form.submit(), 10000);
});

// Storing in localStorage
function localstore() {
  localStorage.clear();

  var inputselectteam = document.getElementById("selectteam");
  localStorage.setItem("Selected Team", inputselectteam.value);
  var inputfirstname = document.getElementById("firstname");
  localStorage.setItem("First Name", inputfirstname.value);
  var inputlastname = document.getElementById("lastname");
  localStorage.setItem("Last Name", inputlastname.value);
  // var inputemail = document.getElementById("email");
  // localStorage.setItem("email", inputemail.value);
  var inputphone = document.getElementById("phone");
  localStorage.setItem("Phone", inputphone.value);
  // email to hash code
  var inputemail = document.getElementById('email');
  var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
  hashObj.update(inputemail.value);
  var hash = hashObj.getHash("HEX");
  localStorage.setItem("Email", hash);
  // pwdObj.value = hash;

  window.scrollTo({ top:0, behavior: 'smooth' });

}


// Change the button text and color on click 
const enroll_btn = document.getElementById("enroll");

enroll_btn.addEventListener("click", function onClick() {
  enroll_btn.innerHTML = "ENROLL NOW";
  enroll_btn.style.backgroundColor = "#a22b06";
});


