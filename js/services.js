const addBtn=document.querySelectorAll('.cartBtn')
function addToCart(name,price,img,cat){
    console.log(name,price)
    let item={}
    if(localStorage.getItem(name)){
         item=JSON.parse(localStorage.getItem(name))
        item.qty++;
    }else{
    item={
        price:price,
        qty:1,
        img:img,
        category:cat
    }
}
    item=JSON.stringify(item)
    localStorage.setItem(name,item)
    
    
}
addBtn.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{ 
       
        let bx=event.target.closest('li')
        const img=event.target.parentNode.querySelector('img').src
        const category=event.target.closest('.allProducts').children[0].innerText
        
        addToCart(bx.querySelector('h1').innerText,bx.querySelector('p').innerText,img,category)
       
    })
})