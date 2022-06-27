var hide = true ;
function showmore() {
    if (hide) {
        var hidden = document.querySelector('#hidden');
        hidden.style.display = "flex";
        hide = false;
        document.getElementById("more").innerHTML = "show less"
    }
    else {
        var hidden = document.querySelector('#hidden');
        hidden.style.display = "none";
        hide = true;
        document.getElementById("more").innerHTML = "show more"
    }
}
let menubtn = document.querySelector('.toggle-menu');
menubtn.addEventListener("click", ()=>{
    menubtn.classList.toggle("active");
})