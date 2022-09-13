let input=document.querySelector('.head input')
let display=document.querySelector('.display')
let btn=document.querySelector('.add')
let inputv=""


// on add key press
btn.addEventListener('click',(e)=>{
    data={
        0:inputv
    }
     sendData(data)
     (e.target.previousElementSibling.value="");
})
//on enter press
input.addEventListener('keyup',(e)=>{
    e.preventDefault()
    if(e.code=="Enter"){
        data={
            0:inputv
        }
        sendData(data)
       e.target.value=""
    }

    inputv=e.target.value;
})


// without using database .json
// const addtolist=(todo)=>{
//     let total=document.querySelectorAll('.list').length
// if(todo){
//     let div=document.createElement('div')
//     div.setAttribute('class','list')
//     div.innerHTML=`
//               <input type="checkbox" name="zee" id="idx${total+1}">
//               <label for="idx${total+1}">${todo}</label>
//               <i class="fa-solid fa-trash"></i>

//     `
//     display.prepend(div)
//     // added to del
//     inputv="";

//     // let i=document.querySelectorAll('i')
//     // for(let id=0;id<i.length;id++){
//     //     i[id].addEventListener('click',(e)=>{
//     //         let parent=e.path[1]
//     //        parent.remove();
//     //     })
//     // }
//   // added to checkbox
//   let chkbox=document.querySelectorAll('.list input')
//   for(let idc=0;idc<chkbox.length;idc++){
//     chkbox[idc].addEventListener('click',(e)=>{
//         console.log(e);
//       })
// }
  
// }
// }

const displayList=(data)=>{
    // console.log(data);
    for(let i=0;i<data.length;i++){
     let todo=data[i]['length'];
     let div=document.createElement('div')
    div.setAttribute('class','list')
    div.innerHTML=`
    <input type="checkbox" name="zee" id="idx1">
    <label  for="idx1">${todo}</label>
    <i class="fa-solid fa-trash "id=${i+10}></i>
 
    `
    display.prepend(div)
    let icon=document.getElementById(`${i+10}`)
    icon.addEventListener('click',deldata)
    // display.prepend(div)
    }
    
 
 }
const displaydata=()=>{
    fetch('./database.json')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        displayList((data))
    })
    .catch(err=>console.log(err))
}
displaydata()

const deldata=(idx)=>{
    console.log('delete kro');
  let index=idx.target.id
  let data={
    index,
  }
  fetch('http://localhost:8000/deldata',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    })
    .then(res=>console.log(res))
    .catch(res=>console.log(res))
}
const sendData=(data)=>{
    console.log(data);
    fetch('http://localhost:8000/postdata',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    })
    .then(res=>console.log(res))
    .catch(res=>console.log(res))
}