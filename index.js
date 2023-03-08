class Cliente{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nombreCliente ="Jose"
cliente1.dniCliente = "13232"
cliente1.numeroCuenta ="5121215"
cliente1.saldoCuenta = 1200000

cliente2.nombreCliente ="Marco"
cliente2.dniCliente = "32555"
cliente2.numeroCuenta ="5125698"
cliente2.saldoCuenta = 512000023

console.log(cliente1);
console.log(cliente2);
