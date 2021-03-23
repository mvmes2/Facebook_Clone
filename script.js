const login = document.getElementById('button-login');
const radioBtn = document.querySelector('.gender-radio');
const registroBtn = document.getElementById('facebook-register');
const novoCad = [];
const nome = document.getElementById('first-name');
const sobrenome = document.getElementById('last-name');
const email = document.getElementById('email');
const niver = document.getElementById('birthdate');
const right = document.querySelector('.right-content');
const error = document.getElementById('error');

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

// gera o campo para adicionar genero personalizado

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

// apaga todo o formulario na esquerda

function apaga() {
  right.innerHTML = '';
}

// cria os paragrafos com os textos dos valores do formularios

// como o lint tava reclamando que a linha estava muito grande com tudo junto, separei cada valor em um paragrafo

function escreve() {
  const boasVindas1 = document.createElement('p');
  const boasVindas2 = document.createElement('p');
  const boasVindas3 = document.createElement('p');
  const boasVindas4 = document.createElement('p');
  boasVindas1.innerText = `Olá, ${novoCad[0]} ${novoCad[1]}`;
  boasVindas2.innerText = `Email: ${novoCad[2]}`;
  boasVindas3.innerText = `Nascimento: ${novoCad[3]}`;
  boasVindas4.innerText = `Genero: ${novoCad[4]}`;
  right.appendChild(boasVindas1);
  right.appendChild(boasVindas2);
  right.appendChild(boasVindas3);
  right.appendChild(boasVindas4);
}

// armazena os valores do form no array

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
      novoCad.push('Personalizado');
    }
    apaga();
    escreve();
  });
};

const validator = () => {
  nome.addEventListener('keyup', () => {
    const habilitada = 'return-form';

    if (nome.value === '') {
      registroBtn.classList.add(habilitada);
      error.classList.remove(habilitada);
    } else {
      registroBtn.classList.remove(habilitada);
      error.classList.add(habilitada);
    }
  });
};

window.onload = () => {
  clickLogin();
  selectGender();
  registro();
  validator();
};
