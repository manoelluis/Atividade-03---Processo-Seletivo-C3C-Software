const nota = document.querySelector("#nota");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");

calcular.onclick = () => {
  const valor = Math.floor(Number(nota.value));

  const corrigida = arredondar(valor);
  if (valor < 0 || valor > 100) {
    alert("Digite um numero entre 0 e 100");
    return;
  }
  if (corrigida < 40) {
    resultado.value = `Voce foi reprovado com a nota ${corrigida}`;
  } else {
    resultado.value = `Voce foi aprovado com a nota ${corrigida}`;
  }
};

const arredondar = (valor) => {
  if (valor < 38) {
    return valor;
  }

  if (valor % 5 >= 3) {
    return valor + (5 - (valor % 5));
  }

  return valor;
};
