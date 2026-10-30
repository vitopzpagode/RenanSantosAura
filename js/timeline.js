
document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".timeline-item");

    if (!filters.length || !items.length) return;

    filters.forEach(button => {
        button.addEventListener("click", () => {
            const selected = button.dataset.filter;

            filters.forEach(filter => {
                filter.classList.remove("active");
                filter.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            items.forEach(item => {
                const category = item.dataset.category;
                const shouldShow = selected === "all" || category === selected;

                item.hidden = !shouldShow;

                if (shouldShow) {
                    item.classList.add("visible");
                }
            });
        });
    });

    filters.forEach(button => {
        button.setAttribute(
            "aria-pressed",
            String(button.classList.contains("active"))
        );
    });
});
