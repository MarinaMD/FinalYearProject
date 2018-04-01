

// function generate_table(x) {
//   // get the reference for the body
//   var body = document.getElementById("myTable");
 
//   // creates a <table> element and a <tbody> element
//   var tbl = document.createElement("table");
//   var tblBody = document.createElement("tbody");
 
// //calculation for getting correct number of rows and collumns from number of parents
//     var r = Math.pow(2, x)+1;
//     var c = 2+x;
   
//   // creating all cells
//   for (var i = 1; i <= r; i++) {
//     // creates a table row
//     var row = document.createElement("tr");
  
      
//     for (var j = 1; j <= c; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row, these are the collumns
//       if(x > 0 && i == 1 && j <= x){
        
//         var parentState = document.createElement("td");
//         parentState.setAttribute("id", "parent");
//         var parentText = document.createTextNode("Parent "+ j);
        
//         parentState.appendChild(parentText);
//         row.appendChild(parentState);
       
//       }
//       else if(i == 1 ){
//         var state = document.createElement("td");
//         var stateText = document.createTextNode("State "+ j);
//         state.contentEditable = "true";
//         state.appendChild(stateText);
//         row.appendChild(state);
//       }
//       else{
//           var cell = document.createElement("td");
//           var cellText = document.createTextNode(0.5);
//           cell.contentEditable = "true";
//           cell.appendChild(cellText);
//           row.appendChild(cell);
//       }
//     }
 
//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }
 
//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute("border", "3");
// }


function generate_table(label,x) {
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
      if(x > 0 && i == 1 && j <= x){
        
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
      else if(i != 1 && j <= x){
       
        var pstate = document.createElement("td");
        var pstateText = document.createTextNode("State "+ j);
        pstate.contentEditable = "true";
        pstate.appendChild(pstateText);
        row.appendChild(pstate);
        
      }
      else if(nodeProb(label) == true){
        //getValues() checks node then adds values inside
          var label = label;

          var nmb = prob[j];
          
          var mycell = document.createElement("td");
          var cellText = document.createTextNode(nmb);
          mycell.contentEditable = "true";
          mycell.appendChild(cellText);
          row.appendChild(mycell);
            
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

var id = [];
var colm = [];
var rows = [];
var prob= [];
var arr = new Array();
arr[0] = new Array();
arr[0][0] = new Array()
arr[0][0][0] = 0.5;

//gets the values from the cells and pust them in arrays
function setCell(label,x){
  
  var r = Math.pow(2, x)+1;
  var c = 2+x;
  
  for(var i=1; i < r; i++){
    for (var j = x; j < c; j++){
     
      var table = document.getElementsByTagName('body')[0];
  
      var tbl = table.getElementsByTagName("table")[0];
    
      var tbody = tbl.getElementsByTagName("tbody")[0];

      var myrow = tbody.getElementsByTagName('tr')[i];
    
      var mycell = myrow.getElementsByTagName("td")[j];
      
      
      var mycelltext = mycell.childNodes[0];
      var currentText = document.createTextNode(mycelltext.data);
     
      //arr[label-1][i][j] = mycelltext.data;
      id.push(label);
      colm.push(j);
      rows.push(r);
      prob.push(mycelltext.data);
    
      table.appendChild(currentText);
     
    }
  }
}

function getCell(label){

 
  var label = label;
  for(var i=0; i < id.length; i++){
    
    if(id[i] == label){
     
       var c = colm[i];
       var r = rows[i];
       
       var nmb = prob[i];
       alert(nmb);
    }
   
  }

}

function addId(id,arr) {
          arr.push({
              "id": id
          });
      }
      
function addProb(prob, arr){
    arr.push({
      "prob": [prob]
    });
  }
 
function nodeProb(label){
  var label = label;
  for(var i=0; i <= id.length; i++){
    
    if(id[i] == label){
      
      return true; 
    }
  }
}

