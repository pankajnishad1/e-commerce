
import { cartCon } from "./javascript/showcartproducts.js"
import { removecart } from "./javascript/cartfunction.js";
import { showtocart } from '/javascript/showcartproducts.js';
import { productCounter } from "./javascript/productquantity.js";
import {cartSummary} from "./javascript/cartfunction.js"
cartCon.addEventListener('click',(e)=>{
    removecart(e);
    productCounter(e)
})
cartSummary();
showtocart();
