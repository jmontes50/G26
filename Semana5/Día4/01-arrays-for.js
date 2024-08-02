//Sopa Wantan
let ingredientes = ["Pollo", "Wantan", "Cebolla China", "Aceite de Ajonjolí", "Canela China", "Azúcar", "Col China"];

//obtener 01 solo item, siempre el index comienza desde 0
console.log(ingredientes[1]);
//Longitud --> number
console.log("Cantidad:", ingredientes.length);

//comenzamos desde 0 para comenzar desde el inicio del arreglo
// al incrementar en 1 el i, podemos utilizarlo para ir de 1 en 1 por cada item del arreglo
for(let i = 0; i < ingredientes.length; i++){
  //i va ir cambiando/mutando, incrementandose de 1 en 1, de 0 a más 
  console.log(i, " - ", ingredientes[i])
}