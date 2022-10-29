let key = 'numCards'
let key2 = 'ids'
// localStorage.setItem(key,'')
// localStorage.setItem(key2,'')

runningCounter = 0
ids = []

if(localStorage.hasOwnProperty(key)){
    runningCounter = localStorage.getItem(key)
}
if(localStorage.hasOwnProperty(key2)){
    // ids = JSON.parse(localStorage.getItem(key2))
}

console.log(ids)
document.onload = produce()
// document.getElementById("body").addEventListener("keydown", function(event){
//     spawn()
// })

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
    ids.push(div.id)
    div.textContent = div.id;
    document.getElementById("cards").appendChild(div);
    runningCounter ++;
    localStorage.setItem(key,runningCounter)
    localStorage.setItem(key2,JSON.stringify(ids))
}
function produce(){
    for(let i = 0; i < runningCounter;i++){
        var div = document.createElement('div');
        div.className = "card";
        div.setAttribute('onclick','onClick(this)')
        div.id = ids[i]
        div.textContent = div.id;
        document.getElementById("cards").appendChild(div);
    }
}
function hoverCreate(){
    document.getElementById('create').style.transform = 'translateX(-10px) translateY(-10px)';
    document.getElementById('border').style.transform = 'translateX(-20px) translateY(-20px)'
    document.getElementById('plus').style.transform = 'translateX(-20px) translateY(-20px) rotate(90deg)'
    document.getElementById('plus').style.textShadow = '14px -14px #212631'

    

}

function outHoverCreate(){
    document.getElementById('create').style.transform = 'translateX(0px) translateY(0px)';
    document.getElementById('border').style.transform = 'translateX(0px) translateY(0px)'
    document.getElementById('plus').style.transform = 'translateX(0px) translateY(0px)'
    document.getElementById('plus').style.textShadow = '7px 7px #212631'
}

function createPage(){
    window.location.href = 'creating/createPage.html';
}
//TODO: Work on storing things
