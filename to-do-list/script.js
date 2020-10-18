let taskContainer=document.querySelector("#task-list");
let button=document.querySelector("#btn");


button.addEventListener("click",() => {
    let headDiv=document.createElement("div");
    let bodyDiv=document.createElement("div");
    let task=document.querySelector("#taskValue").value;
    let taskPar=document.createElement("p");
    let currentDate=new Date().toLocaleString();
    let datePar=document.createElement("p");
    datePar.innerText=currentDate;
    taskPar.innerText=task;
    headDiv.appendChild(datePar);
    bodyDiv.appendChild(taskPar);
    taskContainer.appendChild(taskDiv);
})