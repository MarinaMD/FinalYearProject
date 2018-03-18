
var matrix = [];
var p = [];
var parentList =[];
var childList= [];
function makeMatrix(x){

    for(var i=0; i < x; i++) {
        matrix[i] = [];
       
        for(var j=0; j < x; j++) {
         
         matrix[i][j] = 0;
         
        }
    }
    //alert(matrix);
}

function makeP(x){
    p = new Array(x);
   for(var i=0; i < x; i++) {
       p[i]=0;
       for(var j=0; j < x; j++) {
          p[i]+= matrix[j][i];
       }
   }
}
function getP(x){
    var numbOfParents = p[x-1];
    return numbOfParents;
}
function getParentNames(x){
    var l = p.length;
    var parentName=[];
    if(getP(x) != 0){
        for(var i=0; i < l; i++) {
            for(var j=0; j < l; j++) {
                if(j == x-1 && matrix[i][j] == 1){
                    parentName.push(i+1);
                }
            }
        }
    }
    alert("Node " + x + "'s " + "parents are: "+ parentName);
    //getNames.apply(this, parentName);
    return parentName;
}

// function getNames(x){
//   var array = x;
//   var box = document.getElementById("parent");
//   for (var j = 1; j < array.length; j++) {
//       var name = array[j];
//       var cell = document.getElementById("node"+ name);
//       var label = cell.attr(".label/text");
//       var text = document.createTextNode(label);
//       box.appendChild(text);
//   }
// }

function addEdges(x,y){
    
    matrix[x-1][y-1] = 1;

}

function pushEdges(x,y){
    parentList.push(x);
    childList.push(y);
}

function getMatrix(counter){
    makeMatrix(counter);
    currentEdges(childList.length);

}

function alertStuff(){
    alert(matrix);
    alert(p);
}

function currentEdges(x){
    for(var i=0; i < x; i++) {
          var parent = parentList[i];
          var child = childList[i];
          addEdges(parent,child);
   }
}
function deleteLink(x,y){

var parentLength = parentList.length;
var childLength = childList.length;
for (var i = 0; i < parentLength; i++) {
    if (parentList[i] == x ){
        for (var j = 0; j < childLength; j++){
            if (childList[j] == y){
                parentList.remove(i);
                childList.remove(j);
            }
        }
    }
   
}
}