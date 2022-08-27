const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");

calcular.onclick = () => {
  if (l1.value == "" || l2.value == "" || l3.value == "") {
    alert("Preencha todos os campos");
  } else if (l1.value == l2.value && l1.value == l3.value) {
    resultado.value = "equilátero";
  } else if (
    l1.value == l2.value ||
    l2.value == l3.value ||
    l1.value == l3.value
  ) {
    resultado.value = "isóceles";
  } else {
    resultado.value = "escaleno";
  }
};
