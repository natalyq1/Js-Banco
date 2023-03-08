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
        cuentaCorriente2.saldo += valor
    }
}

const cliente1 = new Cliente();

cliente1.nombreCliente ="Jose"
cliente1.dniCliente = "13232"
cliente1.rutCliente = "13232"

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero ="5121215"
cuentaCorriente1.saldo = 1200000
cuentaCorriente1.agencia ="Independiente"

const cliente2 = new Cliente();

cliente2.nombreCliente ="Marco"
cliente2.dniCliente = "32555"
cliente2.rutCliente = "32555"

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero ="5125698"
cuentaCorriente2.saldo = 1000
cuentaCorriente2.agencia ="Colegio"

console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500)
console.log(cuentaCorriente2.saldo);
