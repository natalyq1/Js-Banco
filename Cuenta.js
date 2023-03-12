
export class Cuenta {
    #cliente
    #saldo

    constructor(cliente, numero, agencia, saldo){
        
        this.numero = numero
        this.agencia = agencia
        this.#cliente = cliente
        this.#saldo = saldo
    }

    set cliente(valor){
        if (valor instanceof Cliente) {
          this.#cliente = valor  
        }
    }

    get cliente(){
        return this.#cliente
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

