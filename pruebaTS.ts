console.log("Hola TypeScript");

const arraySum = require("array-sum");

const matrix: number[][] = new Array();
matrix.push([1,3,5,],[2,4,6],[7,9,8
]);
//console.table(matrix);
/*Esta función tiene un desempeño muy pobre en términos de notación Big O. 
Este algortitmo tiene la peor nota en la escala de eficiencia. 
Se dice que es un algoritmo cuadrático. Big O Notation -> O(n2). 
Lo utilizamos solo con fines didácticos. 
Siempre que tengamos bucles anidados, debería sonar una alarma en nuestra cabeza... y buscar una forma más eficiente
Hay un METODO DE ARRAYS QUE SE LLAMA REDUCE
*/
function matrixSum(mtx: number [][]): number {
    
    let accum: number = 0
    for (let i = 0; i < mtx.length; i++) {
        for (let j = 0; j <= mtx[i].length-1; j++) {
            //console.log(mtx[i][j]);
            accum = accum + mtx[i][j];
        }
    }
    return accum
}
console.log("Resuelve con un For dentro de otro For recorriendo y sumando los 3 subarrays. LA SUMA ES" + " " +matrixSum(matrix));

/* Aquí vemos que podemos reutilizar la lógica de la función anterior para recorrer la matriz y 
luego, en vez de devolver una suma, devolvemos un arreglo de una dimensión, sobre el que podemos 
ejecutar el método reduce. tambien es a modo de ejemplo ya que hay un METODO de Arrays QUE SE LLAMA FLAT que nos permite hacer Flat 
de un Array en un solo paso*/

/* function matrixFlat(mtx: number[][]): number[] {
    const flatArray: number[] = [];
    for (let i = 0; i < mtx.length; i++) {
      for (let j = 0; j < mtx[i].length; j++) {
        flatArray.push(mtx[i][j]);
      }
    }
    return flatArray;
  }
  console.log(matrixFlat(matrix));
  */

 
const initValue: number  = 0;
const result = matrix.flat();
//console.log(result);
result.reduce(
    (accum: number, currentValue: number) => 
            accum + currentValue, 
            initValue
);
//console.log(result);

const reducedNum = result.reduce(
    (accum: number, currValue: number) => 
    accum + currValue,
        initValue
);
      console.log("Resulta de FLAT en un solo Array los 3 subarrays y REDUCE sumando todos los valores del ARRAY FLAT. LA SUMA ES"  + " " + reducedNum);


/* Ahora lo hacemos con un Paquete/Libreria o /Dependencia (como quieran llamarlo) arraySum importado con npm i arraySrum
*/


console.log("Resuelto usando la Libreria arraySum. LA SUMA ES" + " " +arraySum(matrix.flat()));





 

