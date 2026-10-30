
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
        toggle.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.textContent = "☰";
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.textContent = "☰";
        }
    });

    const currentPage = location.pathname.split("/").pop() || "index.html";

    nav.querySelectorAll("a").forEach(link => {
        const target = link.getAttribute("href");
        if (target === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
});
