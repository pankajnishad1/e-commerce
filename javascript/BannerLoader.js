const bannerslider = document.querySelector('.img-con');
const bannercount  = document.querySelector('.bannerconunt');
const bannerPrevious  = document.querySelector('.banner-previous');
const bannerNext  = document.querySelector('.banner-next');
const bannerArr =[
    {
        productImg:"assests/banner (1).jpg" 
    },   
    {
        productImg:"assests/banner (2).jpg" 
    },   
    {
        productImg:"assests/banner (3).jpg" 
    },   
    {
        productImg:"assests/banner (4).jpg" 
    },   
    {
        productImg:"assests/banner (5).jpg" 
    }
    // {
    //     productImg:"assests/banner (6).jpg" 
    // },   
    // {
    //     productImg:"assests/banner (7).jpg" 
    // },   

]

// banner start
let bannercounter = 1;
const showbannerposition =()=>{
     bannercount.innerHTML = `${bannercounter}/${bannerArr.length}`
}
showbannerposition()
const slidenext =()=>{
    if(bannercounter<bannerArr.length){
    bannerslider.style.transform = `translateX(-${bannercounter*100}%)`; 
    bannercounter++;
    bannerPrevious.style.opacity = 1;
    showbannerposition()
}
else{
    bannerNext.style.opacity = .5;
    showbannerposition()
    }
}
const slideprevious =()=>{
    let bannerback = bannercounter-2;
    if(1<bannercounter){
        bannerslider.style.transform = `translateX(-${bannerback*100}%)`;
        bannercounter--;
        bannerNext.style.opacity = 1;
    showbannerposition()
    }
    else{
        bannerPrevious.style.opacity = .5;
    showbannerposition()
    }
}
const bannerloader = ()=>{
        let clutter  = "";
        bannerArr.forEach((slide)=>{
            clutter +=`<img src="${slide.productImg}" class="banner-img" loading="lazy">`;
        })
        bannerslider.innerHTML = clutter;

        
}
