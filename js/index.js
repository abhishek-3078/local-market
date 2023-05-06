const nextBtn=document.querySelector('.next')
const prevBtn=document.querySelector('.prev')
const container=document.querySelector('.categories-container')
const box=document.querySelector('.category')
let counter=1
let boxNo=document.querySelectorAll('.category').length
container.scrollLeft=0
boxStyle=getComputedStyle(box)
const scrollWidth=container.offsetWidth;
const totalWidth=(box.offsetWidth+ 2*parseInt(boxStyle.marginRight))*8
// console.log((box.offsetWidth+ 2*parseInt(boxStyle.marginRight))*8)
console.log(scrollWidth,totalWidth)


nextBtn.onclick=(e)=>{
    const maxScrollLeft=totalWidth-scrollWidth;
    if(container.scrollLeft>=maxScrollLeft) container.scrollLeft=0;
    else{
    container.scrollLeft+=box.offsetWidth+ 2*parseInt(boxStyle.marginRight)
    }
    console.log(container.scrollLeft)
    
}
prevBtn.onclick=(e)=>{
    const maxScrollLeft=totalWidth-scrollWidth;
    if(container.scrollLeft==0) container.scrollLeft=maxScrollLeft;
    else{
    container.scrollLeft-=box.offsetWidth+ 2*parseInt(boxStyle.marginRight)
    console.log(container.scrollLeft)
    }
}