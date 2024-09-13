let items = document.querySelectorAll(".slider img");
let nbSlide = items.length;
let suivant = document.querySelector(".right");
let precedent = document.querySelector(".left");

let count = 0;
function slideSuivante() {
    items[count].classList.remove("active");

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add("active");
    console.log(count);
}

suivant.addEventListener("click", slideSuivante);

function slidePrecedente() {
    items[count].classList.remove("active");

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }
    items[count].classList.add("active");
    console.log(count);
}

precedent.addEventListener("click", slidePrecedente);
