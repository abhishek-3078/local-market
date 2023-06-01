const email=document.querySelector("#email")
const password=document.querySelector("#password")

document.querySelector("#loginBox").onsubmit=(e)=>{    
    console.log(email.value)
  
    e.preventDefault()
    const formData=new FormData(e.target)
    // console.log(JSON.stringify(Object.fromEntries(formData)))
    console.log(email)
    const url="http://127.0.0.1:3000/login"
    const url2="https://local-market.onrender.com/login"
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
            localStorage.setItem("token",data.token)
            window.location="/Services.html"
        }else{
            alert("invalid Credentials")
        }
    }).catch(e=>console.log(e))
}
