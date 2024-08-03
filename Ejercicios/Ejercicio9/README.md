# Ejercicio: Analizador de Texto en JavaScript

Crea una clase llamada `analizadorTexto` que tenga los siguientes métodos:

1. `obtenerLongitud()`: Devuelve la longitud total del texto.
2. `contarPalabras()`: Devuelve el número de palabras en el texto.
3. `obtenerPalabras()`: Devuelve un array con todas las palabras del texto.
4. `sumarNumeros()`: Suma todos los números que aparecen en el texto.

Implementa estos métodos utilizando propiedades y métodos de strings y arrays en JavaScript.

## Consejos

- Utiliza el método `split()` para separar las palabras.
- Puedes usar `length` para contar caracteres o elementos de un array.
- Considera usar expresiones regulares para identificar números en el texto.
- Recuerda que los métodos de string como `trim()` pueden ser útiles para limpiar el texto.

## Ejemplo de uso y resultados

```javascript
const texto = "Hola, este es un texto de ejemplo con 3 números: 10, 20 y 30.";
const analizador = analizadorTexto();

console.log(analizador.obtenerLongitud(texto)); // Resultado: 55
console.log(analizador.contarPalabras(texto)); // Resultado: 11
console.log(analizador.obtenerPalabras(texto)); // Resultado: ['Hola', 'este', 'es', 'un', 'texto', 'de', 'ejemplo', 'con', '3', 'números', '10', '20', '30']
console.log(analizador.sumarNumeros(texto)); // Resultado: 63
```
