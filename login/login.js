"use strict";
var login = document.getElementById('login');
var signup = document.getElementById('signup');

login.addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    var flag = 0;
    for (var i = 0; i < userdata.length; i++) {
        console.log(userdata[i]);
        if (username == userdata[i].username && password == userdata[i].password) {
            flag = 1;
            sessionStorage.setItem("name", username);
            if(userdata[i].role=="user"){
            window.location.href = "../user/user_home.html";
            }else if(userdata[i].role=="admin"){
                window.location.href = "../admin/admin_home.html"
            }
        }
    }
    if (flag == 0) {
        var wrong = document.getElementById('incorrect');
        wrong.innerHTML = "*Incorrect Username or Password ";
        wrong.style.color = 'red';
    }
});

signup.addEventListener('click',function(){
    window.location.href = "../registration/registration.html";
})

