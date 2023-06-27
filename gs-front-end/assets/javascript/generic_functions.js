const darkMode = document.getElementById("darkmode");
const logoImage = document.getElementById('logoImage');



darkMode.addEventListener('click', () => {
    funcao_MudaCor();
    teste();
});

function teste() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        logoImage.src = './assets/images/wave1-darkmode.png';
    }
    else {
        logoImage.src = './assets/images/wave1.png';
    }
};
function funcao_MudaCor() {
    var body = document.querySelector(".container");
    body.classList.toggle("darkmode-container");
    var menu = document.querySelector(".menu");
    menu.classList.toggle("darkmode-menu");

    var shadow = document.querySelectorAll(".video");
    shadow.forEach(function (element) {
        element.classList.toggle('darkmode-shadow');
    });
    var txt = document.querySelectorAll(".text");
    txt.forEach(function (element) {
        element.classList.toggle('darkmode-text');
    });
    var subTitle = document.querySelectorAll('.sub-title')
    subTitle.forEach(function (element) {
        element.classList.toggle('darkmode-text');
    });
    var title = document.querySelectorAll('.title')
    title.forEach(function (element) {
        element.classList.toggle('darkmode-text');
    });

};

const date = document.getElementById("date")
const hour = document.getElementById("hour")

window.addEventListener('load',()=>{
    var data = new Date();
    var day = data.getDay();
    var month = data.getMonth();
    var year = data.getFullYear();

    if (day < 10){
        day = '0' + day;
    }
    if (month < 10){
        month = '0' + month;
    }
    var textData = day + "/" + month + "/" + year
     
    date.innerHTML = textData;
    
    var hora = data.getHours();
    var minutes = data.getMinutes();
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (hora < 10){
        hora = '0' + hora;
    }
   
    var textHour = hora + ":" + minutes;
    hour.innerHTML = textHour;
})


