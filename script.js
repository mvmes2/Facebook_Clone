const login = document.getElementById('button-login');
const radioBtn = document.querySelector('.gender-radio');

// function clickLogin() {
//   const valor = document.getElementById('user-email-phone');

//   alert(valor.value);
// }

// login.addEventListener('click', clickLogin);

// ou podemos refatorar para o seguinte código para ficar mais simples:

const clickLogin = () => {
  login.addEventListener('click', () => {
    const valor = document.getElementById('user-email-phone');
    window.alert(valor.value);
  });
};

const selectGender = () => {
  radioBtn.addEventListener('click', () => {
    const personalized = document.getElementById('gender-custom');
    if (document.getElementById('P').checked === true) {
      personalized.classList.remove('alter-gender');
    } else {
      personalized.classList.add('alter-gender');
    }
  });
};

window.onload = () => {
  clickLogin();
  selectGender();
};
