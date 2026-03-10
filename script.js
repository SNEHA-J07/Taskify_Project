let form=document.getElementById("taskForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let task=document.getElementById("taskName").value;

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

tasks.push({name:task,done:false});

localStorage.setItem("tasks",JSON.stringify(tasks));

alert("🎉 Task Added!");

form.reset();

});

}

let list=document.getElementById("taskList");

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

let completed=0;

if(list){

tasks.forEach((t,index)=>{

let li=document.createElement("li");

/* Task text */
let span=document.createElement("span");
span.innerHTML="✅ "+t.name;

/* Mark Complete */
span.onclick=function(){
tasks[index].done=!tasks[index].done;
localStorage.setItem("tasks",JSON.stringify(tasks));
location.reload();
};

/* Edit Button */
let editBtn=document.createElement("button");
editBtn.innerHTML="✏️ Edit";
editBtn.className="edit-btn";

editBtn.onclick=function(){

let newTask=prompt("Edit your task:",t.name);

if(newTask){
tasks[index].name=newTask;
localStorage.setItem("tasks",JSON.stringify(tasks));
location.reload();
}

};

/* Delete Button */
let deleteBtn=document.createElement("button");
deleteBtn.innerHTML="🗑 Delete";
deleteBtn.className="delete-btn";

deleteBtn.onclick=function(){

let confirmDelete=confirm("Are you sure you want to delete this task?");

if(confirmDelete){
tasks.splice(index,1);
localStorage.setItem("tasks",JSON.stringify(tasks));
location.reload();
}

};

/* Completed Style */
if(t.done){
span.style.textDecoration="line-through";
completed++;
}

li.appendChild(span);
li.appendChild(editBtn);
li.appendChild(deleteBtn);

list.appendChild(li);

});

}

function updateProgress(){

let total=tasks.length;

let percent= total==0 ? 0 : (completed/total)*100;

let bar=document.getElementById("progressBar");

if(bar){
bar.style.width=percent+"%";
}

let text=document.getElementById("progressText");

if(text){
text.innerText="Completed "+completed+" of "+total+" tasks";
}

}

updateProgress();

function toggleMode(){
document.body.classList.toggle("dark");
}

const quotes=[
"🌟 Success is the sum of small efforts repeated daily.",
"🚀 The secret of getting ahead is getting started.",
"💡 Focus on progress, not perfection.",
"🔥 Discipline is the bridge between goals and achievement.",
"✨ Small steps every day lead to big success."
];

let q=document.getElementById("quote");

if(q){
let random=Math.floor(Math.random()*quotes.length);
q.innerText=quotes[random];
}

