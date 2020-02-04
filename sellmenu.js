var salemenu = document.getElementById("salemenu");
window.addEventListener("resize", function () {
    resize();
});
function resize() {
    if (window.innerWidth < 576) {
        salemenu.remove();
        document.getElementById("saleitem").style.width = "100%";
    }
    if (window.innerWidth > 575) {
        var replace = document.getElementById("saleparent");
        replace.prepend(salemenu);
        document.getElementById("saleitem").style.width = "calc(100% - 111px)";
    }
}
