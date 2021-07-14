function showLarge(e) {
    document.getElementById("large_img").src = e.target.src
}

function init() {
    let imgs = document.querySelectorAll(".small_img");
    let i, j
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = showLarge;
    }
}
window.addEventListener("load", init, false);