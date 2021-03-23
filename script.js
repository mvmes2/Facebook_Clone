const login = document.getElementById('button-login');

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

window.onload = () => {
  clickLogin();
};
