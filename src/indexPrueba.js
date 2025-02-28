// let nombre_1= "Veronica";
// var edad_1 = "123";
// const cualquiercosa ="uvas";
// let activo = true;

// console.log(nombre_1);

// function esperar() {
//     return new Promise((resolver) => {
//         setTimeout(() => {
//             resolver("Hecho");
//         }, 2000);
//         });
//     }
    
//     async function ejecutar() {
//         console.log("Esperando...");
//         let resultado = await esperar();
//         console.log(resultado);
//     }
    
//     ejecutar();

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data);
    //     });


    // async function llamarapi() {
    //     try {
    //     let respuesta = await fetch(
    //         "https://jsonplaceholder.typicode.com/posts"
    //     ).then((response) => response.json());
    //     console.log(respuesta);
    //     } catch (error) {
    //     console.log("Error al obtener los datos" + error);
    //     }
    // }
    // // llamarapi();

    //     class Animal {
    //         constructor(nombre) {
    //         this.nombre = nombre;
    //         }
        
    //         hacerSonido() {
    //         console.log(this.nombre + " hace sonido");
    //         }
    //     }
        
        // let perro = new Animal("Gato");
        // perro.hacerSonido();


    //Crear clase

// class operacion {
//         constructor(num1, num2) {
//             this.num1=num1;
//             this.num2 =num2;
//         }

//         sumar() {
//             return this.num1 + this.num2;
//         }
//     }

// let operacionNueva = new operacion(5, 5);
// console.log(operacionNueva.sumar());

    // let elemento = document.getElementById("sumar");
    // elemento.addEventListener("click", () => {
    // alert("Hola")
    // let operacionNueva = new operacion(parseInt(document.getElementById("num1").value), parseInt(document.getElementById("num2").value));
    // console.log(operacionNueva.sumar())
    // ;
    // });


    // async function llamarOperacion{

    // }

    // async function ejecutarOperacion(){ //
    //     try{
    //         let elemento = document.getElementById("sumar");
    //         elemento.addEventListener("click", () => {
    //         alert("Realizando calculo de operacion")
    //         let operacionNueva = new operacion(parseInt(document.getElementById("num1").value), parseInt(document.getElementById("num2").value));
    //         resultado = operacionNueva.sumar();
    //         alert("El resultado: " + resultado);
    //         ;
    //         });
    //     }catch(error){
    //         alert("Error  " + error);
    //     }
    // }



    // function esperarResultado(operacionNueva) {
    //     return new Promise((resolver) => {
    //         setTimeout(() => {

    //             resolver(operacionNueva.sumar());
                
    //         }, 2000);
    //         });
    //     }
        
    //     async function ejecutarOperacion() {
    //         console.log("Esperando la operación...");
    //         let operacionNueva = new operacion(parseInt(document.getElementById("num1").value), parseInt(document.getElementById("num2").value));
    //         let resultado = await esperarResultado(operacionNueva);
    //         console.log("Resultado de operación " + resultado);
    //         console.log("Operación resuelta");
    //     }

    //     let elemento = document.getElementById("sumar");
    //     elemento.addEventListener("click", () => {
    //         ejecutarOperacion();
    //     });

    // class operacion {
    //     constructor(num1, num2) {
    //         this.num1=num1;
    //         this.num2 =num2;
    //     }

    //     sumar() {
    //         return this.num1 + this.num2;
    //     }

    //     restar() {
    //         return this.num1 - this.num2;
    //     }
        
    //     multiplicar() {
    //         return this.num1 * this.num2;
    //     }
        
    //     dividir() {
    //         return this.num1 / this.num2;
    //     }
    // }


    // function esperarResultadoSuma(operacionNueva) {
    //     return new Promise((resolver) => {
    //         setTimeout(() => {
    //             resolver(operacionNueva.sumar());
                
    //         }, 2000);
    //         });
    //     }
    
    // function esperarResultadoResta(operacionNueva) {
    //     return new Promise((resolver) => {
    //         setTimeout(() => {
    //             resolver(operacionNueva.restar());
                
    //         }, 2000);
    //         });
    //     }
    
    // function esperarResultadoMultiplicacion(operacionNueva) {
    //     return new Promise((resolver) => {
    //         setTimeout(() => {
    //             resolver(operacionNueva.multiplicar());
                
    //         }, 2000);
    //         });
    //     }

    // function esperarResultadoDivision(operacionNueva) {
    //     return new Promise((resolver) => {
    //         setTimeout(() => {
    //             resolver(operacionNueva.dividir());
                
    //         }, 2000);
    //         });
    //     }    
        

    //     async function ejecutarOperacion(tipoOperacion) {
    //         console.log("Realizando operación...");
    //         let operacionNueva = new operacion(parseInt(document.getElementById("num1").value), parseInt(document.getElementById("num2").value));
    //         let resultado;
    //         try {
    //             switch(tipoOperacion){
    //                 case 1:
    //                     resultado = await esperarResultadoSuma(operacionNueva);
    //                     console.log("Resultado de la suma " + resultado);
    //                     break;
    //                 case 2:
    //                     resultado = await esperarResultadoResta(operacionNueva);
    //                     console.log("Resultado de la resta " + resultado);
    //                     break;
    //                 case 3:
    //                     resultado = await esperarResultadoMultiplicacion(operacionNueva);
    //                     console.log("Resultado de la multiplicación " + resultado);
    //                     break;
    //                 case 4:
    //                     resultado = await esperarResultadoDivision(operacionNueva);
    //                     console.log("Resultado de la división " + resultado);
    //                     break;
                    
    //             }
    //         } catch (error) {
    //             console.log("Error  " + error);
    //         }
    //         // console.log("Resultado de operación " + resultado);
    //         console.log("Operación resuelta");
    //     }

    //     let elementoSumar = document.getElementById("sumar");
    //     elementoSumar.addEventListener("click", () => {
    //         ejecutarOperacion(1);
    //     });

    //     let elementoRestar = document.getElementById("restar");
    //     elementoRestar.addEventListener("click", () => {
    //         ejecutarOperacion(2);
    //     });

    //     let elementoMultiplicar = document.getElementById("multiplicar");
    //     elementoMultiplicar.addEventListener("click", () => {
    //         ejecutarOperacion(3);
    //     });
        
    //     let elementoDividir = document.getElementById("dividir");
    //     elementoDividir.addEventListener("click", () => {
    //         ejecutarOperacion(4);
        // });