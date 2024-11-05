document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
        // Remover expansión de todas las tarjetas excepto la seleccionada
        document.querySelectorAll('.tarjeta').forEach(t => {
            if (t !== this) t.classList.remove('expandida');
        });

        // Alternar expansión en la tarjeta seleccionada
        this.classList.toggle('expandida');
    });
});
