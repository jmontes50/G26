let fecha = new Date();

console.log(fecha);

console.log(fecha.getFullYear()); //año

console.log(fecha.getMonth()); //mes //va a contar desde el 0
//0 es enero, 1 es febrero .... 11 es diciembre

console.log(fecha.getDate()); //Día

console.log(fecha.getDay());  //Día de la semana 
//0 es domingo, 1 es Lunes ... 6 sábado

console.log(fecha.getHours()); //Hora
console.log(fecha.getMinutes()); //Minutos
console.log(fecha.getSeconds()); //Segundos

// console.log(fecha.getTimezoneOffset());

console.log(fecha.getTime()) //timestamp

//new Date( año, mes, día)
let navidad = new Date(2024, 11, 25);

console.log(navidad.getTime());

let tiempo = navidad - fecha;
console.log(tiempo)
