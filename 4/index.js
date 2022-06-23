let items= document.querySelectorAll("li");
items.forEach(crossOff);
function crossOff(item){
    let text = item.textContent;
    item.textContent= " ";
    item.innerHTML = `<del>${text}</del>`

}