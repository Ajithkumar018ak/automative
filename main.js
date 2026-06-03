function counter(id, target) {
    let count = 0;

    let interval = setInterval(() => {
        count += Math.ceil(target / 100);

        if (count >= target) {
            count = target;
            clearInterval(interval);
        }

        const el = document.getElementById(id);
        if (el) el.innerText = count + "+";

    }, 20);
}

document.addEventListener("DOMContentLoaded", () => {

    // ================= COUNTER =================
    counter("cars", 500);
    counter("customers", 12000);
    counter("awards", 85);

    // ================= LOADER =================
    window.addEventListener("load", () => {

        setTimeout(() => {

            const loader = document.getElementById("loader");
            const main = document.getElementById("main-content");

            if (loader) loader.style.display = "none";
            if (main) main.style.display = "block";

        }, 3000);
    });

    // ================= HAMBURGER =================
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const links = document.querySelectorAll("nav a");

    if (!menuToggle || !nav) {
        console.log("❌ MENU ELEMENT NOT FOUND");
        return;
    }

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });

});