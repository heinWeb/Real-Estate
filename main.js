// Image 1 scroll check
const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");

window.addEventListener("scroll",image1);
function image1 (){
    if(window.scrollY >= 300){
        img1.style.transform = "translateY(-300px)";
    }
    else if(window.scrollY >= 200){
        img1.style.transform = "translateY(-250px)";
    }
    else if(window.scrollY >= 100){
        img1.style.transform = "translateY(-150px)";
    }
    else{
        img1.style.transform = "translateY(-80px)";
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


// Faq Toggle
const faq = document.querySelectorAll(".faq");

for(let faqItem of faq){
    faqItem.addEventListener("click", () => {
        faqItem.classList.toggle("show");
    })
}

// Scroll Top Button
const scrollTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    let scroll = this.scrollY;
    console.log(scroll)
    if(scroll > 9500){
        scrollTop.style.backgroundColor = "white";
        scrollTop.style.color = "black";
    }
    else if(scroll > 300){
        scrollTop.style.display = "grid";
    }
    else{
        scrollTop.style.display = "none";
    };

    if(scroll < 9490){
        scrollTop.style.backgroundColor = "black";
        scrollTop.style.color = "white";
    }
})

scrollTop.addEventListener("click", () =>{
    window.scrollTo({top: 0, behavior: "smooth"})
})

