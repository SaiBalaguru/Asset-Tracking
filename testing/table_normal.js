'use strict';
    var normal_requested_devices,columnNames=[];
    normal_requested_devices = [{
            User: "Peter",
            ID: 101,
            Device: "Mobile",
            
        },
        {
            User: "John",
            ID:102,
            Device: "Laptop",
           
        }
    ];
    

    function createElement(elementType) {
        return document.createElement(elementType);
    }

    function createHeaderRow() {
        var headerRow = createElement('tr');
        for (var i in normal_requested_devices[0]) {
            var column = createElement('td');
            column.innerHTML = i;
            headerRow.appendChild(column);
            columnNames.push(i);
        }
        console.log(headerRow);
        return headerRow;
    }

    function createDataRow(x) {
            var dataRow = createElement('tr');
            for(var columns=0;columns<columnNames.length;columns++){
                var dataColumn = createElement('td');
                dataColumn.innerHTML = normal_requested_devices[x][columnNames[columns]];
                dataRow.appendChild(dataColumn);
            }
            var tdForbutton = createElement('td');
            var button1 = createElement('button');
            var button2 = createElement('button');
            button1.className = 'btn btn-dark';
            button1.rowNumber = x;
            button1.innerHTML = "Approve";
            button1.width = 80;
            button1.height = 40;
            button2.className = 'btn btn-dark';
            button2.style.display = "inline";
            button2.rowNumber = x;
            button2.style.marginLeft = "5%";
            button2.style.marginTop = "2%";
            button2.innerHTML = "Reject";
            button2.width = 80;
            button2.height = 40;
            tdForbutton.appendChild(button1);
            tdForbutton.appendChild(button2);
            dataRow.appendChild(tdForbutton);
        
        console.log(dataRow);
        return dataRow;
    }


    function createTable(){
        var tbl = document.getElementById('normal_requested_devices');
        tbl.className = 'table table-bordered';
        tbl.style.width = "auto";
        tbl.appendChild(createHeaderRow());
        for(var x=0;x<normal_requested_devices.length;x++){
          tbl.appendChild(createDataRow(x));
        };
        var buttons = document.getElementsByClassName('btn');
        for(var r=0; r<buttons.length;r++){
            buttons[r].addEventListener('click',function(){
               // console.log(x['rowNumber']);
                console.log(this['rowNumber']);
                this.parentNode.parentNode.remove();
            })
        }
    }
    createTable();