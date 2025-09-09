//Titulo en la consola para seprara el ejemplo
console.log(" + ----- Home -----");

//Definir 2 variables que simulen los datos ingresados por el usuario
let usuario = "admin";
let password = "1234";
//Definir una variable que simule la nota obtenida por el usuario
let nota = 100;

//Usar operadores de comparacion (===) y logicos (&&) para validar
let validarLogin = (usuario === "admin" && password === "1234");

//Estructura adicional IF para verificar el resultado de loginCorrecto
if (validarLogin) {
    //Si la condicion es verdadera (true), mostraoms el mensaje de exito
    console.log("Login correcto, bienvenido " + usuario);
} else {
    //Si la condicion es falsa (false), mostramos el mensaje de error
    console.log("Login incorrecto, verifique sus datos");
}

//Estructura IF-ELSE IF-ELSE para evaluar la variable nota

if (nota === 100) {
    console.log("Perfecto");
}  else if (nota >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//Bucles
//Bucle FOR
let i = 0;
console.log("----------Bucle FOR----------");
for (i = 0; i < 10; i++) {
    console.log("Número: " + i);
}

//Bucle WHILE
let o = 0;
console.log("----------Bucle WHILE----------");
while (o <= 10) {
    console.log("Número: " + o);
    o++;
}

//Bucle DO-WHILE
let u = 0;
console.log("----------Bucle DO-WHILE----------");
do {
    console.log("Número: " + u);
    u++;
} while (u <= 10);



//Funciones sin retorno
function shmensaje() {
    alert("Bienvenido a la Pagina!");
}
shmensaje(); //Ejecuta la funcion

//Funciones con parametros
function sumar(a, b) {
    return a + b;
}

let results = sumar (5, 7);
console.log("Resultado de su suma es: " + results);
