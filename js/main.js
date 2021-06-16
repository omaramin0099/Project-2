let tasks = document.getElementById("tasks");
let inputTask = document.getElementById("inputTask");
let noTasks = document.getElementById("noTasks");
let addBtn = document.getElementById("addBtn");
let clear = document.getElementById("clear")
let show = document.getElementById("show");
let modal = document.getElementById('modal');
let close = document.getElementById("close");

let modal_toggle= ()=>{
    modal.classList.toggle('show')
}
show.addEventListener('click',modal_toggle);
close.addEventListener('click',modal_toggle);
x=0;
let addTask =()=>{
     if(inputTask.value.length<3||inputTask.value.length>20){
         alert('Input a valid task!')
         inputTask.value="";
     }
     else{

        noTasks.classList.add("none");
        tasks.innerHTML+= `<div class="alert alert-primary text-center">${inputTask.value} <button class="delete btn btn-danger float-right" style = "padding:3px" id = "delete">delete</button></div>`   
        inputTask.value="";
        x+=1;
        
        }
}
addBtn.addEventListener( 'click' , addTask);
inputTask.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   addBtn.click();
  }
});

let delete_check = (e)=>{
   if(e.target.classList.contains('delete')){
       e.target.parentElement.remove();
       x-=1;
       if(x==0){
            tasks.innerHTML="<div class=\"alert alert-danger text-center\" id=\"noTasks\">No tasks added yet!</div>"
            noTasks = document.getElementById("noTasks");
        }
    }
    if(e.target.classList.contains("alert-primary")){
         e.target.classList.toggle("checked");
    }
}
document.addEventListener('click',delete_check);

let clearF = ()=>{
    tasks.innerHTML="<div class=\"alert alert-danger text-center\" id=\"noTasks\">No tasks added yet!</div>"
    noTasks = document.getElementById("noTasks");
    x=0;
}
clear.addEventListener('click',clearF);

// let check = (e)=>{
//     if(e.target.classList.contains("alert-primary")){
//         e.target.classList.toggle("checked");
//     }
// }
