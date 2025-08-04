
import { cartCon } from "./javascript/showcartproducts.js"
import { removecart ,updateCartCount} from "./javascript/cartfunction.js";
import { showtocart } from '/javascript/showcartproducts.js';
import { productCounter } from "./javascript/productquantity.js";
import {cartSummary} from "./javascript/cartfunction.js"
import { searchbtn,inputbox,inputfunction,searchfunction } from './javascript/searchfunction.js';
import { productCon } from "./javascript/showproducts.js";
cartCon.addEventListener('click',(e)=>{
    removecart(e);
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

cartSummary();
showtocart();
updateCartCount();