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
    let isAnimating = false;
    const titleElement = document.querySelector(".text-overlay h2");
    const contentElement = document.querySelector(".text-overlay p");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    function updateContent(index, direction) {
        if (isAnimating) return;
        isAnimating = true;

        const outClass = direction === "right" ? "slide-out-left" : "slide-out-right";
        const inClass = direction === "right" ? "slide-in-right" : "slide-in-left";

        titleElement.classList.add(outClass);
        contentElement.classList.add(outClass);

        setTimeout(() => {
            titleElement.textContent = texts[index].title;
            contentElement.textContent = texts[index].content;

            titleElement.classList.remove(outClass);
            contentElement.classList.remove(outClass);
            
            titleElement.classList.add(inClass);
            contentElement.classList.add(inClass);

            updateArrows();

            setTimeout(() => {
                titleElement.classList.remove(inClass);
                contentElement.classList.remove(inClass);
                isAnimating = false;
            }, 500);
        }, 500);
    }

    function updateArrows() {
        leftArrow.classList.toggle("disabled", currentIndex === 0);
        rightArrow.classList.toggle("disabled", currentIndex === texts.length - 1);
    }

    // Inicialización
    titleElement.textContent = texts[currentIndex].title;
    contentElement.textContent = texts[currentIndex].content;
    updateArrows();

    leftArrow.addEventListener("click", function() {
        if (currentIndex > 0 && !isAnimating) {
            currentIndex--;
            updateContent(currentIndex, "left");
        }
    });

    rightArrow.addEventListener("click", function() {
        if (currentIndex < texts.length - 1 && !isAnimating) {
            currentIndex++;
            updateContent(currentIndex, "right");
        }
    });
});

