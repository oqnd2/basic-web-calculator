const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const { addition, subtraction } = require("../../operations");

let num1, num2, resultado;

Given("tengo los números {int} y {int}", function (a, b) {
  num1 = a;
  num2 = b;
});

When("los sumo", function () {
  resultado = addition(num1, num2);
});

When("los resto", function () {
  resultado = subtraction(num1, num2);
});

Then("el resultado debe ser {int}", function (esperado) {
  assert.strictEqual(resultado, esperado);
});