function counter(id, target) {
let count = 0;

let interval = setInterval(() => {

count += Math.ceil(target / 100);

if (count >= target) {
count = target;
clearInterval(interval);
}

document.getElementById(id).innerText = count + "+";

}, 20);
}

counter("cars", 500);
counter("customers", 12000);
counter("awards", 85);

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

        document.getElementById("main-content").style.display = "block";

    }, 3000);

});