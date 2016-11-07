document.write('Inside my .js file');
document.write('<br/>');
var numberOfThings = 5;
document.write(numberOfThings);

var elem = document.getElementById('demo');
elem.innerHTML = 'text text';

function myFunc(){
var elem2 = document.getElementById('demo3');
elem2.innerHTML = "inside my func";
}

myFunc();