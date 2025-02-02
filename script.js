document.addEventListener("DOMContentLoaded", function () {
    // Handle dropdown for projects
    document.querySelectorAll(".drop-btn").forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            this.parentElement.classList.toggle("active");
        });
    });

    // Highlight active link when clicked
    const links = document.querySelectorAll(".sidebar a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
