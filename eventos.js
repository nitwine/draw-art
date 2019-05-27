var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

document.addEventListener('keydown', dibujarTeclado); // detecta cuando presionamos(keydown) una tecla

var cuadro= document.getElementById("areaDibujo"); // llamamos el cuadro canvas
var papel= cuadro.getContext("2d"); // le damos contexto que vamos a dibujar en 2d
var x=150;
var y=150;

/*
Nos dice el evento y sus posibilidades en consola cuando damos keydown
================
function dibujarTeclado(e){
	//alert('hola');
	console.log('tecla oprimida');
	console.log(e);
}
*/

//dibujarLinea("blue",149,149,151,151,papel);

function dibujarLinea(color, xinicial,yinicial, xfinal, yfinal,lienzo){

	lienzo.beginPath(); // decimos que vamos a dibujar
	lienzo.strokeStyle = color; // selecciona el color
	lienzo.lineWidth = 3; // selecciona elancho de la linea
	lienzo.moveTo(xinicial,yinicial); //indicamos punto de inicio
	lienzo.lineTo(xfinal,yfinal); // indicamos punto final
	lienzo.stroke();	// se dibuja
	lienzo.closePath(); // indicamos que ya no vamos a dibujar
}



function dibujarTeclado(ev){
	var movimiento=10;
	var colori= "red";

	/* 
	   Recordar 
	   se parte desde el punto x,y = 150,150 definidos al inicio del programa.
	   luego en la funcion dibujarLinea se debe movificar las variables finales en la cuales 
	   queremos que se mueva
	   
	*/

	if (ev.keyCode == teclas.LEFT) {
		console.log('izquierda');
		dibujarLinea(colori,x,y,x-movimiento,y,papel);
		x=x-movimiento;
	}
	if (ev.keyCode == teclas.RIGHT) {
		console.log('derecha');
		dibujarLinea(colori,x,y,x+movimiento,y,papel);
		x=x+movimiento;
	}
	if (ev.keyCode == teclas.UP) {
		console.log('arriba');
		dibujarLinea(colori,x,y,x,y-movimiento,papel);
		y=y-movimiento;
	}
	if (ev.keyCode == teclas.DOWN) {
		console.log('abajo');
		dibujarLinea(colori,x,y,x,y+movimiento,papel);
		y=y+movimiento;
	}
}