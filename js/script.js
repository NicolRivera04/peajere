// Variables de contador
let contadorAutomovil = 0;
let contadorBus = 0;
let contadorCamion = 0;
let totalRecaudado = 0;

const abrirPeajeBtn = document.getElementById("abrirPeaje");
const cerrarPeajeBtn = document.getElementById("cerrarPeaje");
const automovilBtn = document.getElementById("automovil");
const busBtn = document.getElementById("bus");
const camionBtn = document.getElementById("camion");
const horaActual = document.getElementById("hora");

// hora 
function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    horaActual.textContent = `Hora actual: ${hora}`;
}

// Actualizar la hora por cada segundo
setInterval(actualizarHora, 1000);

// para abrir el peaje
abrirPeajeBtn.addEventListener("click", function() {
    contadorAutomovil = 0;
    contadorBus = 0;
    contadorCamion = 0;
    totalRecaudado = 0;

    actualizarDatos();

    automovilBtn.disabled = false;
    busBtn.disabled = false;
    camionBtn.disabled = false;
    cerrarPeajeBtn.disabled = false;
    abrirPeajeBtn.disabled = true;
});

// registro de carros
automovilBtn.addEventListener("click", function() {
    contadorAutomovil++;
    totalRecaudado += 5000;
    actualizarDatos();
});

busBtn.addEventListener("click", function() {
    contadorBus++;
    totalRecaudado += 10000;
    actualizarDatos();
});

camionBtn.addEventListener("click", function() {
    contadorCamion++;
    totalRecaudado += 15000;
    actualizarDatos();
});

// Cerrar peaje
cerrarPeajeBtn.addEventListener("click", function() {
    automovilBtn.disabled = true;
    busBtn.disabled = true;
    camionBtn.disabled = true;
    abrirPeajeBtn.disabled = false;
    cerrarPeajeBtn.disabled = true;
});

function actualizarDatos() {
    document.getElementById("contadorAutomovil").value = contadorAutomovil;
    document.getElementById("contadorBus").value = contadorBus;
    document.getElementById("contadorCamion").value = contadorCamion;
    document.getElementById("totalRecaudado").value = totalRecaudado;
}