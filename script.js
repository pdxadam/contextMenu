var menu;
var targetObject;
window.onload = function(){
    let contextables = document.querySelectorAll(".contextable");
    for (c of contextables){
        c.addEventListener("contextmenu", getMenu);
    }
    menu = document.querySelector("#contextMenu")
}
function getMenu(event){
    event.preventDefault();
    contextMenu.classList.remove("hidden");
    contextMenu.style.left = event.pageX + "px";
    contextMenu.style.top = (event.pageY - window.scrollY) + "px";
    targetObject = event.target;

    
    
}
function closeMenu(){
    contextMenu.classList.add("hidden");
}
function select(obj){
    targetObject.innerText = obj.innerText;
    closeMenu()
}