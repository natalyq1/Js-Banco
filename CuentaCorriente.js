import { Cliente } from "./Cliente.js";

export class CuentaCorriente{
    //atributos
    #cliente;
    numero;
    #saldo;
    agencia;

    //asignar
    set cliente(valor){
        if (valor instanceof Cliente) {//si el valor recibido es una instancia de la clase cliente, de esta forma protejo el atributo cliente privado
          this.#cliente = valor  
        }
    }

    //obtener
    get cliente(){
        return this.#cliente
    }

    //el programa no sabe que tipo de dato es, debemos asignarle uno
    //constructor y en este caso atributo privado
    constructor(cliente, numero, agencia){
        this.cliente = cliente//quiere decir q no existe pero esta explicito q va a existir
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