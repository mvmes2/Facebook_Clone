const login = document.getElementById('button-login');
const radioBtn = document.querySelector('.gender-radio');
const registroBtn = document.getElementById('facebook-register');
const novoCad = [];
const nome = document.getElementById('first-name');
const sobrenome = document.getElementById('last-name');
const email = document.getElementById('email');
const niver = document.getElementById('birthdate');
const right = document.querySelector('.right-content');

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

function apaga() {
  right.innerHTML = '';
}

function escreve() {
  const boasVindas1 = document.createElement('p');
  const boasVindas2 = document.createElement('p');
  boasVindas1.innerText = `Olá, ${novoCad[0]} ${novoCad[1]}`;
  boasVindas2.innerText = `Dados: ${novoCad[2]} ${novoCad[3]} ${novoCad[4]}`;
  right.appendChild(boasVindas1);
  right.appendChild(boasVindas2);
}

const registro = () => {
  registroBtn.addEventListener('click', () => {
    novoCad.push(nome.value);
    novoCad.push(sobrenome.value);
    novoCad.push(email.value);
    novoCad.push(niver.value);
    if (document.getElementById('F').checked) {
      novoCad.push(document.getElementById('F').value);
    } else if (document.getElementById('M').checked) {
      novoCad.push(document.getElementById('M').value);
    } else {
      novoCad.push(document.getElementById('gender-custom').value);
    }
    apaga();
    escreve();
  });
};

window.onload = () => {
  clickLogin();
  selectGender();
  registro();
};
