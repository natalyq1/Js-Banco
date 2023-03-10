
//importacion de clases
import { CuentaCorriente } from "./CuentaCorriente.js";
//esta debe definirse como una variable para funcionar por modulos
const cuentaDeRaul = new CuentaCorriente()

//para ver saldo debo crear una variable que va a variar a medida de la ejecucion del programa
let saldo = cuentaDeRaul.verSaldo()


cuentaDeRaul.depositoEnCuenta(100)

cuentaDeRaul.retirarDeCuenta(30)

cuentaDeRaul.depositoEnCuenta(220)
saldo = cuentaDeRaul.verSaldo()
console.log(`El saldo actual es ${saldo}`);

/*
El saldo actual es 290
*/
