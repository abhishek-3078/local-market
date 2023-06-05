// for index page and services page searchbar

let myProductList = {
    product1 : ["grocery","apple","tomato","grapes","mango","dhaniya","bellpepper","banana","bhindi"],
    product2 : ["electrical","fan","refrigerator","microwave","washing machines","iron","cables","led","bulb"],
    product3 : ["fastfood","appolo moxie","pizza","burger","h9","canteen","maggie","hotspot","sharma bhojnalya","nit market","mehfil dhaba","suraj dhaba"],
    product4 : ["tailor","tailoring material","book tailor","readymade cloth","nearby tailor","dress designer","stiching","silae"],
    product5 : ["electronics","television","mobile","phone","watch","laptop","tablet","camera"],
    product6 : ["stationary","pen","pencil","sharperner","copy","color","book","file","bag","glue"],
    product7 : ["fashion","tshirt","shoes","jeans","coat","saree","undergarmet","lahnga","salwarsuit","kidswear","menswear"],
    product8 : ["medical","pills","fitness","aaurvedic","ayurvedic","homeopathy","mask","face mask","eyecare","eyedrop","eardrops"],
};

function showIndexList(event){
    let product = document.getElementById("searchbar").value.toLowerCase();
    let finalList = new Array()
    for(keys in myProductList){
        if(finalList.length >= 5){
            break;
           }
        for(items of myProductList[keys]){
            if(items.includes(product)){
                finalList.push(items);
            }
           if(finalList.length >= 5){
            break;
           }
        }
    }
    // console.log(finalList)
    let lengthOfFinalList = finalList.length
    let finalListDivs = document.getElementsByClassName("options");
    // console.log(finalListDivs)
    for(let i=0;i<lengthOfFinalList;i++){
        // console.log(finalListDivs[i].innerText);
        finalListDivs[i].innerText = finalList[i];
        finalListDivs[i].style.display = "block";
    }
    for(let i = lengthOfFinalList ; i < 5 ; i++){
        finalListDivs[i].style.display = "none";
    }
}

function sendToLink(event){
    event.preventDefault()
    let product = document.getElementById("searchbar").value.toLowerCase();
    let foundkey;
    console.log(product)
    for(key in myProductList){
        // console.log(key);
        for(items of myProductList[key]){
            // console.log(items)
            if(items == product){
                foundkey = key;
                window.location = `/Services.html#${foundkey}`;
                return;
            }
        }
    }
    console.log(foundkey);   
}

// for all other pages


function giveListToShow(){   
    let product = document.getElementById("searchbar").value.toLowerCase();    
    let servicesProduct = document.querySelectorAll(".productsList ul h1");
    let productHeading = document.getElementsByClassName("productHeading");
    let productHeadingList = new Array()
    for(items of productHeading){
        productHeadingList.push(items.innerText.toLowerCase());
    }
    // console.log(productHeadingList);
    let len = servicesProduct.length;
    let servicesProductList = new Array();
    for(items of servicesProduct){
        servicesProductList.push(items.innerHTML.toLowerCase());
    }
    // console.log(servicesProductList);
    let listToShow = new Array();
    servicesProductList = productHeadingList.concat(servicesProductList)
    console.log(servicesProductList);
    for(items of servicesProductList){
        if(items.includes(product)){
            listToShow.push(items);
            if(listToShow.length >= 5){
                break;
            }
        }
    }
    console.log(listToShow);
    finalListToShow = new Array();
    let i = 0;
    while(i < listToShow.length){
        if(i == listToShow.length){
            finalListToShow.push(listToShow[i]);
            break;
        }
        finalListToShow.push(listToShow[i]);
        if(listToShow[i] == listToShow[i+1]){
            let j = i+1;
            while(j < listToShow.length && listToShow[j] == listToShow[j-1]){
                j++;
            }
            if(j == listToShow.length){
                break;
            }
            i = j-1;
        }
        i++;
    }
    return finalListToShow;
}

// need to do rest work fianlListToShow as options is done

function showList(event){
    event.preventDefault();
    let finalList = giveListToShow();
    console.log(finalList);
    let lengthOfFinalList = finalList.length
    let finalListDivs = document.getElementsByClassName("options");
    console.log(finalListDivs)
    for(let i=0;i<lengthOfFinalList;i++){
        console.log(finalListDivs[i].innerText);
        finalListDivs[i].innerText = finalList[i];
        finalListDivs[i].style.display = "block";
    }
    for(let i = lengthOfFinalList ; i < 5 ; i++){
        finalListDivs[i].style.display = "none";
    }
}


// searchProduct function is done 

function searchProduct(event){
    event.preventDefault()
    let product = document.getElementById("searchbar").value.toLowerCase();    
    if(product == ""){
        return;
    }
    let finalList = giveListToShow();
    // console.log(finalList);
    let servicesProduct = document.querySelectorAll(".productsList ul h1");
    console.log(finalList[0]);
    for(items of servicesProduct){
        console.log(items.innerHTML.toLowerCase())
        if(items.innerHTML.toLowerCase() == finalList[0]){
            items.scrollIntoView();
            return;
        }
    }

    let productHeading = document.getElementsByClassName("productHeading");

    for(items of productHeading){
        // console.log(items.innerText.toLowerCase())
        if(items.innerText.toLowerCase() == finalList[0]){
            items.scrollIntoView();
            return;
        }
    }
}


let finalListDivs = document.getElementsByClassName("options");
for(elements of finalListDivs){
    elements.addEventListener("click",function(e){
        console.log(finalListDivs)
        console.log(elements);
        let textbar = document.getElementById("searchbar");
        textbar.value = e.target.innerText;
    });
}

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


function checkElementInside(event){
    let a = document.getElementById('searchbar');
    let b = document.getElementsByClassName('options');

    console.log("helloe");
    if(!a.contains(event.target)){
        for(items of b){
            items.style.display = "none";
        }
    }
}

  
  
  
  