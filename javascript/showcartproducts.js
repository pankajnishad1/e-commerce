import {products} from '/javascript/products.js';
// cart section
import { cartArr } from './cartfunction.js';
export const cartCon = document.querySelector('.cart-container');

export const showtocart = () =>{
    let clutter = "";
    cartArr.forEach((cartitems)=>{
        clutter += ` <div class="cart-card">
                            <div class="cart-img-con">
                                <img src="${products[cartitems.id].image}" alt="">
                            </div  >
                                <div class="details-cart-con">
                                    <p class="product-name">${products[cartitems.id].name}</p>
                                    <h6 class="product-price">${products[cartitems.id].price}</h6>
                                <div class="product-counter">
                                    <button class="product-plus">
                                            <i class="fa-solid fa-plus"></i>
                                    </button>
                                        <p id="quantity">${cartitems.Quantity}</p>
                                    <button class="product-minus">
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                                <button class="cart-remove-btn" id="${products[cartitems.id].id}"><span>Remove</span</button>
                    </div>`;
                });
                if(cartCon){
                cartCon.innerHTML = clutter;
                }
            }
            