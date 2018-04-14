
var matrix = [];
var p = [];
var parentList =[];
var childList= [];

//For loop that creates an x by x matrix. All the values inside are 0.
function makeMatrix(x){

    for(var i=0; i < x; i++) {
        matrix[i] = [];
       
        for(var j=0; j < x; j++) {
         
         matrix[i][j] = 0;
         
        }
    }
}
//Creates an array P that has length x. It has a for loop that goes initializes 
//all the array values to 0 and then goes through all the values of the matrix,
//and initializes each value in the array to the sum of each column of the matrix
function makeP(x){
    p = new Array(x);
   for(var i=0; i < x; i++) {
       p[i]=0;
       for(var j=0; j < x; j++) {
          p[i]+= matrix[j][i];
       }
   }
}
//getP takes in the id of a node, finds and returns the number of parents it has
function getP(x){
    var numbOfParents = p[x-1];
    return numbOfParents;
}

//It creates an array parentName.
//In the if statement is uses getP to check if the number of parents for node x
//is more than 0. If yes then, through a for loop, it finds the column in the
// matrix that represents the current node, looks if the value in the matrix is $1$
//and if yes, it pushes the number of the row it found the value in to the array parentName
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
    return parentName;
}

//Adds the value 1 to the matrix
//the position x, y represents the parent and child ids
function addEdges(x,y){
    
    matrix[x-1][y-1] = 1;

}
//pushes the parent and child ids (x, y) to their respective arrays
function pushEdges(x,y){
    
    parentList.push(x);
    childList.push(y);
}

//It goes through the parentList and childList arrays and adds them to the function
//addEdges.
function currentEdges(x){
    
    for(var i=0; i < x; i++) {
        var parent = parentList[i];
        var child = childList[i];
        addEdges(parent,child);
   }
}

//counter is the number of parents on the graph
//it updates the matrix by recreating the correctly sized matrix through makeMatrix(counter)
//and adds the correct values through currentEdges(childlist.lenght).
function getMatrix(counter){
    
    makeMatrix(counter);
    currentEdges(childList.length);

}

