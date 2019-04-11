var det = devicedata.map(x => x.details);
var i=0;
devicedata.forEach(function (device, index) {
    var card = `<div class="card">
    <img class="imgr" src="${device.img}" alt="Avatar" style="width:100%; margin-left:25%; ">
    <div class="container">
      <h4>${device.name}</h4>
      <p>${device.brand}</p>
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter${index}">
        Details
      </button>
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#add_new_device">
        Edit
      </button>
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="">
        Delete
      </button>
      
    </div>
  </div>
  <div class="modal" id="exampleModalCenter${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle"><h5 id="devicename">${device.name}</h5></h5>
          <h5 id="deviceid">${device.id}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ${det[i]}
        </div>
        <div class="modal-footer">
        
          <button type="button" class="btn btn-dark request" data-dismiss="modal">Request</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
    document.getElementById('row1').innerHTML += card;

  i++;

  }
)


