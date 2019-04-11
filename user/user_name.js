var name = sessionStorage.getItem('name');
console.log(name);
var hello = document.getElementById('hello');
//document.getElementById('hello').innerHTML = "   Hello "+name;
document.getElementById('name_table').innerHTML = name;

var req = document.getElementsByClassName('btn btn-dark request');
// var id = document.getElementById('deviceid');
// var device_name = document.getElementById('devicename');
// console.log(id);
// console.log(device_name);
// req.onclick = function(){
//   sessionStorage.setItem("device_id", id);
// }

