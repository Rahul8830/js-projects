let taskContainer=document.querySelector("#task-list");
let button=document.querySelector("#btn");

button.addEventListener("click",addTask);
document.body.addEventListener("click",(e)=>{
    if(e.target.classList.contains("close"))
    {
        removeTask(e.target);
    }
});

function addTask(){
    
    let headDiv=document.createElement("div");
    let bodyDiv=document.createElement("div");
    let task=document.querySelector("#taskValue").value;
    
    let taskPar=document.createElement("p");
    let currentDate=new Date().toLocaleString();
    let datePar=document.createElement("p");
    let closeDiv=document.createElement("div");
    let close='<i class="fas fa-times"></i>';
    datePar.innerText=currentDate;
    closeDiv.innerHTML=close;
    taskPar.innerText=task;
    headDiv.appendChild(datePar);
    headDiv.appendChild(closeDiv);
    bodyDiv.appendChild(taskPar);
    let taskDiv=document.createElement("div");
    taskDiv.appendChild(headDiv);
    taskDiv.appendChild(bodyDiv);
    taskDiv.classList.add("task");
    headDiv.classList.add("taskHead");
    closeDiv.classList.add("close");
    bodyDiv.classList.add("taskBody");
    console.log(taskDiv);
    taskContainer.appendChild(taskDiv);
}

function removeTask(closeDiv){

        let task=closeDiv.parentElement.parentElement;
        console.log(task);
        task.remove();
}
