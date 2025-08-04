export const categoryBtn = document.querySelectorAll('.categories-card');
export const productsecH = document.querySelector('.product-sec-heading');
import { products } from '/javascript/products.js';
import { productCon,showProducts  } from '/javascript/showproducts.js';


export const showfilterproductfunction = (e) => {
            const fullclassCt = e.target.className;
            const  firstpartclassCt = fullclassCt.split(" ")[0];
            const paratext = e.target.children[1].innerText; 
            const filteredproduct =  products.filter(item =>{
                return item.category == firstpartclassCt;
            })
            // console.log(paratext)
            if(firstpartclassCt == 'all'){
                productsecH.innerText = paratext;
                showProducts();
            }else{
                productsecH.innerText = paratext;
                showfilterproduct(filteredproduct);
            }}

export const showfilterproduct =(e)=>{
let clutter = "";
    productCon.innerHTML = clutter;
    e.forEach((product)=>{
        clutter += `<div class=" ${product.category}" id="product-card">
                        <div class="product-img-con">
                        <img src="${product.image}" class="product-img" loading="lazy">
                        </div>
                        <div class="product-details">
                            <p class="product-name">${product.name}</p>
                            <h6 class="product-price">${product.price}</h6>
                            <div class="product-quantity">
                                <p>Select Quantity</p>
                                <div class="product-counter">
                                    <button class="product-plus">
                                    <i class="fa-solid fa-plus"></i>
                                    </button>
                                    <p id="quantity">1</p>
                                    <button class="product-minus">
                                    <i class="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="add-cart-sec" >
                                    <button class="add-cart" id="${product.id}">
                                    <p >Add To Cart</p>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    </button>
                            </div>
                        </div>
                    </div>`;
                })
                productCon.innerHTML = clutter;
} 