const producto = {
    nombre: string,
    marca: string,
    precio: double,
    cantidad: integer,
}

const carrito = {
    precioTotal: double,
    cantidadTotal: integer,
    bolsa : [],
}

const corte = 0; 

function leerProducto(producto){
    producto.nombre = prompt('Ingrese el nombre del producto: ')
    producto.marca = prompt('Ingrese la marca del producto')
    producto.precio = Number(prompt('Ingrese el precio del producto: '))
    producto.cantidad = Number(prompt('Ingrese la cantidad de productos: ')) 
    return producto
}

function agregarProducto(producto,carrito){
    carrito.bolsa.push(producto)
}

function opciones(opcion){
    prompt('--------------  MENU --------------')
    prompt('')
    prompt('1. Iniciar compra ')
    prompt('2. Agregar Producto ')
    prompt('3. Quitar producto ')
    prompt('4. Solicitar precio del carrito ')
    prompt('5. Consultar descuento ')
    prompt('6. Finalizar compra')

    opcion = Number(prompt('Ingrese una opcion: '))
    return opcion;
}

function menu(){
    let numero;
    opciones(numero)
    while(numero != corte)
        switch (numero){
            case 1:
            
            case 2:
            
            case 3:
            
            case 4:

            case 5:

            case 6:

            default:
                break;
        }
}