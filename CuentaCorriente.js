import { Cliente } from "./Cliente.js";

export class CuentaCorriente{
    //atriibutos
    cliente;
    numero;
    #saldo;
    agencia;

    //el programa no sabe que tipo de dato es, debemos asignarle uno
    //constructor y en este caso atributo privado
    constructor(){
        this.cliente = null//quiere decir q no existe pero esta explicito q va a existir
        this.numero = ''
        this.#saldo = 0
        this.agencia = ''
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

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor)
        cuentaDestino.depositoEnCuenta(valor)
    }
}