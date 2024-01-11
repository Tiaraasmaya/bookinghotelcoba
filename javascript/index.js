//memilih elemen HTML dengan ID 'Log_in' dan 'sign_up' 
const login = document.getElementById('Log_in');
const signup = document.getElementById('sign_up');

//menampilkan page login - sigup
signuppage = () => {
  login.style.display = 'none';
  signup.style.display = 'flex';
};
loginpage = () => {
  signup.style.display = 'none';
  login.style.display = 'flex';
};

//memilih semua elemen dengan kelas CSS pada employee-user login
const btns = document.querySelectorAll('.btns');
const authsection = document.querySelectorAll('.authsection');

//fungsi navigasi slide
var slideNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  authsection.forEach((slide) => {
    slide.classList.remove('active');
  });

  btns[manual].classList.add('active');
  authsection[manual].classList.add('active');
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    slideNav(i);
  });
});

