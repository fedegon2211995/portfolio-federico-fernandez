// ------------------------------
// 1. MODO OSCURO
// ------------------------------
const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modoBtn.textContent = "Modo claro";
    } else {
        modoBtn.textContent = "Modo oscuro";
    }
});


// ------------------------------
// 2. CAMBIAR NOMBRE
// ------------------------------
const cambiarNombreBtn = document.getElementById("cambiarNombre");
const nombrePrincipal = document.getElementById("nombrePrincipal");

cambiarNombreBtn.addEventListener("click", () => {
    const nuevoNombre = prompt("Ingresá tu nombre:");

    if (nuevoNombre) {
        nombrePrincipal.textContent = nuevoNombre;
    }
});


// ------------------------------
// 3. MOSTRAR / OCULTAR PROYECTOS
// ------------------------------
const botonesVer = document.querySelectorAll(".btn-ver");

botonesVer.forEach(boton => {
    boton.addEventListener("click", () => {
        const proyecto = boton.getAttribute("data-proyecto");
        const detalle = document.getElementById(`detalle-${proyecto}`);

        detalle.classList.toggle("oculto");
    });
});


// ------------------------------
// 4. VALIDACIÓN FORMULARIO
// ------------------------------
const form = document.getElementById("formContacto");
const respuesta = document.getElementById("respuestaFormulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        respuesta.textContent = "Por favor, completá todos los campos.";
        respuesta.style.color = "red";
        return;
    }

    respuesta.textContent = `Gracias ${nombre}, tu mensaje fue enviado correctamente.`;
    respuesta.style.color = "green";

    form.reset();
});