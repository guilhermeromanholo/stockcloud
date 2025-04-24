window.addEventListener("hashchange", function() {
    const page = location.hash.replace("#", "");
    showPage(document.getElementById(page));
});

window.addEventListener("DOMContentLoaded", function() {
    const page = location.hash.replace("#", "") || "inicio";
    showPage(document.getElementById(page));
});

function showPage(page) {
    const allPages = document.querySelectorAll(".page");
    allPages.forEach(p => p.style.display = "none");
    page.style.display = "block";
}
