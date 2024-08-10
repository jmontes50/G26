//ciudadano de primera clase
//podemos asignar una función a una variable
const suma = (a, b) => {
    return a + b;
}

//utilizar una función como argumento
const operacion = (funcion, a, b) => {
    return funcion(a, b);
}

console.log(operacion(suma, 10, 20));