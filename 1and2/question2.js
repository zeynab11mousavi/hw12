// 2ND QUESTION 
//PART 1
let inputName = document.getElementById('name');
inputName.onchange = function(){checker()};
function checker(){

    let message = document.createElement('p');
    var letters = /^[A-Za-z]+$/;
    if (inputName.value.match(letters)) {
        message.style.color = 'green';
        message.style.fontSize = '14px';
        message.textContent = "Valid name";
        document.querySelector('#mailP').prepend(message);
    } else {
        message.style.color = 'red';
        message.style.fontSize = '14px';
        message.textContent ="Name Required";
        document.querySelector('#mailP').prepend(message);

    }
}


//part 2
let inputMail = document.getElementById('email');
inputMail.onchange = function(){changer()};
function changer(){
    let defaultMail = document.getElementById('defaultMail');
    defaultMail.textContent = " ";
    defaultMail.textContent = inputMail.value;
}

//Part 3
let submit = document.getElementById('submit');
submit.addEventListener('click', function(){
    window.history.back();
})



// ANOTHER WAY
//part one;
// add an eventlistener to submit button to see if Name (the input) is empty print a message;
/*let submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {
    let message = document.createElement('p');
    if (document.getElementById('name').value.length == 0) {
        alert("Name Required");
    } else {
        alert("valid name");
    }
});*/

