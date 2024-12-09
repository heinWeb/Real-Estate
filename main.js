// Image 1 scroll check
const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");

window.addEventListener("scroll",image1);
function image1 (){
    if(window.scrollY > 150){
        img1.style.transform = "translateY(-300px)";
    }
    else if(window.scrollY > 100){
        img1.style.transform = "translateY(-250px)";
    }
    else if(window.scrollY > 50){
        img1.style.transform = "translateY(-200px)";
    }
    else{
        img1.style.transform = "translateY(-180px)";
    }
}

// Image 4,5,6 slide
const showImg =[
    'images/image_5.png',
    'images/image_6.png',
];

const orgSrc = img2.getAttribute("src");

window.addEventListener("scroll",image2);

function image2 (){
    if(this.scrollY > 6400){
        img2.src = showImg[0];
    }
    else if(this.scrollY > 5800){
        img2.src = showImg[1];
    }
    else{
        img2.src = orgSrc;
    }
}
