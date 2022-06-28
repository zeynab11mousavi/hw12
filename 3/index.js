let first = document.querySelector(".cta_container");
first.addEventListener('click', function (event) {
    alert(first.nodeName);
});

let btn = document.querySelector(".cta_button");
btn.addEventListener('click', function (event) {
    alert(btn.nodeName);
    event.cancelBubble = true;
});