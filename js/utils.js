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

if(localStorage.length>0){
    document.querySelector(".cartCount").style.visibility="visible"
}


document.querySelector("#profilePhoto").onclick=()=>{
    // alert("hello again")
    let a = document.querySelector("#profile");
    let b=getComputedStyle(a)
    // console.log(a,b.display);
    if(b.display == "none"){
        a.style.display ="inline-block";
    }
    else{
        a.style.display = "none";
    }
}

// document.querySelector("body").onclick=()=>{
//     if(document.querySelector("#profile").style.display == "inline-block"){
//         document.querySelector("#profile").style.display = "none";
//     }
// }
