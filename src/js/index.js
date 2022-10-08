const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const textArea = document.querySelector("#mensagem");
const submitButton = document.querySelector("#enviar");

const campoObrigatorio = document.querySelectorAll(".campo-o");
const bordaCampoVazio = document.querySelectorAll(".campo");

submitButton.addEventListener("click", function (e){
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const telefoneValue = telefoneInput.value;
    const bigtext = textArea.value;

    if(nameValue === ''){
        campoObrigatorio[0].classList.add("obrigatorio");
        bordaCampoVazio[0].classList.add("vazio");
    }else{
        bordaCampoVazio[0].classList.add("preenchido");
    }

    if(emailValue === ''){
        campoObrigatorio[1].classList.add("obrigatorio");
        bordaCampoVazio[1].classList.add("vazio");
    }else{
        bordaCampoVazio[1].classList.add("preenchido");
    }

    if(telefoneValue === ''){
        campoObrigatorio[2].classList.add("obrigatorio");
        bordaCampoVazio[2].classList.add("vazio");
    }else{
        bordaCampoVazio[2].classList.add("preenchido");
    }

    if(bigtext === ''){
        campoObrigatorio[3].classList.add("obrigatorio");
        bordaCampoVazio[3].classList.add("vazio");
    }else{
        bordaCampoVazio[3].classList.add("preenchido");
    }
})