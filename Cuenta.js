
export class Cuenta {
    #cliente
    #saldo

    constructor(tipo, cliente, numero, agencia, saldo){
        this.tipo =tipo
        this.numero = numero
        this.agencia = agencia
        this.#cliente = cliente
        this.#saldo = saldo
    }

    //metodo
    depositoEnCuenta(valor){
        //el this se usa para referirnos a esta cuenta, en la que se este actualmente
        if (valor > 0) 
           this.#saldo += valor
        return this.#saldo
    }

    retirarDeCuenta(valor){
        //especializacion de clase
        if (this.tipo == 'Corriente') {
           valor = valor*1.05 //una comision cada q alguien retira de la cuenta corriente 
        }
        else if (this.tipo == 'Ahorro') {
            valor = valor*1.02 
        }
        
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

