var hid = false;
function showmore() {
    if (hid == false) {
        var hidden_ = document.querySelector('#hidden');
        hidden_.classList.toggle("hidden");
        document.getElementById("hidden").style.display = "flex";
        hid = true;
        document.getElementById("more").innerHTML = "show less"
    }
    else {
        var hidden_ = document.querySelector('#hidden');
        hidden_.classList.toggle("hidden");
        document.getElementById("hidden").style.display = "none";
        hid = false;
        document.getElementById("more").innerHTML = "show more"
    }
}
