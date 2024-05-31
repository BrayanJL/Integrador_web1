var formulario = document.getElementById("formulario" );
var nuevoFormulario = document.createElement("form");
var parrafo = document.createElement("p");
var span = document.createElement("span");

var errores = new Map();

errores.set("textoVacio", "Campo obligatorio");
errores.set("selectVacio", "Seleccione un horario");
errores.set("campo1Excedido", "12 caracteres como máximo");
errores.set("campo2Excedido", "15 caracteres como máximo");
errores.set("campo3Excedido", "10 dígitos como máximo");
errores.set("ceroAlPrincipio", "No puede empezar con 0");
errores.set("soloDigitos", "Ingrese solamente números");
errores.set("faltanDigitos", "Faltan dígitos");

function validar() {
    let valido = true;
    
    if (validacionCampo1() == false) {
        valido = false;
    }

    if (validacionCampo2() == false) {
        valido = false;
    }

    if (validacionCampo3() == false) {
        valido = false;
    }

    if (validacionCampo4() == false) {
        valido = false;
    }

    if (valido) {
        formulario.style.display = "none";

        nuevoFormulario.removeChild(nuevoFormulario.lastElementChild)
        formulario.insertAdjacentElement("afterend",nuevoFormulario)
        formulario.classList.add("formulario")

        parrafo.innerHTML = "Datos enviados";
        parrafo.id = 'Validacion';
        formulario.insertAdjacentElement("afterend",parrafo)
    }
    
    return false;
}

function actualizarFormulario() {
    while (nuevoFormulario.hasChildNodes()) {
        nuevoFormulario.removeChild(nuevoFormulario.firstChild);
    }
    for (const iterator of formulario.childNodes) {
        nuevoFormulario.appendChild(iterator.cloneNode(true));
    }
    for (const iterator of nuevoFormulario.childNodes) {
        iterator.disabled = true;
    }

    actualizarSelect()
}

function actualizarSelect() {
    let seleccion = document.getElementById("idHorarios");
    let seleccionNF = nuevoFormulario.getElementsByTagName("select");

    seleccionNF.innerHTML = seleccionNF[0].value = seleccion.value;
}

function validacionCampo1() {
    let tx = document.getElementById("idApellido");
    let valor = String(tx.value).trim();

    if (valor == "") {
        tx.value = "";
        tx.placeholder = errores.get("textoVacio");
        return false;
    }

    if (valor.length > 12) {
        tx.value = ""
        tx.placeholder = errores.get("campo1Excedido");
        return false;
    }
}

function validacionCampo2() {
    let tx = document.getElementById("idNombre");
    let valor = String(tx.value).trim();

    if (valor == "") {
        tx.value = "";
        tx.placeholder = errores.get("textoVacio");
        return false;
    }

    if (valor.length > 15) {
        tx.value = ""
        tx.placeholder = errores.get("campo2Excedido");
        return false;
    }
}

function validacionCampo3() {
    let tel = document.getElementById("idTelefono");
    let valor = String(tel.value).trim();

    let regEx = /^[1-9]\d{9}$/;

    if (valor == "") {
        tel.value = ""
        tel.placeholder = errores.get("textoVacio");
        return false;
    }

    if (valor.length > 10) {
        tel.value = "";
        tel.placeholder = errores.get("campo3Excedido");
        return false;
    }

    if (regEx.test(valor) == false) {
        let soloDigitos = /\D/;
        let ceroALaIzquierda = /^[^1-9]/;

        if (soloDigitos.test(valor)) {
            tel.value = "";
            tel.placeholder = errores.get("soloDigitos");
            return false;
        }

        if (ceroALaIzquierda.test(valor)) {
            tel.value = "";
            tel.placeholder = errores.get("ceroAlPrincipio");
            return false;
        }

        if (valor.length < 10) {
            tel.value = "";
            tel.placeholder = errores.get("faltanDigitos");
            return false;
        }
    }
}

function validacionCampo4() {
    let seleccion = document.getElementById("idHorarios");

    if (seleccion.value == "sinHorario") {
        span.innerHTML = errores.get("selectVacio");
        span.id = 'error';
        seleccion.insertAdjacentElement("afterend", span);
        return false;
    }
    
}

function sacarSpan() {
    span.remove()
}