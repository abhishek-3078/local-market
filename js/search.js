const Products=document.querySelectorAll(".allProducts")


queries={
    Groceries:["Apple","Tomato","Mango","Dhaniya"],
    Electrical:["Fans","Refrigerator"]
}


const searchBox=document.querySelector("#banner form input")

searchBox.addEventListener("keyup",(e)=>{
    console.log(searchBox.value)
    for(let i in queries){
        queries[i].forEach(e=>{
            if(e.toLowerCase().startsWith(searchBox.value.toLowerCase())){
                console.log(e)
            }
        })
        }
    })
    

document.querySelector("#banner form").onsubmit=(e)=>{
    e.preventDefault()
    const query=searchBox.value
    searchBox.value=""
    for(let i in queries){
        queries[i].forEach(e=>{

            if(e==query){
                Products.forEach(p=>{
                    
                    if(p.querySelector("h1").innerText.toLowerCase()==query.toLowerCase()){
                        p.querySelector("h1").scrollIntoView();
                    }
                })
            }
        })
    }
}