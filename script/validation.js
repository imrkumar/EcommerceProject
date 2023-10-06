var data ={
    name: "admin",
    password:"admin",
    name: 'rk',
    password:'rk'

}

function validate(){
    var name = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    var msg = document.getElementById("msg");
    var button = document.querySelector("button");
    if(name==data.name && pwd==data.password){
        window.location.href ="index.html";
    }else{
        msg.className="text-danger";
        msg.innerHTML="Invalid credentials";
    }
}