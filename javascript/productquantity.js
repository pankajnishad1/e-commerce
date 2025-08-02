import { cartArr, cartSummary ,carttolocal} from "./cartfunction.js"
import { cartCon } from './showcartproducts.js';
const currentQuantitytolocal =(e,currentQuantity)=>{
        let idofproduct = e.target.parentElement.parentElement.querySelector('.cart-remove-btn').id;
        let currobjectofproduct = cartArr.find(item => item.id === idofproduct);
        let indexofcurrentProduct = cartArr.indexOf(currobjectofproduct);
        if(indexofcurrentProduct !== -1){
            cartArr[indexofcurrentProduct].Quantity = currentQuantity;}
}
export const productCounter = (e)=>{
    const quantity = e.target.parentElement.querySelector('#quantity');
    if(e.target.classList.contains("product-plus")){
        let currentQuantity = parseInt(quantity.innerText);
        currentQuantity++;
        quantity.innerText = currentQuantity;
            if(cartCon){
            currentQuantitytolocal(e,currentQuantity);
            carttolocal();
            cartSummary()
        }
    }
    if(e.target.classList.contains("product-minus")){
        let currentQuantity = parseInt(quantity.innerText);
        if(currentQuantity > 1){
            currentQuantity--;
            quantity.innerText = currentQuantity;
                if(cartCon){
                currentQuantitytolocal(e,currentQuantity);
                carttolocal();
                cartSummary();
                }
            }
        }
}