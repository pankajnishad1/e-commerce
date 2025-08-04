import { showtocart } from '/javascript/showcartproducts.js';
import { products } from './products.js';

const totalItems = document.querySelector('#total-items');
const totalPrice = document.querySelector('#total-price');
const totalTax = document.querySelector('#total-tax');
const totalAmount = document.querySelector('#total-Amount');
const cartelementnumber = document.querySelector('.cartelementnumber');
export const updateCartCount = () => {
        if(cartArr.length !== 0){
        cartelementnumber.style.display="inline-block";
        cartelementnumber.children[0].innerText  = cartArr.length;
        }
        else{
         cartelementnumber.style.display="none";
        }
}

export let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

export const carttolocal = ()=>{
    console.log(cartArr.length);
localStorage.setItem("cart", JSON.stringify(cartArr));
    updateCartCount();  
    showtocart();
    cartSummary();

}
 export const addtocart=(e)=>{
        if(e.target.classList.contains("add-cart")){
        let Id = e.target.id;
        let Quantity = e.target.parentElement.parentElement.querySelector('#quantity').innerText;
        let Price = products[Id].price
        if(cartArr.some(item => item.id === Id)){
            alert("Product already in cart");
        }else{
            cartArr.push({id: Id,Quantity:Quantity,price:Price})
            carttolocal();
           
        }
    }
}

export const removecart = (e) => {
    if(e.target.classList.contains("cart-remove-btn")){
        let itemToRemove = cartArr.find(item => item.id === e.target.id);
        let itemToRemoveIndex = cartArr.indexOf(itemToRemove);
        cartArr.splice(itemToRemoveIndex,1) 
        carttolocal();


}}


export const cartSummary =()=>{
    let Tprice = 0;
    let tax = 10;
    let Ttax = 0;
    let Tamount = 0;
    let Tquantity = 0;
    cartArr.forEach((element) => {
        Tquantity += parseInt(element.Quantity); 
        Tprice += parseInt(element.price) * parseInt(element.Quantity) ;
        Ttax += parseInt(element.Quantity) * tax;
    });
    Tamount += Ttax + Tprice;
    if(totalAmount){
    totalItems.innerText = Tquantity;
    totalPrice.innerText = Tprice;
    totalTax.innerText = Ttax;
    totalAmount.innerText = Tamount;
    }
}