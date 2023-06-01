const email=document.querySelector("#email")
const password=document.querySelector("#password")
const profilePhoto=document.querySelector("#profilePhoto")
document.querySelector("#loginBox").onsubmit=(e)=>{    
    console.log(email.value)
  
    e.preventDefault()
    const formData=new FormData(e.target)
    // console.log(JSON.stringify(Object.fromEntries(formData)))
    console.log(email)
    let url2="https://local-market-api.onrender.com/login"
     url2="http://127.0.0.1:3000/login"
    fetch(url2,{
        method:"POST",
        headers:{

            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email:email.value,
            password:password.value
        }),
        credentials:"include"
    }).then(res=>{
        console.log(res)
        return res.json()
    }).then(data=>{
        if(data.success){
            console.log(data)
            profilePhoto.style.display="block"
            localStorage.setItem("token",data.token)
            window.location="/Services.html"
        }else{
            alert("invalid Credentials")
        }
    }).catch(e=>console.log(e))
}
