// getting canvas
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

// setting images with defaul configuration
var fondo = { url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/tile.png", cargaOK: false }
var vaca = { url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/vaca.png", cargaOK: false };
var pollo = { url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/pollo.png", cargaOK: false };
var cerdo = { url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/cerdo.png", cargaOK: false };

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

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

function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}


function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        for (var v = 0; v < cantidad; v++) {
            let coordeanas = generarCoordenadas()
            papel.drawImage(vaca.imagen, coordeanas.x, coordeanas.y);
        }
    }
    if (pollo.cargaOK) {
        for (var v = 0; v < cantidad; v++) {
            let coordeanas = generarCoordenadas()
            papel.drawImage(pollo.imagen, coordeanas.x, coordeanas.y);
        }
    }
    if (cerdo.cargaOK) {
        for (var v = 0; v < cantidad; v++) {
            let coordeanas = generarCoordenadas()
            papel.drawImage(cerdo.imagen, coordeanas.x, coordeanas.y);
        }
    }
}

function generarCoordenadas() {
    let x = aleatorio(0, 7);
    let y = aleatorio(0, 10);
    x *= 60;
    y *= 40;
    let coordeanas = {
        x: x,
        y: y
    }
    return coordeanas;
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
