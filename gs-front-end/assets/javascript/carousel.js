var imagens = [
    './assets/images/Cards/Cassio/card-middle-dm.png',
    './assets/images/Cards/Eduardo/card-middle-dm.png',
    './assets/images/Cards/Italo/card-middle-dm.png',
    './assets/images/Cards/Octavio/card-middle-md.png',
    './assets/images/Cards/Rafael/card-middle-dm.png',
    
];

var Index1 = 0;
var Index2 = 1;
var Index3 = 2;
var time = 5000;

var img1 = document.querySelector('#image1');
var img2 = document.querySelector('#image2');
var img3 = document.querySelector('#image3');

function slideShow() {
    img1.src = imagens[Index1];
    Index1++;
    console.log(Index1)
    
    img2.src = imagens[Index2];
    Index2++;
    
    console.log(Index2)
    img3.src = imagens[Index3];
    Index3++;
    
    console.log(Index3)
    if (Index1 == imagens.length) { 
        Index1 = 0; 
    }
    if (Index2 == imagens.length) { 
        Index2 = 0; 
    }
    if (Index3 == imagens.length) { 
        Index3 = 0; 
    }
    setTimeout("slideShow()", time);
    console.log(time)
    
}

slideShow();


