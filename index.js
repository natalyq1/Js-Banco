//importacion de clases
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { Cuenta } from "./Cuentas/Cuenta.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

//esta debe definirse como una variable para funcionar por modulos
const cliente = new Cliente("Raul", "133548121", "1255548"); 
cliente.asignarClave('1111')
console.log(SistemaAutenticacion.login(cliente, '1111'));

const cliente2 = new Cliente("Maria", "233548121", "33355548");

const cuentaDeRaul = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente("Corriente", cliente2, "2", "002");

console.log(cliente);
console.log(cliente2);

const empleado = new Empleado('Juan Perez', '123432', 10000)
const gerente = new Gerente('Pedro Rivas', '15645', 12000)
const director = new Director('Elena Moreno', '4535645', 15000)
console.log(empleado);
empleado.asignarClave('12345')

console.log(SistemaAutenticacion.login(empleado, '12345'))
//false cuando no he asignado clave
//true despues de asignar
console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());
/*
Empleado {}
10000
12600
16500
*/