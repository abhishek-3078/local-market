
function firstAddition()
{
    document.getElementsByClassName("cartBtn").style.display="";
}
=======
const addBtn=document.querySelectorAll('.cartBtn')
function addToCart(name,price,img){
    console.log(name,price)
    let item={}
    if(localStorage.getItem(name)){
         item=JSON.parse(localStorage.getItem(name))
         console.log(item)
        item.qty++;
    }else{
    item={
        price:price,
        qty:1,
        img:img
    }
}
    item=JSON.stringify(item)
    localStorage.setItem(name,item)
    
    
}
addBtn.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{ 
        console.log(event.target)
       
        let bx=event.target.closest('li')
        console.log(bx)
        const img=event.target.parentNode.querySelector('img').src
        
        addToCart(bx.querySelector('h1').innerText,bx.querySelector('p').innerText,img)
       
    })
})
