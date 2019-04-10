
for (var i = 0; i < 3; i++) {
    var card1 = `<div class="card">
        <img class="imgr" src=${devicedata[i].img} alt="Avatar" style="width:100%; ">
        <div class="container">
          <h4>${devicedata[i].name}</h4>
          <p>${devicedata[i].brand}</p>
          <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">
            Extend
          </button>
          <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter1">
            Return
          </button>
          <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter4">
            Lost
          </button>
        </div>
      </div>`;
      document.getElementById("currently_allocated_devices").innerHTML += card1;
}

    for(var i=4; i<6; i++){
      var card2 = ` <div class="card">
      <img class="imgr" src=${devicedata[i].img} alt="Avatar" style="width:100%; ">
      <div class="container">
        <h4>${devicedata[i].name}</h4>
        <p>${devicedata[i].brand}</p>
        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter1">
          Cancel request
        </button>
      </div>
    </div>`;
    document.getElementById("currently_requested_devices").innerHTML += card2;
    
    
}


