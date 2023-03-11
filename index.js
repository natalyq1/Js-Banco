
//importacion de clases
import { Cliente } from "./Cliente.js"
import { CuentaCorriente } from "./CuentaCorriente.js";

//esta debe definirse como una variable para funcionar por modulos
const cliente = new Cliente('Raul', '133548121', '1255548')//ahora el cliente espera ciertos parametros luego de haber definido el constructor 
const cliente2 = new Cliente('Maria', '233548121', '33355548')

const cuentaDeRaul = new CuentaCorriente(cliente, '1', '001' )
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002' )

console.log(cliente);
console.log(cliente2);

console.log(CuentaCorriente.cantidadCuentas); //2
//para ver saldo debo crear una variable que va a variar a medida de la ejecucion del programa
let saldo = cuentaDeRaul.verSaldo()


cuentaDeRaul.depositoEnCuenta(100)

cuentaDeRaul.retirarDeCuenta(30)

cuentaDeRaul.depositoEnCuenta(220)
saldo = cuentaDeRaul.verSaldo()
console.log(`El saldo actual de la cuenta de Raul es ${saldo}`);

cuentaDeRaul.transferirParaCuenta(50,cuentaDeMaria);
saldo = cuentaDeRaul.verSaldo()
console.log(`El saldo actual de la cuenta de Raul es ${saldo} despues de haber transferido a Maria`);
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


