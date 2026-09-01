let producto;
let cantidad;
let precio;
let subtotal;
let descuento;
let delivery;
let total;

producto = Number(prompt(
    "Seleccione el producto:\n" +
    "1. 1/4 de pollo\n" +
    "2. 1/2 pollo\n" +
    "3. Pollo entero"
));

cantidad = Number(prompt("Ingrese la cantidad:"));

switch (producto) {
    case 1:
        precio = 20;
        break;
    case 2:
        precio = 35;
        break;
    case 3:
        precio = 60;
        break;
    default:
        alert("Producto no válido");
        precio = 0;
}

subtotal = precio * cantidad;

if (subtotal > 120) {
    descuento = subtotal * 0.10;
} else {
    descuento = 0;
}

if (subtotal > 80) {
    delivery = 0;
} else {
    delivery = 8;
}

total = subtotal - descuento + delivery;

document.write("Subtotal: S/ " + subtotal + "<br>");
document.write("Descuento: S/ " + descuento + "<br>");
document.write("Delivery: S/ " + delivery + "<br>");
document.write("<h2>Total a pagar: S/ " + total + "</h2>");