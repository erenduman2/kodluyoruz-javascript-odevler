let ulDOM = document.querySelector("#list");
ulDOM.addEventListener("click", clickFunc)
let inputDOM = document.querySelector("#task");
let i, count=0;
let closeButtons = document.getElementsByClassName("close");
let num = {uname: "eren", age: 23}
localStorage.getItem("count") ? count = localStorage.getItem("count") : count = 0  

for(i=0; i<localStorage.getItem("count"); i++){
    let liDOM = document.createElement('li');
    if(localStorage.getItem(`toDo${i}`) != null){
        liDOM.innerHTML = `${localStorage.getItem(`toDo${i}`)} <span style="color: black;" class="close">x</span>`
        liDOM.setAttribute("id", `${i}`)
        ulDOM.appendChild(liDOM)
        liDOM.setAttribute("class", `${localStorage.getItem(`color${i}`)}`)
    }
    
}

for(i=0; i<closeButtons.length; i++){
    closeButtons[i].addEventListener("click", deleteElement)
}

function newElement(){
    let liDOM = document.createElement('li');
    let closeDOM = document.createElement('span');
    liDOM.innerHTML = `${inputDOM.value} <span style="color: black;" class="close">x</span>`;
    liDOM.setAttribute("id", `${count}`)
    if(inputDOM.value == "" || inputDOM.value.trim().length == 0){
        let toast = new bootstrap.Toast(document.querySelector("#liveToast1"))
        toast.show()
    }
    else{
        ulDOM.appendChild(liDOM);
        let toast = new bootstrap.Toast(document.querySelector("#liveToast"))
        toast.show()
        localStorage.setItem(`toDo${count}`, inputDOM.value);
        count++;
        localStorage.setItem("count", count);
    }
    inputDOM.value = "";
    for(i=0; i<closeButtons.length; i++){
        closeButtons[i].addEventListener("click", deleteElement)
    }
}


function clickFunc(li){
    li.target.classList.toggle("checked")
    localStorage.setItem(`color${li.target.getAttribute("id")}`, li.target.classList.toString())
}

function deleteElement(){
    this.parentElement.remove();
    let a = this.parentElement.getAttribute("id")
    localStorage.removeItem(`toDo${a}`);
}

