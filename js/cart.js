// {"price":"₹ 450/dozen","qty":2}
const itemBox=document.querySelector('.items')
const itemTemplate=document.querySelector('.item')
const x = JSON.stringify(itemTemplate)
// itemTemplate.replace("name",'apple')
console.log(typeof(itemTemplate),x)
const a=document.querySelector('.name')
const b=document.querySelector('.qty')
const c=document.querySelector('.price')
const d=document.querySelector('.total')

console.log(itemTemplate)
for(let i of Object.entries(localStorage)){
    console.log("hello")
    const name=i[0]
    const data=JSON.parse(i[1])
    const total=Number.parseInt(data.price.slice(1))*Number(data.qty)
    const p=document.createElement('p')
    const d=document.createElement('div')
    p.innerText=name+" "+data.qty+" " 
    + data.price +" "+ total;
    p.className='item'
    console.log(p)
    itemBox.appendChild(p)
}
console.log(Number.parseInt("$ 450/dozen".slice(1)))