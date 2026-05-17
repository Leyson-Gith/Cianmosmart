/* =========================
   PRODUCTOS - ARTE
========================= */

const productos = [

    {
        id: "arte-01",
        titulo: "Abstracto",
        imagen: "./Img/Abstracto.jpg",
        categoria: {
            nombre: "Abstractos",
            id: "abstractos"
        },
        precio: 270000
    },

    {
        id: "arte-02",
        titulo: "Bluerox",
        imagen: "./Img/Bluerox.jpg",
        categoria: {
            nombre: "Modernos",
            id: "modernos"
        },
        precio: 320000
    },

    {
        id: "arte-03",
        titulo: "Chelaa",
        imagen: "./Img/Chelaa.jpg",
        categoria: {
            nombre: "Modernos",
            id: "modernos"
        },
        precio: 290000
    },

    {
        id: "arte-04",
        titulo: "Crisiro",
        imagen: "./Img/Crisiro.jpg",
        categoria: {
            nombre: "Abstractos",
            id: "abstractos"
        },
        precio: 240000
    },

    {
        id: "arte-05",
        titulo: "Cuaren",
        imagen: "./Img/Cuaren.jpg",
        categoria: {
            nombre: "Modernos",
            id: "modernos"
        },
        precio: 350000
    },

    {
        id: "arte-06",
        titulo: "Espátula",
        imagen: "./Img/Espatula.jpg",
        categoria: {
            nombre: "Abstractos",
            id: "abstractos"
        },
        precio: 280000
    },

    {
        id: "arte-07",
        titulo: "Estudio",
        imagen: "./Img/Estudio.jpg",
        categoria: {
            nombre: "Modernos",
            id: "modernos"
        },
        precio: 310000
    },

    {
        id: "arte-08",
        titulo: "Hijos Míos",
        imagen: "./Img/Hijos_Mios.jpg",
        categoria: {
            nombre: "Retratos",
            id: "retratos"
        },
        precio: 420000
    },

    {
        id: "arte-09",
        titulo: "Maternidad",
        imagen: "./Img/Maternidad.jpg",
        categoria: {
            nombre: "Retratos",
            id: "retratos"
        },
        precio: 410000
    },

    {
        id: "arte-10",
        titulo: "Mosmart",
        imagen: "./Img/Mosmart.jpg",
        categoria: {
            nombre: "Modernos",
            id: "modernos"
        },
        precio: 500000
    },

    {
        id: "arte-11",
        titulo: "Ocean",
        imagen: "./Img/Ocean.jpg",
        categoria: {
            nombre: "Abstractos",
            id: "abstractos"
        },
        precio: 340000
    },

    {
        id: "arte-12",
        titulo: "Retrato 01",
        imagen: "./Img/Retrato 01.jpg",
        categoria: {
            nombre: "Retratos",
            id: "retratos"
        },
        precio: 450000
    },

    {
        id: "arte-13",
        titulo: "Retrato 02",
        imagen: "./Img/Retrato 02.jpg",
        categoria: {
            nombre: "Retratos",
            id: "retratos"
        },
        precio: 470000
    },

    {
        id: "arte-14",
        titulo: "Retrato 03",
        imagen: "./Img/Retrato 03.jpg",
        categoria: {
            nombre: "Retratos",
            id: "retratos"
        },
        precio: 490000
    },

    {
        id: "arte-15",
        titulo: "Tambor",
        imagen: "./Img/Tambor.jpg",
        categoria: {
            nombre: "Modernos",
            id: "modernos"
        },
        precio: 300000
    }

];

/* =========================
   CONTENEDOR PRODUCTOS
========================= */

const contenedorProductos =
document.querySelector("#contenedor-productos");

const botonesCategorias =
document.querySelectorAll(".boton-categoria");

const tituloPrincipal =
document.querySelector("#titulo-principal");

let botonesAgregar =
document.querySelectorAll(".producto-agregar");

const numerito =
document.querySelector("#numerito");

/* =========================
   MOSTRAR PRODUCTOS
========================= */

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");

        div.classList.add("producto");

        div.innerHTML = `

            <img
            class="producto-imagen"
            src="${producto.imagen}"
            alt="${producto.titulo}">

            <div class="producto-detalles">

                <h3 class="producto-titulo">
                    ${producto.titulo}
                </h3>

                <p class="producto-precio">
                    $${producto.precio}
                </p>

                <button
                class="producto-agregar"
                id="${producto.id}">

                    <i class="bi bi-palette-fill"></i>
                    Comprar arte

                </button>

            </div>

        `;

        contenedorProductos.append(div);

    });

    actualizarBotonesAgregar();

}

cargarProductos(productos);

/* =========================
   FILTROS
========================= */

botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(
            boton =>
            boton.classList.remove("active")
        );

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {

            const productoCategoria =
            productos.find(
                producto =>
                producto.categoria.id ===
                e.currentTarget.id
            );

            tituloPrincipal.innerText =
            productoCategoria.categoria.nombre;

            const productosBoton =
            productos.filter(
                producto =>
                producto.categoria.id ===
                e.currentTarget.id
            );

            cargarProductos(productosBoton);

        } else {

            tituloPrincipal.innerText =
            "Galería de Arte";

            cargarProductos(productos);

        }

    });

});

/* =========================
   CARRITO
========================= */

let productosEnCarrito;

let productosEnCarritoLS =
localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {

    productosEnCarrito =
    JSON.parse(productosEnCarritoLS);

    actualizarNumerito();

} else {

    productosEnCarrito = [];

}

/* =========================
   BOTONES AGREGAR
========================= */

function actualizarBotonesAgregar() {

    botonesAgregar =
    document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {

        boton.addEventListener(
            "click",
            agregarAlCarrito
        );

    });

}

/* =========================
   AGREGAR AL CARRITO
========================= */

function agregarAlCarrito(e) {

    Toastify({

        text: "Obra agregada 🎨",
        duration: 2500,
        gravity: "top",
        position: "right",

        style: {

            background:
            "linear-gradient(135deg,#ff7b00,#00cfff)",

            borderRadius: "12px",

            padding: "14px"

        }

    }).showToast();

    const idBoton =
    e.currentTarget.id;

    const productoAgregado =
    productos.find(
        producto =>
        producto.id === idBoton
    );

    if (
        productosEnCarrito.some(
            producto =>
            producto.id === idBoton
        )
    ) {

        const index =
        productosEnCarrito.findIndex(
            producto =>
            producto.id === idBoton
        );

        productosEnCarrito[index].cantidad++;

    } else {

        productoAgregado.cantidad = 1;

        productosEnCarrito.push(productoAgregado);

    }

    actualizarNumerito();

    localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosEnCarrito)
    );

}

/* =========================
   NUMERITO
========================= */

function actualizarNumerito() {

    let nuevoNumerito =
    productosEnCarrito.reduce(
        (acc, producto) =>
        acc + producto.cantidad,
        0
    );

    numerito.innerText =
    nuevoNumerito;

}