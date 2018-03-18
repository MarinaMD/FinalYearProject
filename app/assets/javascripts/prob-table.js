

function generate_table(x) {
  // get the reference for the body
  var body = document.getElementById("myTable");
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
 //calculation for getting correct number of rows and collumns from number of parents
    var r = Math.pow(2, x)+1;
    var c = 2+x;
   
  // creating all cells
  for (var i = 1; i <= r; i++) {
    // creates a table row
    var row = document.createElement("tr");
  
      
    for (var j = 1; j <= c; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row, these are the collumns
      if(x>0 && i == 1 && j <= x){
        
        var parentState = document.createElement("td");
        parentState.setAttribute("id", "parent");
        var parentText = document.createTextNode("Parent "+ j);
        
        parentState.appendChild(parentText);
        row.appendChild(parentState);
       
      }
      else if(i == 1 ){
        var state = document.createElement("td");
        var stateText = document.createTextNode("State "+ j);
        state.contentEditable = "true";
        state.appendChild(stateText);
        row.appendChild(state);
      }
      else{
          var cell = document.createElement("td");
          var cellText = document.createTextNode(0.5);
          cell.contentEditable = "true";
          cell.appendChild(cellText);
          row.appendChild(cell);
      }
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "3");
}

