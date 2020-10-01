var menubtn = document.querySelectorAll(".menubtn");
var poem = document.querySelectorAll(".poema");
var butvoti = document.getElementsByClassName("voti");
var ri = document.getElementsByTagName("i");
var tf = document.getElementsByClassName("tf");
var b =  document.querySelectorAll("b");
var li =  document.querySelectorAll("#liuch");
for(var i = 0; i < tf.length; i++){
    tf[i].addEventListener("click", onpages);
}
for(var i = 0; i < tf.length; i++){
    tf[i].addEventListener("click", onpages);
}
for(var i = 0; i < ri.length; i++){
    ri[i].addEventListener("click", onpages);
}
for(var i = 0; i < li.length; i++){
    li[i].addEventListener("click", onpages);
}
for(var i = 0; i < menubtn.length; i++ ){
    menubtn[i].addEventListener("click", onpages);
}
for(var i = 0; i < poem.length; i++){
    poem[i].addEventListener("click", onpages)
}
for(var i = 0; i < poem.length; i++){
    b[i].addEventListener("click", onpages)
}
for(var i = 0; i < butvoti.length; i++){
    butvoti[i].addEventListener("click", voti);
}
function onpages(e){
    var url = e.target.getAttribute("page");
    document.location.href = url;
}
function voti(){
    var login = document.getElementById("loginBox");
    var loginText = login.value;
    var password = document.getElementById("passwordBox");
    var passText = password.value;
    if(loginText == "lm" && passText == "bestklasruk" || loginText == "zr" && passText == "lidergeog" || loginText == "aa" && passText == "lidermath" || loginText == "ga" && passText == "liderlib" || loginText == "gg" && passText == "liderphy" || loginText == "gv" && passText == "liderchess" || loginText == "yor" && passText == "lidermus" || loginText == "ka" && passText == "lidermath" || loginText == "lg" && passText == "liderart" || loginText == "ln" && passText == "lidermed" || loginText == "me" && passText == "liderphys"|| loginText == "ms" && passText == "lidermba" || loginText == "mp" && passText == "lideradmin" || loginText == "md" && passText == "lidereng" || loginText == "ml" && pas0sText == "lidereng" || loginText == "ma" && passText == "lideruzb" || loginText == "nm" && passText == "liderbio" || loginText == "ov" && passText == "liderrus" || loginText == "oyu" && passText == "liderhis" || loginText == "fa" && passText == "liderIT" || loginText == "fas" && passText == "lidermba" || loginText == "dir" && passText == "liderdir" || loginText == "fn" && passText == "lidermath" || loginText == "ef" && passText == "liderbio" || loginText == "main" && passText == "lider"){
        window.location.href = loginText + ".html";
    }
    else{
        alert("Если вы не знаете пароля не пробуйте!")
    }
}
// }document.location.replace("index.html");
