// BLOG FILTER FUNCTION
document.addEventListener("DOMContentLoaded", function () {

    const filters = document.querySelectorAll(".filter-item");
    const cards = document.querySelectorAll(".blog-card");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {

            // ganti active class
            filters.forEach(f => f.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-filter");

            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (category === "Semua" || cardCategory === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

        });
    });

});