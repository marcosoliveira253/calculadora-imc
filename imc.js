const calcular = document.getElementById("calcular");

function imc() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const resultado = document.getElementById("resultado");

  if (peso !== "" && altura !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal";
    } else if (valorIMC < 30) {
      classificacao = "está acima do peso";
    } else if (valorIMC < 35) {
      classificacao = "está com obesidade grau 1";
    } else if (valorIMC < 40) {
      classificacao = "está com obesidade grau 2";
    } else {
      classificacao = "está com obesidade grau 3. Cuidado!";
    }

    resultado.textContent = `Seu IMC é ${valorIMC} e você ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos";
  }
}

calcular.addEventListener("click", imc);
