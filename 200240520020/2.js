function validation()
{
    userName();
    passWord();
    eMail();

}

function userName()
{
    let userele =documnet.querySelector("#username").value;
     let username = document.querySelector("#ref").cloneNode(true);
     username.children[0].innerHTML = userele;
     let user = document.querySelector("#comment-sec");
     user.appendChild(username);
     document.querySelector("#username").value="";

}
function passWord()
{
    let passele =document.querySelector("#id1").value;
     let password = document.querySelector("#ref").cloneNode(true);
     password.children[1].innerHTML = passele;
     let user2= document.querySelector("#comment-sec");
     user2.appendChild(password);
     document.querySelector("#id1").value="";

}
function eMail()
{
    let usermail =document.querySelector("#mail").value;
     let emailele = document.querySelector("#ref").cloneNode(true);
     emailele.children[2].innerHTML = usermail;
     let mailid = document.querySelector("#comment-sec");
     mailid.appendChild(emailele);
     document.querySelector("#mail").value="";

}