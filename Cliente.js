//definición de clases
export class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave

    //constructor es decirle que tipo de datos y son datos q no van a cambiar en el tiempo
    constructor(nombreCliente, dniCliente, rutCliente) {//estos son parametros
        this.nombreCliente = nombreCliente//estos son atributos de la clase
    this.dniCliente = dniCliente
    this.rutCliente = rutCliente
    this.#clave = ''
    }

    asignarClave(clave){
        this.#clave = clave
    }

    autenticable(clave){
        return true
    }
}