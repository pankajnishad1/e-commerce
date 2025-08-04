export const inputbox = document.querySelector('.input-box');
export const searchbtn = document.querySelector('.search-btn');
import { productsecH } from "./category.js";
import { products } from "./products.js";
import { productCon,showProducts } from './showproducts.js';



const showsearchproducts = (filtersearchproduct)=> {
       productCon.innerHTML = "";
    let clutter = "";
        filtersearchproduct.forEach((product)=>{
    
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
let filtersearchproduct=[];
export const inputfunction = (e) => {
    let searchText = e.target.value.toLowerCase().trim();
    if(inputbox.value){
        filtersearchproduct = products.filter((e)=>{
            return e.name.toLowerCase().includes(searchText) || e.category.toLowerCase().includes(searchText);
        })
        showsearchproducts(filtersearchproduct);
        searchheaderfunction();
    }
    else{
        showProducts();
        searchheaderfunction(); 
    }
    
}
 const searchheaderfunction = () => {
  
    let searchText = inputbox.value.toLowerCase().trim();
    if(inputbox.value !== ""){
        if(filtersearchproduct.length == 0){
            productsecH.innerHTML= `Search results not found "${searchText}"`;
        }
        else{
              productsecH.innerHTML= `Search results for "${searchText}"`;
        }
  
    }
    else{
        productsecH.innerHTML = "All Featured Products";
    }
}

export const searchfunction=()=>{

    if(inputbox.value !== ""){
        productsecH.scrollIntoView({behavior: "smooth"});
    }
    else{
        alert("Please enter in input");
    }
}