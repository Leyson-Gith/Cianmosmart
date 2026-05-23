const form =
document.getElementById("paymentForm");

const success =
document.getElementById("successMessage");

const card =
document.getElementById("cardNumber");

card.addEventListener("input",()=>{

let value =
card.value.replace(/\D/g,'');

value =
value.replace(
/(.{4})/g,
'$1 '
);

card.value =
value.trim();

});

form.addEventListener(
"submit",
function(e){

e.preventDefault();

success.style.display="block";

localStorage.removeItem("carrito");

form.reset();

});