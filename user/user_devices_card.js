// var det = devicedata.map(x => x.details);
var i=0;
devicedata.forEach(function (device, index) {
    var card = `<div class="card" id="card${index}">
    <img class="imgr" src="${device.img}" alt="Avatar" style="width:100%; ">
    <div class="container">
      <h4>${device.name}</h4>
      <p>${device.brand}</p>
      <p>${device.os}</p>
      <button type="button" class="btn btn-dark normal" id="normal${index}" onclick="requested_item(normal${index})">
        Request
      </button>
      <button type="button" class="btn btn-dark request" data-toggle="modal" data-target="#instant_request" > Instant Request</button>
      
      </div>
  </div>`;
    document.getElementById('row1').innerHTML += card;
  // var req = document.getElementById('btn btn-dark request');
  // req.onclick = function(){
  //   localStorage.setItem("device_name",device.name);
  //   localStorage.setItem("device_id",device.id);
  //   localStorage.setItem("device_img",device.img);
  // }
  i++;
  }
)

 function requested_item(element){
   console.log(element.id);
   document.getElementById('requested').innerHTML = "Device Requested";
  devicedata.forEach(function(device){
    //console.log(device)
    if(device.requested == element.id){
      console.log(device.requested);
      localStorage.setItem("id",device.id);
      localStorage.setItem("name",device.name);
      localStorage.setItem("image",device.img);
      localStorage.setItem("brand",device.brand);
      localStorage.setItem("os",device.os);
    }
  })
 }


//  function approved_item(element){
//   console.log(element.id);
//   document.getElementById('approved').innerHTML = "Device Approved";
//  devicedata.forEach(function(device){
//    //console.log(device)
//    if(device.approved == element.id){
//      console.log(device.approved);
//      localStorage.setItem("id",device.id);
//      localStorage.setItem("name",device.name);
//      localStorage.setItem("image",device.img);
//      localStorage.setItem("brand",device.brand);
//      localStorage.setItem("os",device.os);
//    }
//  })
// }
 
function myFunction() {
  var input, filter, cards, cardContainer, h5, title,title1,title2, i;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();

  cardContainer = document.getElementById("myItems");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    title = devicedata[i].name;
    title1 = devicedata[i].brand;
    title2 = devicedata[i].os;
    if (title.toUpperCase().indexOf(filter) > -1 || title1.toUpperCase().indexOf(filter) > -1||title2.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

//  var request_device = document.getElementsByClassName('btn btn-dark normal');
//  console.log(request_device);



