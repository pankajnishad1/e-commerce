const bannerslider = document.querySelector('.img-con');
const bannercount  = document.querySelector('.bannerconunt');
const bannerPrevious  = document.querySelector('.banner-previous');
const bannerNext  = document.querySelector('.banner-next');
const bannerArr =[
    {
        productImg:"assests/Black-Friday.jpg" , Name:"black friday"
    },   
    {
        productImg:"assests/shopcenter.jpg" , Name:"show center"
    },   
    {
        productImg:"assests/online-shoping.jpg" , Name:"shoes"
    },   
    {
        productImg:"assests/new-fashion.jpg" , Name:"new fashion"
    },   
    {
        productImg:"assests/special-sale.jpg" , Name:"special-sale"
    }
]

// banner start
let bannercounter = 1;
const showbannerposition =()=>{
     bannercount.innerHTML = `${bannercounter}/${bannerArr.length}`
}
showbannerposition()
const slidenext =()=>{
    if(bannercounter<bannerArr.length){
    bannerslider.style.transform = `translateX(-${bannercounter*1257}px)`; 
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
        bannerslider.style.transform = `translateX(-${bannerback*1257}px)`;
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
            clutter +=`<img src="${slide.productImg}" alt="${slide.Name}" class="banner-img" loading="lazy">`;
        })
        bannerslider.innerHTML = clutter;

        
}
