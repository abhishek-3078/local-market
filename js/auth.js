const profileOptions=document.querySelectorAll(".profileOptions")
const profileHead=document.querySelector("#profileHeading")
const profilePhoto=document.querySelector("#profilePhoto")
const loginButton=document.querySelector("#login")
const signupButton=document.querySelector("a[href='/SignUp.html']")




console.log(signupButton)
let nameBox=profileHead.querySelector("h3")
let emailBox=profileHead.querySelector("p")
let ImageBox=profileHead.querySelector("img")
let ImageBox2=document.querySelector("#profilePhoto img")

let url2="https://local-market-api.onrender.com/checkauth"
let url3="https://local-market-api.onrender.com/"

url2="http://127.0.0.1:3000/checkauth"
url3="http://127.0.0.1:3000/"


if(localStorage.getItem("token")){
fetch(url2,{
    method:"GET",
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
}).then(res=>res.json()).then(data=>{
    console.log(data)
    console.log(loginButton)
    if(data.success){
        profilePhoto.style.display="block"
        nameBox.innerText=data.name
        emailBox.innerText=data.email
        loginButton.style.display="none"
        signupButton.style.display="none"
        console.log(data.image)
        if(!data.image){
            let first=data.name[0].toLowerCase()

            ImageBox.src=`img/alphabets/${first}.png`
            console.log(ImageBox)
            ImageBox2.src=`img/alphabets/${first}.png`

        }

    }
})
}


// for logout
profileOptions[2].addEventListener("click",(e)=>{   

    fetch(`${url3}logout`,{
    method:"GET",
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
   }).then(res=>res.json()).then(data=>{
    console.log(data)
    if(data.success){
        profilePhoto.style.display="none"
        localStorage.removeItem("token")
        
        location.reload()
    }
   })
})