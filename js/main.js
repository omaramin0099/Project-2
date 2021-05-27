let btn = document.getElementById('Add');
let mainDiv=document.getElementById('MainDiv');
let noTask = document.getElementById('NoTask');
let input = document.getElementById('input');
let clear = document.getElementById('clear');

var x=0;
let empty = ()=>{
    if(mainDiv.childElementCount == 0){
        noTask.classList.remove('none');
    }
}
var addTask = ()=>{
    task = input.value;
    if(task.length==0||task.length<2){
        alert("Enter a valid task!")
    }
    else{
        noTask.classList.add('none');
        mainDiv.innerHTML +=`<div class="alert alert-primary">${task}<button class="delete btn btn-danger float-right" id="remove">remove</button></div>`;
        input.value=" ";
        x= x+1;
    }
    
}
btn.addEventListener('click',addTask);

let Clear = ()=>{
    mainDiv.innerHTML="";
    noTask.classList.remove('none');
}
clear.addEventListener('click', Clear)

let removeTask = (e) =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    empty();

}
document.addEventListener('click',removeTask);