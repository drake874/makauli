function subtrair() {
    let  anonascimento = 0;
    let idade = 0;

    idade = Number(window.prompt('digite o mano em que nasceu:'));
    resultado = 2025 - anonascimento;
    if(idade > 18) {
        alert("voce ja pode tirar habilitacao");
    } else {
        alert("voce ainda nao pode tirar a habilitacao");
        let resul = 18 - idade
        alert("voce aineda precisa esperar essa idade:" );
        alert(resul)
    }
}