/** Update Total Function */
let cart=[]


/** Plus-Minus Function */
const plusItems=document.querySelector(".plus1")
const minusItems=document.querySelector(".minus1")
const quantityItems=document.querySelector(".quantity1")
let a =1;
plusItems.addEventListener("click",function(){
    a++;
    a=(a<10 )?"0" + a : a;
    quantityItems.innerText=a;
})
minusItems.addEventListener("click",function(){
    if(a>1){
        a--;
        a=(a<10 )?"0" + a : a;
        quantityItems.innerText=a;

    }
})
const plusItems2=document.querySelector(".plus2")
const minusItems2=document.querySelector(".minus2")
const quantityItems2=document.querySelector(".quantity2")
let b =1;
plusItems2.addEventListener("click",function(){
    b++;
    b=(b<10 )?"0" + b : b;
    quantityItems2.innerText=b;
})
minusItems2.addEventListener("click",function(){
    if(b>1){
        b--;
        b=(b<10 )?"0" + b : b;
        quantityItems2.innerText=b;

    }
})
const plusItems3=document.querySelector(".plus3")
const minusItems3=document.querySelector(".minus3")
const quantityItems3=document.querySelector(".quantity3")
let c =1;
plusItems3.addEventListener("click",function(){
    c++;
    c=(c<10 )?"0" + c : c;
    quantityItems3.innerText=c;
})
minusItems3.addEventListener("click",function(){
    if(c>1){
        c--;
        c=(c<10 )?"0" + c : c;
        quantityItems3.innerText=c;

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
    });
}
/** Delete Function */
var removeCartItemButtons=document.getElementsByClassName('delete')
for(var i=0;i<removeCartItemButtons.length;i++){
    var button = removeCartItemButtons[i]
    button.addEventListener("click", function(event){
       var buttonClicked = event.target
       buttonClicked.parentElement.remove()
})
}




















