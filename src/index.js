class operacion {
    constructor(num1, num2) {
        this.num1=num1;
        this.num2 =num2;
    }

    sumar() {
        return this.num1 + this.num2;
    }

    restar() {
        return this.num1 - this.num2;
    }
    
    multiplicar() {
        return this.num1 * this.num2;
    }
    
    dividir() {
        if (this.num2 == 0) {
            throw new Error("No se puede dividir por cero");
        }
        return this.num1 / this.num2;
    }
}


    function esperarResultado(operacionNueva, tipoOperacion) {
        return new Promise((resolver) => {
            setTimeout(() => {
            
            try {
                switch(tipoOperacion){
                    case 1:
                        resolver(operacionNueva.sumar());
                        break;
                    case 2:
                        resolver(operacionNueva.restar());
                        break;
                    case 3:
                        resolver(operacionNueva.multiplicar());
                        break;
                    case 4:
                        resolver(operacionNueva.dividir());
                        break;
                }
            } catch (error) {
                console.log("Error  " + error);
            }
            }, 2000);
            });
        }    
    

    async function ejecutarOperacion(tipoOperacion) {
        console.log("Realizando operación...");
        let operacionNueva = new operacion(parseInt(document.getElementById("num1").value), parseInt(document.getElementById("num2").value));
        resultado = await esperarResultado(operacionNueva, tipoOperacion);
        console.log("Resultado de operación " + resultado);
        console.log("Operación resuelta");
    }

    let elementoSumar = document.getElementById("sumar");
    elementoSumar.addEventListener("click", () => {
        ejecutarOperacion(1);
    });

    let elementoRestar = document.getElementById("restar");
    elementoRestar.addEventListener("click", () => {
        ejecutarOperacion(2);
    });

    let elementoMultiplicar = document.getElementById("multiplicar");
    elementoMultiplicar.addEventListener("click", () => {
        ejecutarOperacion(3);
    });
    
    let elementoDividir = document.getElementById("dividir");
    elementoDividir.addEventListener("click", () => {
        ejecutarOperacion(4);
    });