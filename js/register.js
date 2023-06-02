document.querySelector("#register").onsubmit=(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const userData=Object.fromEntries(formData)
    console.log(userData)
    let url2="https://local-market-api.onrender.com/register"
    let url="https://local-market-api.onrender.com"
    
    url2="http://127.0.0.1:3000/register"
    url="http://127.0.0.1:3000"

    fetch(url2,{
        method:"POST",
        headers:{

            'Content-Type': 'application/json'
        },
        body:JSON.stringify(Object.fromEntries(formData))
    }).then(res=>{
        // console.log(res)
        return res.json()
    }).then(data=>{

        if(data.success){
            fetch(`${url}/login`,{
                method:"POST",
                headers:{
        
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email:userData.email,
                    password:userData.password
                }),
                credentials:"include"
            }).then(res=>{
                console.log(res)
                return res.json()
            }).then(data=>{
                console.log(data)
                if(data.success){
                    console.log(data)
                    localStorage.setItem("token",data.token)
                    window.location="/Services.html"
                }else{
                    alert("invalid Credentials")
                }
            }).catch(e=>console.log(e))
        }
        else{
            alert("registeration failed",data)
        }
          
        
    }).catch(e=>console.log(e))
}
