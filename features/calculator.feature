Feature: Calculadora básica

  Scenario: Sumar dos números
    Given tengo los números 2 y 3
    When los sumo
    Then el resultado debe ser 5

  Scenario: Restar dos números
    Given tengo los números 5 y 2
    When los resto
    Then el resultado debe ser 3