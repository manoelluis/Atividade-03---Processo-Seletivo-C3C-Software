const num = document.querySelector("#num");
const res = document.querySelector("#res");
const calcular = document.querySelector("#calcular");

const valorLuidyMoura = (valor) => {
  if (valor % 9 == 0 && valor % 5 == 0) {
    return "LuidyMoura";
  }

  if (valor % 5 == 0) {
    return "Luidy";
  }

  if (valor % 9 == 0) {
    return "Moura";
  }

  return valor;
};

const luidyMoura = (limite) => {
  let resultado = [];

  for (let i = 1; i <= limite; i++) {
    resultado.push(valorLuidyMoura(i));
  }
  return resultado;
};

calcular.onclick = () => {
  res.value = luidyMoura(num.value);
};
