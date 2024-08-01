/**
 * Usando un switch verifique si un número está en unos rangos especificos
 * a. Indique si el número esta entre 1 y 9
 * b. Indique si el número esta entre 10 y 19
 * c. Indique si el número esta entre 20 y 29
 * d. Indique si el número esta entre 30 y 39
 * e. Indique si es más de 40
 */

let numero = 15; //number

switch (true) {
  case numero > 0 && numero < 10: //a ---> es un booleano true ó false
    console.log("El número está entre 1 y 9");
    break;
  case numero > 10 && numero < 20: //b 
    console.log("El número está entre 10 y 19");
    break;
  case numero > 20 && numero < 30: //c
    console.log("El número está entre 20 y 29");
    break;
  case numero > 30 && numero < 40: //d
    console.log("El número está entre 30 y 39");
    break;
  default: //e
    console.log("El número esta fuera de los rangos considerados")
}