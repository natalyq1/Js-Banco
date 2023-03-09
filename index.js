
//definición de clases
class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente{
    numero;
    #saldo;
    agencia;

    //el programa no sabe que tipo de dato es, debemos asignarle uno
    //constructor y en este caso atributo privado
    constructor(){
        this.#saldo = 0
        this.agencia = ''
        this.numero = ''
    }
  

    //metodo
    depositoEnCuenta(valor){
        //el this se usa para referirnos a esta cuenta, en la que se este actualmente
        if (valor > 0) 
           this.#saldo += valor
        return this.#saldo
    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo) 
            this.#saldo -= valor
        return this.#saldo
    }

    verSaldo(){
        return this.#saldo
    }
}

cuentaDeRaul = new CuentaCorriente()

//para ver saldo debo crear una variable que va a variar a medida de la ejecucion del programa
let saldo = cuentaDeRaul.verSaldo()


cuentaDeRaul.depositoEnCuenta(100)

cuentaDeRaul.retirarDeCuenta(30)

cuentaDeRaul.depositoEnCuenta(220)
saldo = cuentaDeRaul.verSaldo()
console.log(`El saldo actual es ${saldo}`);

/*
El saldo actual es 290
*/
