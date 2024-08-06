const PI = Math.PI;

const suma = (a, b) => a + b;

const medidas = [10, 20, 30, 40, 50];

//Exportación por defecto, 01 por defecto
export default suma;

//export normal, todo lo que deseemos, si no es por defecto tiene que ser con llaves, ya sea un obj, variable, función
export {
    PI,
    medidas
}