for(var i=0; i<3; i++){
    var card = `<div id="card">
    <img class="imgr" src="${devicedata[i].img}" alt="Avatar" style="width:100%; ">
    <div class="container">
      <h4>${devicedata[i].name}</h4>
      <p>${devicedata[i].brand}</p>
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">
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
  <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">${devicedata[i].name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ${devicedata[i].details}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-dismiss="modal">Request</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById('row1').innerHTML += card;

}

for(var i=3; i<6; i++){
    var card2 = `<div id="card">
    <img class="imgr" src="${devicedata[i].img}" alt="Avatar" style="width:100%; ">
    <div class="container">
      <h4>${devicedata[i].name}</h4>
      <p>${devicedata[i].brand}</p>
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">
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
  <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">${devicedata[i].name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ${devicedata[i].details}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-dismiss="modal">Request</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
  document.getElementById('row1').innerHTML += card2;
}