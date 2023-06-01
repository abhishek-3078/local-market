const nextBtn=document.querySelector('.next')
const prevBtn=document.querySelector('.prev')
const container=document.querySelector('.categories-container')
const box=document.querySelector('.category')
const categories=document.querySelector('#categories')
const categoryHead=document.querySelector('#categoryHeading')
const respcategoryHead=document.querySelector('.resp-category')
const slider=document.querySelector(".slider")
let counter=1
let boxNo=document.querySelectorAll('.category').length


container.scrollLeft=0
boxStyle=getComputedStyle(box)
const scrollWidth=container.offsetWidth;
const totalWidth=(box.offsetWidth+ 2*parseInt(boxStyle.marginRight))*8
console.log(scrollWidth,totalWidth)

console.log(scrollWidth,totalWidth)

window.onload=()=>{
    document.querySelector(".loading").style.display="none"
}
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

}

var loader=document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display="none";
})

    console.log(container.scrollLeft)
    }




//mobile categories
const wmc=window.matchMedia("(max-width:800px)")


let a=0.2;
const category=document.querySelectorAll('.cateogry')
wmc.onchange=()=>{
    if(!wmc.matches){
        if(categories.style.display=="flex")
        categories.style.display="none"
    }
}

//categories arrow rotate
respcategoryHead.onclick=()=>{
    
    if(categories.style.display!="flex"){
        document.querySelector("#arrow").style.transform="rotateZ(180deg)"
                    categories.style.display="flex";
                    let a=0.1;
                    category.forEach((e)=>{
                    setTimeout(()=>{
                        e.classList.add("slidein")
                    },a*1000)
                    a=a+0.1
                    })   
            }else{
                document.querySelector("#arrow").style.transform="rotateZ(0deg)"
                categories.style.display="none";
                category.forEach((e)=>{
                    e.classList.remove("slidein")
                    })  
                
            }
            
        }
    

        //slide up effect
        const cards=document.querySelectorAll(".card")

function scroll(){
    if(wmc.matches){
        setTimeout(()=>{
            cards[0].style.transform="translateY("+0+"px)";
        },0)
    cards.forEach(card=>{
            if(card==card[0]) return;
        const rect=card.getBoundingClientRect();
        
       console.log(rect.top,card.offsetHeight,window.innerHeight)

        if(rect.top-card.offsetHeight<=window.innerHeight){

            setTimeout(()=>{
                card.style.transform="translateY("+0+"px)";
            },0)
    }
    
    })
}
}

scroll()

document.addEventListener("scroll",(e)=>{
    scroll()
})


document.querySelector(".slidemenu").addEventListener("click",(e)=>{
    window.scrollTo(0,slider.offsetHeight)
    
document.querySelector(".slidemenu").style.display = "none";

})