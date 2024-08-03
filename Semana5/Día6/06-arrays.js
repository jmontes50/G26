let nums = [4, 5, 6 ,7];

//muchas veces vamos a tener que dar una función como argumento
//los argumentos que reciba esa función pueden tener el nombre que deseemos
nums.forEach(function (numerito, index, arr) {
    console.log("item:", numerito);
    console.log("indice:", index);
    console.log("arreglo:", arr);
});

//podemos utilizar una función clásica como una función flecha
//Map va a transformar un arreglo según la expresión que reciba dentro de la función que va como argumento
let porDiez = nums.map((num, index, arr) => {
    return num * 10;
});

console.log(porDiez);