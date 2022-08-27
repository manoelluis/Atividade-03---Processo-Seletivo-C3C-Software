const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

calcular.onclick = () => {
  const delta = n2.value ** 2 - 4 * n1.value * n3.value;
  if (delta >= 0) {
    v1 = (-n2.value + Math.sqrt(delta)) / (2 * n1.value);
    v2 = (-n2.value - Math.sqrt(delta)) / (2 * n1.value);

    resultado.value = `Valor1: ${v1.toFixed(3)}, Valor2: ${v2.toFixed(3)}`;
  } else {
    resultado.value = "Delta e negativo!";
  }
};
