function generate_table(label,x) {
  // get the reference for the body
  var body = document.getElementById("myTable");
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
 //calculation for getting the correct number of rows and collumns from the number of parents
 //x being the number of parents the current node has
  var r = Math.pow(2, x)+1;
  var c = 2+x;
   
  // creating all cells
  for (var i = 1; i <= r; i++) {
    // creates a table row
    var row = document.createElement("tr");
  
    for (var j = 1; j <= c; j++) {
      // Creates a <td> element and a text node
      // the node contents of the <td> will either be the parent name, the state name
      // or the probability value
      // It puts the <td> at the end of the table row, making collumns
      if(x > 0 && i == 1 && j <= x){
        
        var parentState = document.createElement("td");
        parentState.setAttribute("id", "parent");
        var parentText = document.createTextNode("Node "+ j);
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
          var cellText = document.createTextNode(0.5);
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
 
    // adds the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // puts the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "3");
}

//arrays that hold the ids of the nodes whose tables were generated
//and an array of the probabilities that these tables held
var id = [];
var prob= [];
var arr = new Array();

//gets the values from the cells and pushes them into their respective arrays
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
     
      id.push(label);
      prob.push(mycelltext.data);
    }
  }
}
//function for checking if the node clicked already had a table generated,
//by going through the id array
//if so, then it will next go through the prob array and find the values of the table
//add them to a new array and return that array
function getCell(label){

  var label = label;
  var arr ="";
  for(var i=0; i < id.length; i++){
    
    if(id[i] == label){
       
       var nmb = prob[i];
       arr.add(nmb + " ");
    }
   
  }
  return arr;
}

//goes through the id array and checks if the node already had a table generated
//if so, then it returns true and when this function gets called in generate_table,
//it will no longer generate a table with default probability values
function nodeProb(label){
  var label = label;
  for(var i=0; i <= id.length; i++){
    
    if(id[i] == label){
      
      return true; 
    }
  }
}

