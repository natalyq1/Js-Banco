import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{
    
    static cantidadCuentas = 0 

    constructor(cliente, numero, agencia){
        //para acceder al padre
        super(cliente, numero, agencia, 0);
        CuentaCorriente.cantidadCuentas++
    }
    
    retirarDeCuenta(valor){
        valor = valor*1.05
        super.retirarDeCuenta(valor)
    }
}