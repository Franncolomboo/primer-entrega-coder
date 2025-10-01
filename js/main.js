// const producto = {
//     nombre: '',
//     marca: '',
//     precio: 0,
//     cantidad: 0,
// }

// const carrito = {
//     precioTotal: 0,
//     cantidadTotal: 0,
//     bolsa : [],
// }

// const corte = 0; 


// //La funcion leer producto pide al usuario los datos del producto y los asigna a un objeto producto , luego retorna el objeto modificado
// function leerProducto(producto){
//     producto.precio = Number(prompt('Ingrese el precio del producto: '))
//     if( producto.precio !==0){
//         producto.nombre = prompt('Ingrese el nombre del producto: ')
//         producto.marca = prompt('Ingrese la marca del producto')
//         producto.cantidad = Number(prompt('Ingrese la cantidad de productos: ')) 
//     }
//     return producto
// }

// //La funcion agregar producto recibe un objeto producto y un objeto carrito y agrega el producto al arreglo bolsa del carrito
// function agregarProducto(prod,carrito){
//     carrito.bolsa.push(prod)
//     carrito.precioTotal += (prod.precio * prod.cantidad)
//     carrito.cantidadTotal += prod.cantidad
// }

// function agregarProducto2(carrito){
//     let prod = {}
//     leerProducto(prod)
//     carrito.bolsa.push(prod)
//     carrito.precioTotal += (prod.precio * prod.cantidad)
//     carrito.cantidadTotal += prod.cantidad
// }

// //La funcion eliminar producto recibe el nombre del producto a eliminar y el objeto carrito , busca el producto en el arreglo bolsa y lo elimina
// function eliminarProducto(carrito){
//     let nombre = prompt('Ingrese el nombre del producto a eliminar: ')
//     let pos = carrito.bolsa.findIndex(item => item.nombre === nombre)
//     if(pos !== -1){
//         carrito.bolsa.splice(pos,1)
//     }
// }

// function compra(carrito){
//     let prod = {}
//     leerProducto(prod)

//     while(Number(prod.precio) !== 0){
//         agregarProducto(prod, carrito)
//         prod = {} // segun ChatGpt es mejor crear un nuevo objeto porque JS maneja los objetos por referencia y si no se crea un nuevo objeto se van a ir modificando los datos del mismo objeto
//         leerProducto(prod)  
//     }
// }

// function descuento(carrito){
//     if(carrito.cantidadTotal > 5 && carrito.precioTotal > 2000){
//         alert('Usted tiene un descuento del 10% por haber comprado mas de 5 productos y superar los $2000');
//         return carrito.precioTotal * 0.10; // monto del descuento
//     }
//     else{
//         alert('No aplica descuento');
//     }
//     return 0;
// }

// function finalizarCompra(carrito){
//     let desc = descuento(carrito);
//     let totalFinal = carrito.precioTotal - desc;

//     if (desc > 0) {
//         alert(
//             'Gracias por su compra!\n\n' +
//             'Subtotal: $' + carrito.precioTotal +
//             '\nDescuento: $' + desc +
//             '\nTotal final: $' + totalFinal
//         );
//     } else {
//         alert('Gracias por su compra! El total de su compra es: $' + carrito.precioTotal);
//     }

//     alert('Corrobore el detalle de su compra en la consola , ante cualquier duda comuniquese con nosotros');
    
//     for(let i=0; i < carrito.bolsa.length; i++){
//         alert('Nombre: ' + carrito.bolsa[i].nombre + '\n Marca: ' + carrito.bolsa[i].marca + '\n Precio: ' + carrito.bolsa[i].precio + '\n Cantidad: ' + carrito.bolsa[i].cantidad + '\n -----------------------------');
//     }
// }

// function mostrarCarritoActual(carrito){
//     alert('Los productos actuales del carrito se estan mostrando en consola! ')
//     for(let i=0 ;i<carrito.bolsa.length ;i++){
//         console.log('Nombre: '+ carrito.bolsa[i].nombre + ' Marca '+carrito.bolsa[i].marca + ' Precio: '+carrito.bolsa[i].precio + ', Cantidad: '+carrito.bolsa[i].cantidad)
//     }
// }


// function opciones(){
//     return  Number(prompt(
//             "--------------  MENU -------------- \n" +
//             "1. Iniciar compra \n" +
//             "2. Agregar Producto \n" +
//             "3. Eliminar producto \n" +
//             "4. Solicitar precio del carrito \n" +
//             "5. Consultar descuento \n" +
//             "6. Finalizar compra \n" +
//             "7. Mostrar carrito actual \n" +
//             "0. Salir \n" +
//             "Ingrese una opción: "
//         ));
// }

// function menu(){
//     let numero = opciones()
//     while(numero != corte){
//         switch (numero){
//             case 1:
//                 compra(carrito);
//                 break;
//             case 2:
//                 agregarProducto2(carrito);
//                 break;
//             case 3:
//                 eliminarProducto(carrito);
//                 break;
//             case 4:
//                 alert('El precio total del carrito es: ' + carrito.precioTotal);
//                 break;
//             case 5:
//                 descuento(carrito);
//                 break;
//             case 6:
//                 finalizarCompra(carrito);
//                 break;
//             case 7:
//                 mostrarCarritoActual(carrito);
//                 break;
//             case 0:
//                 break;
//         }
//         numero = opciones();
//     }
// }

// confirm('Bienvenido a nuestra tienda online! \n Presione Aceptar para continuar');



//menu();

const carrito = {
    precioTotal: 0,
    cantidadTotal: 0,
    bolsa : [],
}

const form = document.getElementById('producto-form');
const mensajeDiv = document.getElementById('mensaje');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const producto = {
        nombre: document.getElementById('nombre').value,
        marca: document.getElementById('marca').value,
        precio: parseFloat(document.getElementById('precio').value),
        cantidad: parseInt(document.getElementById('cantidad').value),
    };

    carrito.bolsa.push(producto);
    carrito.precioTotal += (producto.precio * producto.cantidad);
    carrito.cantidadTotal += producto.cantidad;

    mensajeDiv.innerHTML = `<p>¡Producto agregado al carrito!</p>`;
    mensajeDiv.style.color = 'green';
    mensajeDiv.style.textAlign = 'center';

    setTimeout(() => {
        mensajeDiv.style.opacity = '0';
    }, 2000);

    setTimeout(() => {
        mensajeDiv.innerHTML = '';
    }, 4000);


    form.reset();
})