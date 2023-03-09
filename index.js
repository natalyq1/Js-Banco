
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
        if (valor > 0) {
           this.#saldo += valor 
        } 
    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo) {
            this.#saldo -= valor
        }
    }
}

cuentaDeRaul = new CuentaCorriente()


cuentaDeRaul.depositoEnCuenta(100)
console.log(cuentaDeRaul);
cuentaDeRaul.retirarDeCuenta(1000)
console.log(cuentaDeRaul);
cuentaDeRaul.depositoEnCuenta(-20)
console.log(cuentaDeRaul);

/*
CuentaCorriente { numero: '', agencia: '' }
CuentaCorriente { numero: '', agencia: '' }
CuentaCorriente { numero: '', agencia: '' }
*/
