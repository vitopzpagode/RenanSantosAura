
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    if (!gallery) return;

    // A galeria começa em modo documental, sem fotografias fictícias.
    // Quando imagens autorizadas forem inseridas, use:
    //
    // <button class="gallery-image" data-full="assets/images/foto.jpg">
    //   <img src="assets/images/foto.jpg" alt="Descrição da fotografia">
    // </button>
    //
    // O script cria uma visualização ampliada para esses elementos.

    const buttons = gallery.querySelectorAll("[data-full]");

    if (!buttons.length) return;

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Visualização da imagem");
    lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar imagem">✕</button>
    <img class="lightbox-image" alt="">
  `;

    document.body.appendChild(lightbox);

    const image = lightbox.querySelector(".lightbox-image");
    const close = lightbox.querySelector(".lightbox-close");

    function openImage(button) {
        const source = button.dataset.full;
        const thumbnail = button.querySelector("img");

        if (!source) return;

        image.src = source;
        image.alt = thumbnail ? thumbnail.alt : "Imagem ampliada";
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
        close.focus();
    }

    function closeImage() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
        image.src = "";
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => openImage(button));
    });

    close.addEventListener("click", closeImage);

    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) closeImage();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closeImage();
        }
    });
});
