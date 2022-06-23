let btn = document.getElementById('buttons');
btn.addEventListener('click', function(e){
    if(e.target.classList.contains('buttonClass')){
        console.log('buttonClass');
    } else console.log('Click');
});