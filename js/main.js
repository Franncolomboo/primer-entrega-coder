// Inicializo carrito leyendo del localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || {
    precioTotal: 0,
    cantidadTotal: 0,
    bolsa: []
};

// Referencias a elementos
const form = document.getElementById('producto-form');
const mensajeDiv = document.getElementById('mensaje');
const cantidadCarrito = document.getElementById('cantidad-carrito');
const compraFinal = document.getElementById('btn-finalizar');
const detalleCompra = document.getElementById('detalle-compra');

cantidadCarrito.style.display = 'none';

// Función para actualizar el localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Mostrar cantidad en el ícono al cargar la página
if (carrito.cantidadTotal > 0) {
    cantidadCarrito.textContent = carrito.cantidadTotal;
    cantidadCarrito.style.display = 'block';
}

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

    // Guardar en localStorage cada vez que se agrega
    guardarCarrito();

    // ✅ mensaje
    mensajeDiv.textContent = "¡Producto agregado al carrito!";
    mensajeDiv.style.color = 'green';
    mensajeDiv.style.textAlign = 'center';
    mensajeDiv.style.opacity = '1';

    setTimeout(() => {
        mensajeDiv.style.opacity = '0';
    }, 2000);

    setTimeout(() => {
        mensajeDiv.textContent = "";
        mensajeDiv.style.opacity = '1'; // reset
    }, 4000);

    cantidadCarrito.textContent = carrito.cantidadTotal;
    cantidadCarrito.style.display = 'block';
    cantidadCarrito.style.textAlign = 'center';
    cantidadCarrito.style.padding = '0.2rem 0.2rem';
    form.reset();
});

function cerrarDetalle(){
    detalleCompra.style.display = 'none';
    carrito = { precioTotal: 0, cantidadTotal: 0, bolsa: [] };
    guardarCarrito();
    cantidadCarrito.style.display = 'none';
}

compraFinal.addEventListener('click', function(event){
    event.preventDefault();

    if (carrito.bolsa.length === 0) {
        mensajeDiv.textContent = "El carrito está vacío.";
        mensajeDiv.style.color = 'red';
        mensajeDiv.style.textAlign = 'center';
        mensajeDiv.style.opacity = '1';

        setTimeout(() => { mensajeDiv.style.opacity = '0'; }, 2000);
        setTimeout(() => { mensajeDiv.textContent = ""; mensajeDiv.style.opacity = '1'; }, 4000);

        return;
    } else {
        let i = 1;
        detalleCompra.innerHTML = `
            <button onclick="cerrarDetalle()" class="btn-cerrar-detalle" type="button" id="cerrar-detalle">❌</button>
            <h3>Detalle de la compra:</h3>
        `;

        carrito.bolsa.forEach(item => {
            detalleCompra.innerHTML += `
                <p>${i} | Nombre: ${item.nombre} | Marca: ${item.marca} | Precio: $${item.precio} | Cantidad: ${item.cantidad}</p>
                <hr>
            `;
            i++;
        });

        detalleCompra.innerHTML += `<h3>Total a pagar: $${carrito.precioTotal}</h3>`;
        detalleCompra.style.cssText = `
            color: black;
            background-color: gray;
            border-radius: 0.625rem;
            width: 600px;
            text-align: center;
            padding: 1rem;
            margin: 1rem auto;
            font-family: Poppins, sans-serif;
            position: relative;
        `;
    }
});

// Render del carrito

const carritoIcono = document.getElementById("carrito-icon"); 
const miniCarrito = document.getElementById("carrito-render");

function renderCarrito() {
    miniCarrito.innerHTML = "";
    miniCarrito.style.backgroundColor = 'gray';
    miniCarrito.style.borderRadius = '0.625rem';
    miniCarrito.style.width = '300px';
    miniCarrito.style.padding = '1rem';
    miniCarrito.style.position = 'absolute';
    miniCarrito.style.bottom = '80px';
    miniCarrito.style.right = '15px';
    miniCarrito.style.fontFamily = 'Poppins, sans-serif';
    miniCarrito.style.color = 'white';
    miniCarrito.style.textAlign = 'center';

    if (carrito.bolsa.length === 0) {
        miniCarrito.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    carrito.bolsa.forEach((item, index) => {
        miniCarrito.innerHTML += `
            <div style="margin-bottom:8px;">
                <strong>${item.nombre}</strong> (${item.cantidad}) - $${item.precio}
                <button type="button" onclick="eliminarDelCarrito(${index})">❌</button>
            </div>
        `;
    })

    miniCarrito.innerHTML += `<hr><p><strong>Total: $${carrito.precioTotal}</strong></p>`;
}

function eliminarDelCarrito(index) {
    const prod = carrito.bolsa[index];
    carrito.precioTotal -= prod.precio * prod.cantidad;
    carrito.cantidadTotal -= prod.cantidad;
    carrito.bolsa.splice(index, 1);

    guardarCarrito();
    cantidadCarrito.textContent = carrito.cantidadTotal;
    renderCarrito();
}

carritoIcono.addEventListener("click", () => {
    if (miniCarrito.style.display === "none" || miniCarrito.style.display === "") {
        renderCarrito();
        miniCarrito.style.display = "block";
    } else {
        miniCarrito.style.display = "none";
    }
});
