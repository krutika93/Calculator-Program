let input = document.getElementById("inputBox");

let button = document.querySelectorAll('button');

let string="";
let arr= Array.from(button);
arr.forEach(button => {
button.addEventListener('click', (e) => {
if(e.target.innerHtml == '=')
{
string =eval(string);
input.value = string;
}
else if(e.target.innerHTML == 'CL')
{
string ="";
input.value = string;
}
else if(e.target.innerHTML == 'DE')
{
string = string.substring(0, string.length-1);
input.value =string;
}
else{
string+=e.target.innerHTML;
input.value=string;
}
})
})