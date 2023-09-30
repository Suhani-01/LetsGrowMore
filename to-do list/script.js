const input = document.getElementById("input_box");
const Container = document.getElementById("list_container");
function add_Task(){
    if(input.value === ''){
        alert("Enter some task first.....<'_'>!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        Container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value ="";
    saveData();
}
Container.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",Container.innerHTML);
}
function showTask(){
    Container.innerHTML = localStorage.getItem("data");
}
showTask();