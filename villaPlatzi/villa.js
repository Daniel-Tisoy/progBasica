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

configurarYDibujarObjeto(fondo);
configurarYDibujarObjeto(vaca);
configurarYDibujarObjeto(pollo);
configurarYDibujarObjeto(cerdo);

// range of random elements in the screen
var cantidad = aleatorio(1, 10);

//functions

// this function is just for configuaryDibjarObjeto
let cargarYDibujarObjeto = (objetoImagen) => {
    objetoImagen.cargaOK = true;
    dibujar();
}

function configurarYDibujarObjeto(objetoImagen) {
    //nest the new object in the parameter
    objetoImagen.imagen = new Image();
    objetoImagen.imagen.src = objetoImagen.url;
    objetoImagen.imagen.addEventListener("load", () => {
        cargarYDibujarObjeto(objetoImagen);
    })
}

// this function is just for use with dibujar funct
let dibujarAnimales = (animal) => {
    for (let v = 0; v < cantidad; v++) {
        let x = aleatorio(0, 7);
        let y = aleatorio(0, 10);
        x *= 60;
        y *= 40;
        papel.drawImage(animal.imagen, x, y);
    }
}

function dibujar() {

    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        dibujarAnimales(vaca);
    }
    if (pollo.cargaOK) {
        dibujarAnimales(pollo);
    }
    if (cerdo.cargaOK) {
        dibujarAnimales(cerdo);
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
