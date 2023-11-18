var nome = prompt("Digite o seu nome: ");
var valorAnosLuz = prompt("Informe o valor em anos luz: ");
var valorMetros = prompt("Informe o valor em metros: ");
var valorKm = valorMetros / 1000;

var valorAnosLuzMetros = valorAnosLuz * 299792458 * 31536000;
var valorAnosLuzKm = valorAnosLuzMetros / 1000;
var valorMetrosAnosLuz = valorMetros * 0.0000000000000001057;

alert(
  "Opa " +
    nome +
    " " +
    valorAnosLuz +
    " anos luz em metros são " +
    valorAnosLuzMetros +
    ", ou " +
    valorAnosLuzKm +
    " km. " +
    "Já " +
    valorMetros +
    " metros, ou " +
    valorKm +
    " km, em anos luz é aproximadamente " +
    valorMetrosAnosLuz.toFixed(2)
);