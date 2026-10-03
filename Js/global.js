
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openBtn");

if (openBtn && modal) {
    openBtn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    };
}

const modal_cont = document.getElementById("modal");
const but = document.getElementById("button");
const overlay = document.getElementById("overlay");
const cancel = document.getElementById("cancel");

if (cancel) {
    cancel.onclick = function(event) {
        event.preventDefault();
        modal_cont.classList.remove("open");
        overlay.classList.remove("show");
    }
}

if (but && modal_cont) {
    but.onclick = function(event) {
        event.preventDefault();
        modal_cont.classList.add("open");
        overlay.classList.add("show");
    };
}


const overlay_2 = document.getElementById("overlay")
const conf_modal = document.getElementById("conf-modal")
const yesBut = document.getElementById("yes-but")

if (conf_modal && yesBut) {
    yesBut.onclick = function(event) {
        event.preventDefault();
        conf_modal.classList.add("open")
        overlay.style.opacity = 1
        overlay.style.visibility = "visible"
    }
}
