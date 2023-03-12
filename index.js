
//importacion de clases
import { Cliente } from "./Cliente.js"
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaAhorro } from "./CuentaAhorro.js"

//esta debe definirse como una variable para funcionar por modulos
const cliente = new Cliente('Raul', '133548121', '1255548')//ahora el cliente espera ciertos parametros luego de haber definido el constructor 
const cliente2 = new Cliente('Maria', '233548121', '33355548')

const cuentaDeRaul = new CuentaCorriente(cliente, '1', '001' )
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002' )

console.log(cliente);
console.log(cliente2);

const cuentaAhorroRaul = new CuentaAhorro(cliente, '9985','001', 0)
 console.log(cuentaDeRaul);
 console.log(cuentaAhorroRaul);
 /* 
CuentaCorriente { numero: '1', agencia: '001' } 
CuentaAhorro { numero: '9985', agencia: '001' }
 */