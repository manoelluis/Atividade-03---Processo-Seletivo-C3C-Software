const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");

calcular.onclick = () => {
  if (l1.value == "" || l2.value == "" || l3.value == "") {
    alert("Preencha todos os campos");
  } else if (l1.value < 1 || l2.value < 1 || l3.value < 1) {
    alert("Não são permitidos números negativos ou menores que 1!");
  } else if (l1.value == l2.value && l1.value == l3.value) {
    resultado.value = "Equilátero";
  } else if (
    l1.value == l2.value ||
    l2.value == l3.value ||
    l1.value == l3.value
  ) {
    resultado.value = "Isósceles";
  } else {
    resultado.value = "Escaleno";
  }
};
