// getting canvas
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

// setting images with defaul configuration
var fondo = { url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/tile.png", cargaOK: false }
var vaca = { url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/vaca.png", cargaOK: false };

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

// range of random elements in the screen
var cantidad = aleatorio(1, 10);

//functions
function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 10);
            var x = x * 60;
            var y = y * 40;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
