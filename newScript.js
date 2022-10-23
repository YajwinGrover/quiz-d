document.onload = loaded()

function loaded(){
    var para = document.createElement('p')
    para.textContent = sessionStorage.getItem('id') + "is the divs id"
    document.getElementById('body').appendChild(para)
}