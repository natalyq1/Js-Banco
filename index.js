
//importacion de clases
import { Cliente } from "./Cliente.js"
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaAhorro } from "./CuentaAhorro.js"
import { Cuenta } from "./Cuenta.js"


//esta debe definirse como una variable para funcionar por modulos
const cliente = new Cliente('Raul', '133548121', '1255548')//ahora el cliente espera ciertos parametros luego de haber definido el constructor 
const cliente2 = new Cliente('Maria', '233548121', '33355548')

const cuentaDeRaul = new CuentaCorriente(cliente, '1', '001')
const cuentaDeMaria = new CuentaCorriente('Corriente', cliente2, '2', '002')

console.log(cliente);
console.log(cliente2);
 /* 
const cuentaAhorroRaul = new CuentaAhorro(cliente, '9985','001', 0)
console.log(cuentaDeRaul);
cuentaDeRaul.depositoEnCuenta(150)
console.log(cuentaDeRaul.verSaldo());
cuentaDeRaul.retirarDeCuenta(30)
console.log(cuentaDeRaul.verSaldo());

console.log(cuentaAhorroRaul);
cuentaAhorroRaul.depositoEnCuenta(120)
console.log(cuentaAhorroRaul.verSaldo());
cuentaAhorroRaul.retirarDeCuenta(30)
console.log(cuentaAhorroRaul.verSaldo());

Cliente {
  nombreCliente: 'Raul',
  dniCliente: '133548121',
  rutCliente: '1255548'
}
Cliente {
  nombreCliente: 'Maria',
  dniCliente: '233548121',
  rutCliente: '33355548'
}
CuentaCorriente { numero: '1', agencia: '001' }
150
120
CuentaAhorro { numero: '9985', agencia: '001' }
120
90
89.4
 */

const cuentaSimple = new Cuenta(cliente, '098', '001', 100)
console.log(cuentaSimple);
