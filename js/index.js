const nextBtn=document.querySelector('.next')
const prevBtn=document.querySelector('.prev')
const container=document.querySelector('.categories-container')
const box=document.querySelector('.category')
let counter=1
container.scrollLeft=0
boxStyle=getComputedStyle(box)
nextBtn.onclick=(e)=>{
    container.scrollLeft+=box.offsetWidth+ 2*parseInt(boxStyle.marginRight)
    

}
prevBtn.onclick=(e)=>{
    
    container.scrollLeft-=box.offsetWidth+ 2*parseInt(boxStyle.marginRight)
}

var loader=document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display="none";
})