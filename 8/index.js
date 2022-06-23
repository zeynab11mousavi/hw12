let script = document.createElement('script');
let cdn = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js';
script.setAttribute('href','https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js');
document.body.appendChild(script);

let version = cdn.split("/");
console.log(`the cdn version is: ${version[version.length-2]}`);
