
if(localStorage.getItem("token")){
const url="http://127.0.0.1:3000/checkauth"
const url2="https://local-market-api.onrender.comcheckauth"
const url3="https://local-market-api.onrender.com/"
fetch(url2,{
    method:"GET",
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
}).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
        alert(`hello ${data.name}`)
    }
})
}


document.querySelector("#logout").addEventListener("click",(e)=>{
   fetch(`${url3}logout`,{
    method:"GET",
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
   }).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
        localStorage.removeItem("token")
        alert("Removed")
    }
   })
})