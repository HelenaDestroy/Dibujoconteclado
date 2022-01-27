var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.getElementById("botoncito");
botoncito.addEventListener("click", aviso);

function aviso()
{
    alert("Color " + boton_color.value + " seleccionado!!");
}

var boton_color = document.getElementById("rainbow");



document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    }

function dibujarTeclado(evento)
{
    var color = boton_color.value;
    var movimiento = 10;
  switch(evento.keyCode)

{
    case teclas.UP:
    dibujarLinea(color, x, y, x, (y - movimiento), papel);
    y = y - movimiento;
        break;
    case teclas.DOWN:
    dibujarLinea(color, x, y, x, (y + movimiento), papel);
        y = y + movimiento;
        break;  
    case teclas.LEFT:
        dibujarLinea(color, x, y, (x - movimiento), y, papel);
        x = x - movimiento;
        break;    
    case teclas.RIGHT:
        dibujarLinea(color, x, y, (x + movimiento), y, papel);
        x = x + movimiento;
        break;  
    default:
        alert("Ups... por ahora no funciona sin las flechas del teclado... probá de nuevo!");
        break;
}
}

