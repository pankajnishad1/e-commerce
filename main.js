import { productCon } from '/javascript/showproducts.js';
import { showProducts } from '/javascript/showproducts.js';
import { addtocart,updateCartCount } from '/javascript/cartfunction.js';
import { showfilterproductfunction,categoryBtn,productsecH } from '/javascript/category.js';
import { searchbtn,inputbox,inputfunction,searchfunction } from './javascript/searchfunction.js';

import { productCounter } from '/javascript/productquantity.js';
// import { bannerloader, slidenext, slideprevious } from '/javascript/banner.js';
// banner start
bannerNext.addEventListener('click',()=>{
    slidenext();
})
bannerPrevious.addEventListener('click',()=>{
    slideprevious();
})
//banner end

// product categories section
categoryBtn.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        showfilterproductfunction(e);
        productsecH.scrollIntoView({behavior: "smooth"});   
    })
});
productCon.addEventListener('click',(e)=>{
    addtocart(e);
    productCounter(e)
})

inputbox.addEventListener('input',(e)=>{
    if(productCon){
    inputfunction(e);
    }
    else{
        alert("back to home");
    }
})
searchbtn.addEventListener('click',(e)=>{
    if(productCon){
        searchfunction();
    }
    else{
        alert("back to home");
    }
})

bannerloader();
showProducts();
updateCartCount();
