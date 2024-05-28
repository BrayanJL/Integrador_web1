var arrImagenes = ["images/Fiat.jpg", "images/Nissan.jpg", "images/Peugeot.jpg", 
"images/Renault.jpg" , "images/Volkswagen.jpg"];

var arrAlts = ["Imagen de auto marca Fiat", "Imagen de auto marca Nissan", "Imagen de auto marca Peugeot"
, "Imagen de auto marca Renault", "Imagen de auto marca Volkswagen"];

var indice = 0;

function anterior() {
    if (indice == 0) indice = 4;
    else --indice;
    cambiar();
}

function siguiente() {
    if (indice == 4) indice = 0;
    else ++indice;
    cambiar();
}

function cambiar() {
    imagen = document.images["imagen_Carrusel"];
    imagen.src = arrImagenes[indice];
    imagen.alt = arrAlts[indice]
}