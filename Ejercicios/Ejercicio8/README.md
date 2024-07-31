Entendido. Aquí tienes la versión sin formato markdown, en texto normal:

Ejercicios de JavaScript para Estudiantes

1. Contador Regresivo (usando while)

Descripción
Crea un programa que implemente un contador regresivo desde 10 hasta 0. Este ejercicio te ayudará a comprender cómo funciona el bucle while y cómo se puede utilizar para repetir una acción hasta que se cumpla una condición específica.

Objetivo
El programa debe imprimir en la consola los números del 10 al 0, en orden descendente.

Tips
- Inicia con una variable count establecida en 10.
- Utiliza un bucle while que se ejecute mientras count sea mayor o igual a 0.
- Dentro del bucle, imprime el valor actual de count y luego disminúyelo en 1.

Pista
Recuerda que el operador de decremento (--) puede ser útil para reducir el valor de una variable en 1 en cada iteración.

Resultado Esperado
```
10
9
8
7
6
5
4
3
2
1
0
```

2. Generador de Números Aleatorios (usando do-while)

Descripción
Desarrolla un programa que genere números aleatorios entre 0 y 1 hasta que produzca un número mayor que 0.8. Este ejercicio te permitirá practicar con el bucle do-while y la generación de números aleatorios en JavaScript.

Objetivo
El programa debe generar y mostrar números aleatorios hasta que produzca uno mayor que 0.8, momento en el cual deberá detenerse.

Tips
- Utiliza Math.random() para generar números aleatorios entre 0 y 1.
- El bucle do-while es ideal para este caso porque necesitas ejecutar el código al menos una vez antes de verificar la condición.

Pista
La diferencia clave entre while y do-while es que do-while siempre ejecuta el bloque de código al menos una vez antes de verificar la condición.

Resultado Esperado
```
0.2564789
0.7845123
0.1234567
0.9876543
```

Nota: Los números serán diferentes cada vez que se ejecute el programa debido a su naturaleza aleatoria.

3. Números Pares (usando for)

Descripción
Crea un programa que imprima todos los números pares desde 0 hasta 20, inclusive. Este ejercicio te ayudará a familiarizarte con el bucle for y cómo utilizarlo para iterar sobre un rango específico de números.

Objetivo
El programa debe imprimir en la consola todos los números pares entre 0 y 20.

Tips
- Puedes usar un bucle for que comience en 0 y termine en 20.
- Para imprimir solo los números pares, puedes incrementar tu variable de control en 2 en cada iteración en lugar de 1.

Pista
Recuerda que puedes modificar la expresión de incremento en un bucle for. Por ejemplo, i += 2 incrementará i en 2 en cada iteración.

Resultado Esperado
```
0
2
4
6
8
10
12
14
16
18
20
```

4. Suma de Números Naturales (usando for)

Descripción
Desarrolla un programa que calcule la suma de los primeros 100 números naturales (1 al 100). Este ejercicio te permitirá practicar con bucles for y acumuladores.

Objetivo
El programa debe calcular y mostrar la suma de todos los números del 1 al 100.

Tips
- Utiliza una variable sum inicializada en 0 para acumular la suma.
- Emplea un bucle for que itere desde 1 hasta 100.
- En cada iteración, añade el número actual a sum.

Pista
La fórmula matemática para la suma de los primeros n números naturales es n * (n + 1) / 2. Puedes usar esto para verificar tu resultado.

Resultado Esperado
```
La suma es: 5050
```

5. Tabla de Multiplicar (usando for)

Descripción
Crea un programa que imprima la tabla de multiplicar del 7 (desde 1 hasta 10). Este ejercicio te ayudará a practicar con bucles for y la concatenación de strings en JavaScript.

Objetivo
El programa debe mostrar la tabla de multiplicar del 7, desde 7x1 hasta 7x10.

Tips
- Utiliza un bucle for que itere desde 1 hasta 10.
- En cada iteración, multiplica el número actual por 7.
- Usa template literals (`) para formatear cada línea de la tabla.

Pista
Los template literals en JavaScript te permiten insertar expresiones directamente en strings utilizando ${expresión}.

Resultado Esperado
```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

6. Calculadora de Área de Círculo (usando funciones)

Descripción
Implementa una función que calcule el área de un círculo dado su radio. Este ejercicio te ayudará a practicar la creación de funciones y el uso de constantes matemáticas en JavaScript.

Objetivo
Crear una función calcularAreaCirculo que tome el radio como parámetro y devuelva el área del círculo.

Tips
- Utiliza la constante [Math.PI](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) para obtener el valor de π.
- Recuerda que el área de un círculo se calcula con la fórmula A = πr².
- Puede utilizar [Math.pow()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)

Pista
Puedes usar Math.pow(radio, 2) o simplemente radio * radio para calcular el cuadrado del radio.

Resultado Esperado
```
Para un radio de 5 unidades:
El área del círculo es: 78.53981633974483
```

7. Verificador de Números Primos (usando funciones)

Descripción
Desarrolla una función que determine si un número dado es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Este ejercicio te permitirá practicar con funciones, bucles y condicionales.

Objetivo
Crear una función esPrimo que tome un número como argumento y devuelva true si es primo, o false si no lo es.

Tips
- Recuerda que 1 no se considera primo por definición.
- Puedes optimizar tu función comprobando solo hasta la [raíz cuadrada](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) del número.
- Utiliza el operador módulo (%) para verificar si un número es divisible por otro.

Pista
Si encuentras algún divisor entre 2 y la raíz cuadrada del número, puedes concluir inmediatamente que el número no es primo.

Resultado Esperado
```
esPrimo(7) devuelve: true
esPrimo(12) devuelve: false
esPrimo(23) devuelve: true
esPrimo(1) devuelve: false
```

8. Conversor de Temperatura (usando funciones)

Descripción
Crea una función que convierta una temperatura de grados Celsius a Fahrenheit. Este ejercicio te ayudará a practicar con funciones y operaciones matemáticas en JavaScript.

Objetivo
Implementar una función celsiusAFahrenheit que tome una temperatura en Celsius como argumento y devuelva su equivalente en Fahrenheit.

Tips
- La fórmula para convertir de Celsius a Fahrenheit es: F = (C * 9/5) + 32
- Asegúrate de que tu función maneje correctamente los decimales.

Pista
Puedes usar [Math.round()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round) si deseas redondear el resultado a un número entero.

Resultado Esperado
```
0°C es igual a 32°F
100°C es igual a 212°F
-40°C es igual a -40°F
25°C es igual a 77°F
```

9. Buscador del Número Máximo (usando arrays y for)

Descripción
Implementa una función que encuentre el número más grande en un array de números. Este ejercicio te permitirá practicar con arrays y bucles for.

Objetivo
Crear una función encontrarMaximo que tome un array de números como argumento y devuelva el número más grande del array.

Tips
- Asume que el primer elemento es el más grande y compáralo con el resto.
- Utiliza un bucle for para recorrer el array desde el segundo elemento.
- Actualiza el máximo si encuentras un número mayor.

Pista
Puedes inicializar tu variable maximo con el primer elemento del array (arr[0]) antes de comenzar el bucle.

Resultado Esperado
```
Para el array [3, 7, 2, 9, 1, 5]:
El número más grande es: 9
```

10. Filtro de Números Pares (usando arrays y for)

Descripción
Desarrolla una función que filtre los números pares de un array dado. Este ejercicio te ayudará a practicar con arrays, bucles for y el método push().

Objetivo
Crear una función filtrarPares que tome un array de números como argumento y devuelva un nuevo array que contenga solo los números pares del array original.

Tips
- Crea un nuevo array vacío para almacenar los números pares.
- Utiliza un bucle for para recorrer el array original.
- Usa el operador módulo (%) para verificar si cada número es par.
- Añade los números pares al nuevo array usando push().

Pista
Un número es par si el resto de su división por 2 es igual a 0.

Resultado Esperado
```
Para el array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
Los números pares son: [2, 4, 6, 8, 10]
```

11. Calculadora de Promedio (usando arrays y for)

Descripción
Implementa una función que calcule el promedio de los números en un array dado. Este ejercicio te permitirá practicar con arrays, bucles for y operaciones matemáticas básicas.

Objetivo
Crear una función calcularPromedio que tome un array de números como argumento y devuelva el promedio de esos números.

Tips
- Utiliza una variable para acumular la suma de todos los números.
- Emplea un bucle for para recorrer el array y sumar cada elemento.
- Divide la suma total por la longitud del array para obtener el promedio.

Pista
Puedes obtener la longitud de un array usando la propiedad length.

Resultado Esperado
```
Para el array [2, 4, 6, 8, 10]:
El promedio es: 6
```2