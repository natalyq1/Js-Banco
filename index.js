
//importacion de clases
import { Cliente } from "./Cliente.js"
import { CuentaCorriente } from "./CuentaCorriente.js";

//esta debe definirse como una variable para funcionar por modulos
const cliente = new Cliente('Raul', '133548121', '1255548')//ahora el cliente espera ciertos parametros luego de haber definido el constructor 
const cliente2 = new Cliente('Maria', '233548121', '33355548')
console.log(cliente);
console.log(cliente2);

const cuentaDeRaul = new CuentaCorriente()
cuentaDeRaul.numero = '1'
cuentaDeRaul.agencia = '001'
cuentaDeRaul.cliente = cliente

console.log(cuentaDeRaul.cliente);

//para ver saldo debo crear una variable que va a variar a medida de la ejecucion del programa
let saldo = cuentaDeRaul.verSaldo()


cuentaDeRaul.depositoEnCuenta(100)

cuentaDeRaul.retirarDeCuenta(30)

cuentaDeRaul.depositoEnCuenta(220)
saldo = cuentaDeRaul.verSaldo()
console.log(`El saldo actual de la cuenta de Raul es ${saldo}`);




const cuentaDeMaria = new CuentaCorriente()
cuentaDeMaria.numero = '2'
cuentaDeMaria.agencia = '002'
cuentaDeMaria.cliente = cliente2
/*
Cliente {
  nombreCliente: 'Raul',
  dniCliente: '133548121',
  rutCliente: '1255548'
}
Cliente {
  nombreCliente: 'Maria',
  dniCliente: '233548121',
  rutCliente: '33355548'
}*/ 



//if (cuentaDeMaria.cliente) {
    console.log(cuentaDeMaria.cliente);
//}else
    //console.log(cuentaDeMaria);

//let parametroValor = 100

cuentaDeMaria.cliente = 0
//en este caso si yo quisiera dañar la integridad del cliente no es posible por instanceof en CuentaCorriente.js
console.log(cuentaDeMaria.cliente);
