
export class Cuenta {
    #cliente
    #saldo

    constructor(cliente, numero, agencia, saldo){
        if (this.constructor == Cuenta) {
            throw new Error('No se puede instanciar un objeto de la clase cuenta')
        }
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
        //se conviritio en metodo abstracto
        throw new Error('Debe implementar el metodo retirar de cuenta en su clase')
    }

    _retirarDeCuenta(valor, comision){
        valor = valor *(1+comision/100)
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

