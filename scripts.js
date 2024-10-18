document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        {
            title: "Misión",
            content: "Impulsar el reconocimiento de nuestros clientes a través de medios digitales con ayuda de herramientas publicitarias de uso estratégico apuntando al crecimiento en el contexto oferta/demanda del usuario y su desenvolvimiento en el mercado."
        },
        {
            title: "Visión",
            content: "Alcanzar reconocimiento como agencia digital, ofreciendo asesoría de calidad, colaborando con grandes empresas y expandiendo nuestro equipo creativo, todo mientras logramos sostenibilidad financiera y liderazgo en el mercado."
        },
        {
            title: "Objetivos",
            content: "Apoyar a empresas emergentes y corporaciones en la construcción de su imagen, manejo de redes sociales y branding, ofreciendo asesorías de calidad para innovar y mejorar la experiencia del usuario."
        }
    ];

    let currentIndex = 0;
    const titleElement = document.querySelector(".text-overlay h3");
    const contentElement = document.querySelector(".text-overlay p");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Función para actualizar el contenido según el índice
    function updateContent(index, direction) {
        // Aplicar animación de deslizamiento hacia fuera según la dirección
        if (direction === "right") {
            titleElement.classList.add("slide-out-left");
            contentElement.classList.add("slide-out-left");
        } else {
            titleElement.classList.add("slide-out-right");
            contentElement.classList.add("slide-out-right");
        }

        // Esperar a que termine la animación antes de cambiar el contenido
        setTimeout(() => {
            titleElement.textContent = texts[index].title;
            contentElement.innerHTML = texts[index].content;

            // Aplicar animación de deslizamiento hacia dentro según la dirección
            if (direction === "right") {
                titleElement.classList.remove("slide-out-left");
                contentElement.classList.remove("slide-out-left");
                titleElement.classList.add("slide-in-right");
                contentElement.classList.add("slide-in-right");
            } else {
                titleElement.classList.remove("slide-out-right");
                contentElement.classList.remove("slide-out-right");
                titleElement.classList.add("slide-in-left");
                contentElement.classList.add("slide-in-left");
            }

            // Eliminar clases de animación después de completar la animación
            setTimeout(() => {
                titleElement.classList.remove("slide-in-left", "slide-in-right");
                contentElement.classList.remove("slide-in-left", "slide-in-right");
            }, 500); // Tiempo igual a la duración de la animación

            updateArrows();
        }, 500); // Debe ser igual a la duración de la animación en CSS
    }

    function updateArrows() {
        if (currentIndex === 0) {
            leftArrow.classList.add("disabled");
        } else {
            leftArrow.classList.remove("disabled");
        }

        if (currentIndex === texts.length - 1) {
            rightArrow.classList.add("disabled");
        } else {
            rightArrow.classList.remove("disabled");
        }
    }

    // Cargar el primer texto al cargar la página sin animación
    titleElement.textContent = texts[currentIndex].title;
    contentElement.innerHTML = texts[currentIndex].content;
    updateArrows(); // Inicializa las flechas deshabilitadas si es necesario

    // Flechas para navegar por los textos
    leftArrow.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateContent(currentIndex, "left"); // Deslizar hacia la izquierda
        }
    });

    rightArrow.addEventListener("click", function() {
        if (currentIndex < texts.length - 1) {
            currentIndex++;
            updateContent(currentIndex, "right"); // Deslizar hacia la derecha
        }
    });
});