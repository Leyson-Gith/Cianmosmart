/* =========================
   CARRITO
========================= */

let productosEnCarrito = localStorage.getItem("productos-en-carrito");

productosEnCarrito = JSON.parse(productosEnCarrito);

/* =========================
   ELEMENTOS
========================= */

const contenedorCarritoProductos =
document.querySelector("#carrito-productos");

const contenedorCarritoVacio =
document.querySelector("#carrito-vacio");

const contenedorCarritoAcciones =
document.querySelector("#carrito-acciones");

const contenedorCarritoComprado =
document.querySelector("#carrito-comprado");

const botonVaciar =
document.querySelector("#carrito-acciones-vaciar");

const botonComprar =
document.querySelector("#carrito-acciones-comprar");

const totalElemento =
document.querySelector("#total");

/* =========================
   CARGAR CARRITO
========================= */

function cargarProductosCarrito() {

    // CARRITO VACÍO

    if (
        productosEnCarrito &&
        productosEnCarrito.length > 0
    ) {

        contenedorCarritoVacio.classList.add("disabled");

        contenedorCarritoProductos.classList.remove("disabled");

        contenedorCarritoAcciones.classList.remove("disabled");

        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");

            div.classList.add("carrito-producto");

            div.innerHTML = `

                <img
                class="carrito-producto-imagen"
                src="${producto.imagen}"
                alt="${producto.titulo}">

                <div>
                    <small>Producto</small>
                    <h3>${producto.titulo}</h3>
                </div>

                <div>
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>

                <div>
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>

                <div>
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>

                <button
                class="carrito-producto-eliminar"
                id="${producto.id}">

                    <i class="bi bi-trash-fill"></i>

                </button>
            `;

            contenedorCarritoProductos.append(div);

        });

    } else {

        // SI ESTÁ VACÍO

        contenedorCarritoVacio.classList.remove("disabled");

        contenedorCarritoProductos.classList.add("disabled");

        contenedorCarritoAcciones.classList.add("disabled");

        contenedorCarritoComprado.classList.add("disabled");

    }

    actualizarBotonesEliminar();

    actualizarTotal();

}

/* =========================
   BOTONES ELIMINAR
========================= */

function actualizarBotonesEliminar() {

    const botonesEliminar =
    document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {

        boton.addEventListener("click", eliminarDelCarrito);

    });

}

/* =========================
   ELIMINAR PRODUCTO
========================= */

function eliminarDelCarrito(e) {

    const idBoton = e.currentTarget.id;

    const index =
    productosEnCarrito.findIndex(
        producto => producto.id == idBoton
    );

    // ALERTA

    Swal.fire({

        title: "Producto eliminado",
        text: "El producto fue eliminado del carrito.",
        icon: "success",
        background: "#151520",
        color: "#fff",
        confirmButtonColor: "#7c4dff"

    });

    // ELIMINAR

    productosEnCarrito.splice(index, 1);

    cargarProductosCarrito();

    localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosEnCarrito)
    );

}

/* =========================
   VACIAR CARRITO
========================= */

botonVaciar.addEventListener("click", () => {

    Swal.fire({

        title: "¿Vaciar carrito?",
        text: "Todos los productos serán eliminados.",
        icon: "warning",
        background: "#151520",
        color: "#fff",
        showCancelButton: true,
        confirmButtonText: "Sí, vaciar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#7c4dff",
        cancelButtonColor: "#ff4d6d"

    }).then(result => {

        if (result.isConfirmed) {

            productosEnCarrito = [];

            localStorage.setItem(
                "productos-en-carrito",
                JSON.stringify(productosEnCarrito)
            );

            cargarProductosCarrito();

        }

    });

});

/* =========================
   TOTAL
========================= */

function actualizarTotal() {

    const totalCalculado =
    productosEnCarrito.reduce(
        (acc, producto) =>
            acc + (producto.precio * producto.cantidad),
        0
    );

    totalElemento.innerText =
    `$${totalCalculado}`;

}

/* =========================
   COMPRAR
========================= */

botonComprar.addEventListener("click", () => {

    productosEnCarrito.length = 0;

    localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosEnCarrito)
    );

    contenedorCarritoVacio.classList.add("disabled");

    contenedorCarritoProductos.classList.add("disabled");

    contenedorCarritoAcciones.classList.add("disabled");

    contenedorCarritoComprado.classList.remove("disabled");

    // TOASTIFY

    Toastify({

        text: "Compra realizada correctamente 🛍️",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background:
            "linear-gradient(135deg,#7c4dff,#00d4ff)",
            borderRadius: "12px",
            padding: "14px"
        }

    }).showToast();

});


/* =========================
   INICIAR
========================= */

cargarProductosCarrito();