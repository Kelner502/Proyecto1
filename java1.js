
// ISERTO UN PEQUEÑO COMENTARIO PARA PODER ENTENDER EL PROGRAMA EN CONSOLA
let comentario = ["EL PRIMER OBJETO LLAMDO ESTA DESORDENADO EL SEGUNDO LO ORDENA Y EL TERCERO ES EL RESULTADO!"];
// DECLARO ACADA VARIABLE CON MIS CAMPOS Y SUS ATRIBUTOS DESORDENADAMENTE
var objeto1 = { b:2, c:3,a: 1 };
var objeto2 = {c:"Gogle",a:"Apple",b:"Microsoft"};
var objeto3 = {key1:"true",key3:"undefined",key2:"false"};

// INSERTO OTRAS VARIABLES PARA QUE ALMOMENTO DE ORDENAR  LO ORDENA A TRAVES DE LLAVES 
var objetoNuevo={};
var objetollaves=[];
var objetovalores=[];

// CREE UNA FUNCION DONDE  ORDENA MIS CAMPOS 
function orden(objeto) {
for (var llave of Object.keys(objeto).sort())
{
    objetoNuevo[llave]=objeto[llave];
}
objetollaves=Object.keys(objetoNuevo);
objetovalores=Object.values(objetoNuevo);
return{
    objetoNuevo ,objetollaves,objetovalores
}
 }

// FINAL MENTE LLAMO ATODAS LA FUNCIONES Y QUE SE ME MUESTREN EN CONSOLA .

 console.log(comentario)

//  MUESTRO LOS DATOS EN CONSOLA DE MI PRIMER OBJETO.
 console.log(objeto1)
 console.log(orden(objeto1).objetoNuevo);
 console.log(orden(objeto1).objetollaves,orden(objeto1).objetovalores);
 objetoNuevo={}; objetollaves=[];objetovalores=[];
 
 console.log(comentario)
//  MUESTRO LOS DATOS EN CONSOLA DE MI SEGUNDO OBJETO.
console.log(objeto2)
console.log(orden(objeto2).objetoNuevo);
console.log(orden(objeto2).objetollaves,orden(objeto2).objetovalores);
objetoNuevo={}; objetollaves=[]; objetovalores=[];

console.log(comentario)

//  MUESTRO LOS DATOS EN CONSOLA DE MI TERCER OBJETO.
console.log(objeto3);
console.log(orden(objeto3).objetoNuevo);
console.log(orden(objeto3).objetollaves,orden(objeto3).objetovalores);
objetoNuevo={}; objetollaves=[]; objetovalores=[];
