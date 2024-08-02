let arr = [1, 2, 3, 4];

console.log(arr);

arr[3] = 10;

console.log(arr);

//push me permite agregar 01 item al final del arreglo
arr.push(20);

arr.push(30);

console.log(arr);

//pop, va a eliminar el último item de un arreglo
arr.pop();

console.log("después del 1er pop: ", arr);

arr.pop();

console.log("después del 2do pop: ", arr);

//shift, va a eliminar el primer item de un arreglo
arr.shift();

console.log("después del shift", arr);

//unshift, agregará un item al inicio del arreglo
arr.unshift(50);

console.log("después del unshift", arr);