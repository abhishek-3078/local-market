const addBtn=document.querySelectorAll('.cartBtn')
function addToCart(name,price){
    console.log(name,price)
    let item={}
    if(localStorage.getItem(name)){
         item=JSON.parse(localStorage.getItem(name))
        item.qty++;
    }else{
    item={
        price:price,
        qty:1
    }
}
    item=JSON.stringify(item)
    console.log(item)

    localStorage.setItem(name,item)
    
    
}
addBtn.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
       
        let bx=event.target.closest('li')
        
        addToCart(bx.querySelector('h1').innerText,bx.querySelector('p').innerText)
       
    })
})