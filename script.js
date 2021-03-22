const login = document.getElementById('button-login');

function clickLogin() {
  const valor = document.getElementById('user-email-phone');

  alert(valor.value);
}

login.addEventListener('click', clickLogin);
