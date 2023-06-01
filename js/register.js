document.querySelector("#register").onsubmit=(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    console.log(JSON.stringify(Object.fromEntries(formData)))
    const url="http://127.0.0.1:3000/register"
    const url2="https://local-market-api.onrender.com/register"

    fetch(url2,{
        method:"POST",
        headers:{

            'Content-Type': 'application/json'
        },
        body:JSON.stringify(Object.fromEntries(formData))
    }).then(res=>{
        console.log(res)
        return res.json()
    }).then(data=>{
        if(data.success){
           
            window.location="/Services.html"
        }
    }).catch(e=>console.log(e))
}
