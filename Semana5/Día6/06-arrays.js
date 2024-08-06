let nums = [4, 5, 6 ,7];

//muchas veces vamos a tener que dar una función como argumento
//los argumentos que reciba esa función pueden tener el nombre que deseemos
//forEach no retorna nada
let forEachNums = nums.forEach(function (numerito, index, arr) {
    console.log("item:", numerito);
    console.log("indice:", index);
    console.log("arreglo:", arr);
    return numerito * 2; 
});
console.log("forEach", forEachNums); //da undefined

//podemos utilizar una función clásica como una función flecha
//Map va a transformar un arreglo según la expresión que reciba dentro de la función que va como argumento
let porDiez = nums.map((num, index, arr) => {
    return num * 10;
});

console.log("map", porDiez);

let numerosFiltrados = nums.filter((numerito) => {
    return numerito > 5;
})

console.log("filter", numerosFiltrados);

//find me devuelva el elemento que coincida con su busqueda
let existe = nums.find((numerito) => {
    // return numerito === 7; //existe
    // return numerito === 8; //no existe
    //find me va a devolver el primer item que coincida con la expresión indicada
    return numerito > 5;
})

console.log("find:", existe);

//findIndex, si encuentra un item en base a la expresión indicada me retornará el indice del item encontrado, en caso de no encontrar un item, me retonará -1
//puedo utilizar una expresión mas corta
let dondeExiste = nums.findIndex((numerito) => numerito === 5);
// let dondeExiste = nums.findIndex((numerito) => numerito === 10);

console.log("findIndex", dondeExiste);

//reduce, será utilizado para agrupar los items de una arreglo, en un solo resultado en base a la función que indiquemos
//la función que recibe reduce como argumento, tendrá diferentes parámetros a comparación de map, o forEach
let sumatoria = nums.reduce((acumulador, item) => {
    return acumulador + item;
})

console.log("reduce:", sumatoria);

