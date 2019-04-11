    var i;
    var card = `<div class="card">
     <img class="imgr" src="../shared/device01.jpg" alt="Avatar" style="width:100%; ">
    <div class="container">
      <h4>${localStorage.name}</h4>
      <p>${localStorage.brand}</p>
      <p>${localStorage.os}</p>
      <button type="button" class="btn btn-dark normal">
        Approve
      </button>
      <button type="button" class="btn btn-dark request"  > Decline</button>
      <div id="requested">
      </div>
      </div>
  </div>`;
    document.getElementById('normal_requested_devices').innerHTML += card;
  // var req = document.getElementById('btn btn-dark request');
  // req.onclick = function(){
  //   localStorage.setItem("device_name",device.name);
  //   localStorage.setItem("device_id",device.id);
  //   localStorage.setItem("device_img",device.img);
  // }
  i++;
  



