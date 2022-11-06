/** Update Total Function */
function updateTotal(){
    var itemContainer =document.getElementsByClassName("shop")[0]
    var items =itemContainer.getElementsByClassName("item")
    var cartTotal= 0 
    for(var i=0;i<items.length;i++){
        var item=items[i]
        var quantity = item.getElementsByClassName("quantity")[0]
        var price = item.getElementsByClassName("price")[0]
        var qt=parseFloat(quantity.innerText)
        var pr=parseFloat(price.innerText)
        console.log(pr)
        cartTotal=cartTotal+(qt*pr);
        console.log(cartTotal);
    }
    var tot=document.getElementById("total")
    tot.innerText=cartTotal.toFixed(3);
    console.log(cartTotal);
}
updateTotal();
/** Plus-Minus Function */
const plusItems=document.getElementById("plus1")
const minusItems=document.getElementById("minus1")
const quantityItems=document.getElementById("quantity1")
let a =1;
plusItems.addEventListener("click",function(){
    a++;
    a=(a<10 )?"0" + a : a;
    quantityItems.innerText=a;
    updateTotal();
})
minusItems.addEventListener("click",function(){
    if(a>1){
        a--;
        a=(a<10 )?"0" + a : a;
        quantityItems.innerText=a;
        updateTotal();

    }
})
const plusItems2=document.querySelector("#plus2")
const minusItems2=document.querySelector("#minus2")
const quantityItems2=document.querySelector("#quantity2")
let b =1;
plusItems2.addEventListener("click",function(){
    b++;
    b=(b<10 )?"0" + b : b;
    quantityItems2.innerText=b;
    updateTotal();
})
minusItems2.addEventListener("click",function(){
    if(b>1){
        b--;
        b=(b<10 )?"0" + b : b;
        quantityItems2.innerText=b;
        updateTotal();

    }
})
const plusItems3=document.querySelector("#plus3")
const minusItems3=document.querySelector("#minus3")
const quantityItems3=document.querySelector("#quantity3")
let c =1;
plusItems3.addEventListener("click",function(){
    c++;
    c=(c<10 )?"0" + c : c;
    quantityItems3.innerText=c;
    updateTotal();
})
minusItems3.addEventListener("click",function(){
    if(c>1){
        c--;
        c=(c<10 )?"0" + c : c;
        quantityItems3.innerText=c;
        updateTotal();

    }
})
/** Heart Function */
let hearts = Array.from(document.querySelectorAll("#heart"));
for(let i in hearts){
    hearts[i].addEventListener("click",function(){
        if(hearts[i].getAttribute('class') == "bi bi-heart")
        hearts[i].setAttribute('class','bi bi-heart-fill');
        else
        hearts[i].setAttribute('class','bi bi-heart');
        updateTotal();
    });
}
/** Delete Function */
var removeCartItemButtons=document.getElementsByClassName('delete')
for(var i=0;i<removeCartItemButtons.length;i++){
    var button = removeCartItemButtons[i]
    button.addEventListener("click", function(event){
       var buttonClicked = event.target
       buttonClicked.parentElement.remove()
       updateTotal();
})
}