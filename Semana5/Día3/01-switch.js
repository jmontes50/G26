let mes = 4;

//switch (expresion1)
switch (mes) {
    //expresion 1 y expresion2 se compararán una por una
    //case <expresion2>:
    case 1: //else if
        console.log("Es Enero");
        //la sentencia break esta deteniendo que se ejecute sin considerar la expresion2
        break;
    case 2:
        console.log("Es Febrero");
        break;
    case 3:
        console.log("Es Marzo");
        break;
    case 4:
        console.log("Es Abril");
        break;  
    case 5:
        console.log("Es Mayo");
        break;
    case 6:
        console.log("Es Junio");
        break;
    case 7:
        console.log("Es Julio");
        break;
    case 8:
        console.log("Es Agosto");
        break;
    default: //equivalente a else
        console.log("No se encontro una coincidencia");
}