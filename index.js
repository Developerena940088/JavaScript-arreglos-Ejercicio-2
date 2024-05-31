//Ejercicio 1 Nuevo arreglo vacio y meter 10 numeros 
var numero = [];
//poniendo datos en el arreglo siempre es variable [posicion] = "valor"
numero [0] = "5";
numero [1] = "10";
numero [2] = "15";
numero [3] = "20";
numero [4] = "25";
numero [5] = "30";
numero [6] = "35";
numero [7] = "40";
numero [8] = "45";
numero [9] = "50";
numero [10] = "55";
console.log("Los diez numeros del arreglo son: " + numero);


// Ejercicio 2 El usuario deberá ingresar un arreglo con varios numeros 
// separadas por coma en un popup y se deben convertir en un arreglo
var string = prompt (`scribe valores separados por ,`);
var arreglo = string.split(`,`);
console.log("Tu cadena original es " + arreglo);
arreglo.sort();
console.log("convertidos y ordenados quedan asi " + arreglo);


// Ejercicio 3 De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor
//muestra el número menor y el número mayor.

var numeros = [10, 8, 9, 5, 3, 78, 23];
console.log("Este es el arreglo original " + numeros);
var orden = numeros.sort((a,b) => 
    {
    return a-b;
 }); 
console.log("Este es el arreglo ya ordenado "+ orden);