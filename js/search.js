queries={
    Groceries:["Apple","Tomato","Mango","Dhaniya"],
    Electrical:["Fans","Refrigerator"]
}

const searchBox=document.querySelector("#banner form input")
document.querySelector("#banner form").onsubmit=(e)=>{
    e.preventDefault()
    const query=searchBox.value
    searchBox.value=""
    for(let i in queries){
        i.forEach(e=>{
            if(e==query){
                document.getElementById("product2").scrollIntoView();
            }
        })
    }
}