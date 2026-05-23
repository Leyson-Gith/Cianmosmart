function cargarCarrito(){

let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

const lista =
document.getElementById("lista-carrito");

const total =
document.getElementById("total");

if(!lista) return;

lista.innerHTML="";

let suma=0;

carrito.forEach((producto,index)=>{

suma += producto.precio;

lista.innerHTML += `

<div class="item-carrito">

<img src="${producto.imagen}">

<div>

<h3>${producto.nombre}</h3>

<p>
$${producto.precio.toLocaleString()}
</p>

</div>

<button onclick="eliminarProducto(${index})">
Eliminar
</button>

</div>

`;

});

total.textContent =
"Total: $" + suma.toLocaleString();

}

function eliminarProducto(index){

let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

carrito.splice(index,1);

localStorage.setItem(
"carrito",
JSON.stringify(carrito)
);

cargarCarrito();

}

const vaciar =
document.getElementById("vaciar-carrito");

if(vaciar){

vaciar.addEventListener("click",()=>{

localStorage.removeItem("carrito");

cargarCarrito();

});

}

cargarCarrito();