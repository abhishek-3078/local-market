const addBtn=document.querySelectorAll('.cartBtn')
function addToCart(name,price,img){
    console.log(name,price)
    let item={}
    if(localStorage.getItem(name)){
         item=JSON.parse(localStorage.getItem(name))
        item.qty++;
    }else{
    item={
        price:price,
        qty:1,
        img:img
    }
}
    item=JSON.stringify(item)
    console.log(item)

    localStorage.setItem(name,item)
    
    
}
addBtn.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
       
        let bx=event.target.closest('li')
        const img=event.target.parentNode.querySelector('img').src
        
        addToCart(bx.querySelector('h1').innerText,bx.querySelector('p').innerText,img)
       
    })
})