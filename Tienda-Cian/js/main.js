const productos = [

{
id:1,
nombre:"iPhone 16 Pro",
precio:5200000,
imagen:"https://picsum.photos/300?1"
},

{
id:2,
nombre:"Laptop Gamer",
precio:4300000,
imagen:"https://picsum.photos/300?2"
},

{
id:3,
nombre:"Audífonos Bluetooth",
precio:350000,
imagen:"https://picsum.photos/300?3"
},

{
id:4,
nombre:"Smart Watch",
precio:420000,
imagen:"https://picsum.photos/300?4"
}

];

const contenedor =
document.getElementById("contenedor-obras");

if(contenedor){

productos.forEach(producto=>{

contenedor.innerHTML += `

<div class="card">

<img src="${producto.imagen}">

<h3>${producto.nombre}</h3>

<p>$${producto.precio.toLocaleString()}</p>

<button onclick="agregarCarrito(${producto.id})">
Agregar
</button>

</div>

`;

});

}

function agregarCarrito(id){

const producto =
productos.find(p=>p.id===id);

let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

carrito.push(producto);

localStorage.setItem(
"carrito",
JSON.stringify(carrito)
);

actualizarContador();

alert("Producto agregado.");
}

function actualizarContador(){

let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

const contador =
document.getElementById("contador-carrito");

if(contador){

contador.textContent =
carrito.length;

}

}

actualizarContador();