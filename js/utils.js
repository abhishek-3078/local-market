const mqc=window.matchMedia("(max-width:800px)")
mqc.onchange=()=>{
   
    if(!mqc.matches){
        document.getElementById("navbarLeft").style.display="flex"
    }else{
        document.getElementById("navbarLeft").style.display="none"
    }
}
document.querySelector(".burger-menu").onclick=()=>{
    if(document.querySelector("#navbarLeft").style.display=="flex"){
        return document.querySelector("#navbarLeft").style.display="none"
    }
    document.querySelector("#navbarLeft").style.display="flex"
}