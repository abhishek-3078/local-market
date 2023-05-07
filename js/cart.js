// {"price":"₹ 450/dozen","qty":2}
const itemBox=document.querySelector('.items')
const itemTemplate=document.querySelector('#cartItemTemplate').innerHTML
const emptyCart=document.querySelector('.emptyCart')
const totalAmountBox=document.querySelector('.totalAmount')

function setTotal(amt){
    console.log(totalAmountBox.innerText)
    totalAmountBox.innerHTML="&#x20B9;"+`${amt}`;
}
function replaceValue(element,qty){
    const qtyBox=element.querySelectorAll('.qty')
    const totalBox=element.querySelectorAll('.total')
    const price=element.querySelector('#price').innerText
    const total=qty*Number(price)
    console.log(price)
    // const amount=amountBox[0].innerText
    let b=[qty,total]
    let i=0
   let a=[qtyBox,totalBox]
    a.forEach((elem)=>{
    elem.forEach((e)=>{
        e.innerText=b[i]
    })
    i++;
   })

   //changing in localStorage
   const name=element.querySelector('.name').innerText
    if(localStorage.getItem(name)){
        item=JSON.parse(localStorage.getItem(name))
       item.qty=qty
       item=JSON.stringify(item)
        console.log(item)

        localStorage.setItem(name,item)
   }
    
}

const totalItems=Object.entries(localStorage)
let totalAmount=0;
if(totalItems.length!=0) emptyCart.style.display="none";
for(let i of Object.entries(localStorage)){
    let x=itemTemplate
    console.log("hello")
    const name=i[0]
    const data=JSON.parse(i[1])
    const total=Number.parseInt(data.price.slice(1))*Number(data.qty)
    totalAmount+=total;
    const p=document.createElement('p')
    const d=document.createElement('div')
    x=x.replaceAll("{name}",name)
    x=x.replaceAll("{qty}",data.qty)
    x=x.replaceAll("{total}",total)
    x=x.replaceAll("{price}",data.price)
    x=x.replaceAll("{amount}",Number.parseInt(data.price.slice(1)))
    x=x.replace("{url}",data.img)
  
    itemBox.insertAdjacentHTML("beforeend",x)
}
console.log(totalAmount)
setTotal(totalAmount)
function increment(e){
    
    const x=e.currentTarget.parentNode
    const y=x.parentNode
    const desBox=y.querySelector('.description')
    const price=desBox.querySelector('#price').innerText
    const newQty=Number(x.querySelector('input').value)+1
    x.querySelector('input').value=newQty
    totalAmount+=price;
    setTotal(totalAmount)
    
    replaceValue(desBox,newQty)

}
function decrement(e){
    
    const x=e.currentTarget.parentNode
    const y=x.parentNode
    const desBox=y.querySelector('.description')
    const newQty=Number(x.querySelector('input').value)-1
    const price=element.querySelector('#price').innerText
    x.querySelector('input').value=newQty
    totalAmount-=price;
    setTotal(totalAmount)
    replaceValue(desBox,newQty)

}
