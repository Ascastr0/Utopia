document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Validar campos
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    
    if (!nombre || !correo) {
        alert("Por favor, completa los campos obligatorios.");
        return;
    }

    alert("Formulario enviado exitosamente.");
    // Aquí podrías añadir el código para enviar el formulario o integrar un backend.
});
