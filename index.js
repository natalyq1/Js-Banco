
//importacion de clases
import { Cliente } from "./Cliente.js"
import { CuentaCorriente } from "./CuentaCorriente.js";

//esta debe definirse como una variable para funcionar por modulos
const cliente = new Cliente()
cliente.nombreCliente = 'Raul'
cliente.dniCliente = '133548121'
cliente.rutCliente = '1255548'

const cuentaDeRaul = new CuentaCorriente()
cuentaDeRaul.numero = '1'
cuentaDeRaul.agencia = '001'
cuentaDeRaul.cliente = cliente

console.log(cuentaDeRaul);

//para ver saldo debo crear una variable que va a variar a medida de la ejecucion del programa
let saldo = cuentaDeRaul.verSaldo()


cuentaDeRaul.depositoEnCuenta(100)

cuentaDeRaul.retirarDeCuenta(30)

cuentaDeRaul.depositoEnCuenta(220)
saldo = cuentaDeRaul.verSaldo()
console.log(`El saldo actual es ${saldo}`);

/*Relación de clases
CuentaCorriente {
  cliente: Cliente {
    nombreCliente: 'Raul',
    dniCliente: '133548121',
    rutCliente: '1255548'
  },
  numero: '1',
  agencia: '001'
}
El saldo actual es 290
*/
