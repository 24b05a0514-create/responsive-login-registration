function toggleLogin(){

let x=document.getElementById("loginPass");

if(x.type==="password"){
x.type="text";
}
else{
x.type="password";
}

}

function checkPassword(){

let p1=document.getElementById("pass1").value;
let p2=document.getElementById("pass2").value;
let msg=document.getElementById("msg");

if(p1===p2){
msg.innerHTML="Password Matched ✓";
msg.style.color="green";
}
else{
msg.innerHTML="Password Not Matched ✗";
msg.style.color="red";
}

}