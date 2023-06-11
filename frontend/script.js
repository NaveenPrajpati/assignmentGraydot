//import all elements of html
const box1=document.getElementsByClassName('box1')[0];
const box2=document.getElementsByClassName('box2')[0];
const btn=document.getElementById('btn')
const heading=document.getElementById('heading')
let allChild=box1.children
let all2Child=box2.children

let dragedChild;

//add dragstart  eventlistener to all elements of first box
for(let a=0;a<allChild.length;a++){
    allChild[a].style.cursor='pointer'
    allChild[a].addEventListener('dragstart',(e)=>{
        e.target.style.color='blue'
      
        dragedChild=e.target
        
    })
    
    allChild[a].addEventListener('dragend',(e)=>{
    e.target.style.color='black'
    })
 
}


box2.addEventListener('dragover',(e)=>{
    e.preventDefault()

    console.log('drag over')
})

//add draged item  to second box when you drop it and give notificaton of successfull drop
box2.addEventListener('drop',(e)=>{
    e.target.appendChild(dragedChild)
    heading.innerHTML='item drop successfully'
    setTimeout(() => {
    heading.innerHTML=''
    }, 1000);
})

//button add all items of second box to first box
btn.addEventListener('click',()=>{
    do {
        box1.appendChild(all2Child[0])
    }
    while(all2Child.length!==0)
})

