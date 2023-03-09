
//definición de clases
class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente{
    numero;
    saldo;
    agencia;

    //metodo
    depositoEnCuenta(valor){
        //el this se usa para referirnos a esta cuenta, en la que se este actualmente
        this.saldo += valor
    }

    retirarDeCuenta(valor){
        this.saldo -= valor
    }
}

cuentaDeRaul = new CuentaCorriente()
//el programa no sabe que tipo de dato es, debemos asignarle uno
cuentaDeRaul.saldo = 0

cuentaDeRaul.depositoEnCuenta(100)
console.log(cuentaDeRaul);
cuentaDeRaul.retirarDeCuenta(50)
console.log(cuentaDeRaul);

/*
CuentaCorriente { numero: undefined, saldo: 100, agencia: undefined }
CuentaCorriente { numero: undefined, saldo: 50, agencia: undefined }
*/
