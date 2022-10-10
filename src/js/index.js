const botao = document.getElementById("enviar");
const campos = document.querySelectorAll(".campo");

botao.addEventListener("click", botao => {
    botao.preventDefault();
    const obrigatorio = document.querySelectorAll(".campo-o");
    campos.forEach((campo, indice) => {
        if(campo.value === ''){
            campo.classList.remove("preenchido");
            campo.classList.add("vazio");
            obrigatorio[indice].classList.add("mostrar");
        }else{
            campo.classList.remove("vazio");
            campo.classList.add("preenchido");
            obrigatorio[indice].classList.remove("mostrar")
        }
    })
})