let menu = document.querySelector("#menubar");
let nav = document.querySelector(".navbar")

menu.onclick = function(){
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
    
}

function loader(){

    document.querySelector('.loader-container').classList.add('fade-out');

};

function fadeout(){

    setInterval(loader,2000);
};

window.onload = fadeout();