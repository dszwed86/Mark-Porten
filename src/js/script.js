import "../sass/main.scss";

const navside = document.querySelector(".navside");
const mainPage = document.getElementById("s1");

const navObs = new IntersectionObserver((entry, observer)=>{
    if(entry[0].isIntersecting){
        navside.classList.remove("navsideOn");
    }else{
        navside.classList.add("navsideOn");
    }

});

navObs.observe(mainPage);