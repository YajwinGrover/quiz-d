let key = 'numCards'
document.onload = produce()

runningCounter = 0

if(localStorage.hasOwnProperty(key)){
    runningCounter = localStorage.getItem(key)
}

console.log(runningCounter)

document.getElementById("body").addEventListener("keydown", function(event){
    spawn()
})

function onClick(ele){
    sessionStorage.setItem('id',ele.id)
    window.location.href = "newIndex.html";
}

function spawn(){
    console.log(runningCounter)
    var div = document.createElement('div');
    div.className = "card";
    div.setAttribute('onclick','onClick(this)')
    div.id = Math.floor(Math.random() * 100).toString()
    div.textContent = div.id;
    document.getElementById("cards").appendChild(div);
    runningCounter ++;
    localStorage.setItem(key,runningCounter)
}
function produce(){
    counter = localStorage.getItem(key)

    for(let i = 0; i < counter;i++){
        var div = document.createElement('div');
        div.className = "card";
        div.setAttribute('onclick','onClick(this)')
        div.id = Math.floor(Math.random() * 100).toString()
        div.textContent = div.id;
        document.getElementById("cards").appendChild(div);
    }
}



//TODO: Work on storing things
