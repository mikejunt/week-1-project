var salemenu = document.getElementById("salemenu");
var relevant = 576;
window.addEventListener("resize", function () {
    resize();
});
function resize() {
    console.log("" + window.innerWidth);
    if (window.innerWidth < 576) {
        console.log(window.innerWidth);
        salemenu.remove();
        document.getElementById("saleitem").style.width = "100%";
        console.log("try to remove fired");
    }
    console.log(window.innerWidth > relevant);
    if (window.innerWidth > 575) {
        var replace = document.getElementById("saleparent");
        console.log("Hello");
        replace.prepend(salemenu);
        console.log("tried to prepend the menu");
        document.getElementById("saleitem").style.width = "calc(100% - 111px)";
        console.log("tried to change saleitem style");
    }
}
