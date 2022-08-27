const nota = document.querySelector("#nota");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");

calcular.onclick = () => {
  const corrigida = arredondar();

  if (nota.value < 0 || nota.value > 100) {
    alert("Digite um numero entre 0 e 100");
  } else if (corrigida < 40) {
    resultado.value = "Voce foi reprovado :(";
  } else {
    resultado.value = "Voce foi aprovado! :)";
  }
};

const arredondar = () => {
  if (nota.value < 38) {
    return nota.value;
  } else if (nota.value % 5 >= 3) {
    return (nota.value = nota.value + (5 - (nota.value % 5)));
  } else {
    return (nota.value = nota.value - (nota.value % 5));
  }
};
