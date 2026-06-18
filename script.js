// Menu hamburger HP
let menuBtn = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

menuBtn.onclick = () => {
    nav.classList.toggle("active");
};

// Header berubah saat scroll
window.addEventListener("scroll", () => {

    let header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 0 20px rgba(0,0,0,.5)";
    }
    else{
        header.style.boxShadow = "none";
    }

});

// Animasi muncul saat halaman dibuka
const cards = document.querySelectorAll(".box,.card");

cards.forEach((item,index)=>{

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";

    setTimeout(()=>{

        item.style.transition = ".8s";
        item.style.opacity = "1";
        item.style.transform = "translateY(0px)";

    },index*200);

});
