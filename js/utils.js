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
    let a = document.querySelector("#profile");
    // console.log(a);
    let b = getComputedStyle(a);
    if(b.display == "none"){
        a.style.display ="inline-block";
    }
    else{
        a.style.display = "none";
    }
}

window.addEventListener('click', function(e){   
    console.log("tRGET",e.target)
    if (e.target == document.getElementById("profile") ||  e.target == document.querySelector("#profilePhoto img")){
        // console.log("You clicked inside the box");
    }
    else{
        document.querySelector("#profile").style.display = "none";
    }
  });