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


//La funcion leer producto pide al usuario los datos del producto y los asigna a un objeto producto , luego retorna el objeto modificado
function leerProducto(producto){
    producto.nombre = prompt('Ingrese el nombre del producto: ')
    producto.marca = prompt('Ingrese la marca del producto')
    producto.precio = Number(prompt('Ingrese el precio del producto: '))
    producto.cantidad = Number(prompt('Ingrese la cantidad de productos: ')) 
    return producto
}

//La funcion agregar producto recibe un objeto producto y un objeto carrito y agrega el producto al arreglo bolsa del carrito
function agregarProducto(producto,carrito){
    carrito.bolsa.push(producto)
}

//La funcion eliminar producto recibe el nombre del producto a eliminar y el objeto carrito , busca el producto en el arreglo bolsa y lo elimina
function eliminarProducto(nombre,carrito){
    let pos = carrito.bolsa.indexOf(nombre)
    if(pos !== -1){
        carrito.bolsa.splice(pos,1)
    }
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
    prompt('0. Salir ')
    prompt('')
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