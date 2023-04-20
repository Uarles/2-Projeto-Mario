const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkinputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value
    const passwordConfirmationValue = passwordconfirmation.value;

    if (usernameValue === "") {
        setErrorfor(username, 'O nome de usuário é obrigatório.');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if(!checkEmail(emailValue)) {
        setErrorFor(email, "Por gentileza insira um email válido.");

    } else {
        setSuccessFor(email);
    }

    if (passwordvalue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 8) {
        setErrorFor(password, "A Senha precisa ter no mínimo 8 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    }else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-Control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        console.log("O Seu Cadastro Esta Feito!");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adicionando o error
    small.innerText = message;
    
    //adicionando a classe de error
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //adicionando a mensagem de sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
  