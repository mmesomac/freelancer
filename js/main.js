// Testimonia  Slider
$(document).ready(function () {
  $('#testimonial-slider').owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 1],
    pagination: false,
    navigation: true,
    navigationText: ['', ''],
    autoPlay: true,
  });
});

// Footer Copyright Date Update
function getCurrentYear() {
  return new Date().getFullYear();
}
document.getElementById('year').innerHTML = getCurrentYear();

// ####################################################
// PAGINATION
$('li').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
});

// ####################################################

// const form = document.querySelector('form');
// (eField = form.querySelector('.email')),
//   (eInput = eField.querySelector('input')),
//   (pField = form.querySelector('.password')),
//   (pInput = pField.querySelector('input'));

// form.onsubmit = (e) => {
//   e.preventDefault(); //preventing from form submitting
//   //if email and password is blank then add shake class in it else call specified function
//   eInput.value == '' ? eField.classList.add('shake', 'error') : checkEmail();
//   pInput.value == '' ? pField.classList.add('shake', 'error') : checkPass();

//   setTimeout(() => {
//     //remove shake class after 500ms
//     eField.classList.remove('shake');
//     pField.classList.remove('shake');
//   }, 500);

//   eInput.onkeyup = () => {
//     checkEmail();
//   }; //calling checkEmail function on email input keyup
//   pInput.onkeyup = () => {
//     checkPass();
//   }; //calling checkPassword function on pass input keyup

//   function checkEmail() {
//     //checkEmail function
//     let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
//     if (!eInput.value.match(pattern)) {
//       //if pattern not matched then add error and remove valid class
//       eField.classList.add('error');
//       eField.classList.remove('valid');
//       let errorTxt = eField.querySelector('.error-txt');
//       //if email value is not empty then show please enter valid email else show Email can't be blank
//       eInput.value != ''
//         ? (errorTxt.innerText = 'Enter a valid email address')
//         : (errorTxt.innerText = "Email can't be blank");
//     } else {
//       //if pattern matched then remove error and add valid class
//       eField.classList.remove('error');
//       eField.classList.add('valid');
//     }
//   }

//   function checkPass() {
//     //checkPass function
//     if (pInput.value == '') {
//       //if pass is empty then add error and remove valid class
//       pField.classList.add('error');
//       pField.classList.remove('valid');
//     } else {
//       //if pass is empty then remove error and add valid class
//       pField.classList.remove('error');
//       pField.classList.add('valid');
//     }
//   }

//   //if eField and pField doesn't contains error class that mean user filled details properly
//   if (
//     !eField.classList.contains('error') &&
//     !pField.classList.contains('error')
//   ) {
//     window.location.href = form.getAttribute('action'); //redirecting user to the specified url which is inside action attribute of form tag
//   }
// };

// ###########################################################
// FORM VALIDATION
// ###########################################################
function validate() {
  var name = $('#name').val();
  var name_error = document.getElementById('name_error');

  var email = $('#email').val();
  var email_error = document.getElementById('email_error');

  var password = $('#password').val();
  var password_error = document.getElementById('password_error');

  var conpassword = $('#conpassword').val();
  var conpassword_error = document.getElementById('conpassword_error');

  if (name == null || name == '') {
    name_error.textContent = 'this field is empty';
    name_error.style.color = 'red';
    return false;
  }
  if (email == null || email == '') {
    email_error.textContent = 'this field is empty';
    email_error.style.color = 'red';
    return false;
  }
  if (email.indexOf('@') < 0) {
    email_error.textContent = 'enter a proper email';
    email_error.style.color = 'red';
    return false;
  }
  if (password == null || password == '') {
    password_error.textContent = 'this field is empty';
    password_error.style.color = 'red';
    return false;
  }
  if (conpassword == null || conpassword == '') {
    conpassword_error.textContent = 'this field is empty';
    conpassword_error.style.color = 'red';
    return false;
  }
  if (password.length < 8) {
    password_error.textContent = 'password should be 8 characters long';
    password_error.style.color = 'red';
    return false;
  }
  if (password != conpassword) {
    conpassword_error.textContent = 'password mixmatch';
    conpassword_error.style.color = 'red';
    return false;
  } else {
    window.location.href = 'dashboard.html';
  }
}

// #########################################
// DASHBOARD
// #########################################
// let sidebar = document.querySelector('.sidebar');
// let sidebarBtn = document.querySelector('.sidebarBtn');
// sidebarBtn.onclick = function () {
//   sidebar.classList.toggle('active');
//   if (sidebar.classList.contains('active')) {
//     sidebarBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
//   } else sidebarBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
// };

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.sidebarBtn');
sidebarBtn.onclick = function () {
  sidebar.classList.toggle('active');
  if (sidebar.classList.contains('active')) {
    sidebarBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
  } else sidebarBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
};


function validation(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username == ""){
      alert("Please enter a UserName")
      return false
  }
  if(password == ""){
      alert("Please enter a Password")
      return false
  }
  if( username == " " && password == " "){
      return false;
  }
  else{
   window.location.href = 'dashboard1.html';   
  }
  }