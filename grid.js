// creates and initializes empty grid 
var initializeGrid = function(rows, cols) {
var gridArray =[]
 for (var i=1;i<=GRID_DIMENSION;i++) {
     gridArray[i] = [];
  }
 for (var r=1; r <= rows ; ++r){
    for (var c=1; c<=cols; c++){
       gridArray[r][c]=false;
    }
 } 

  return gridArray;
}


// creates clickable grid      
var clickableGrid = function(rows, cols ){
    var i=0
    var grid = document.createElement('table');
    gridArray = initializeGrid(rows, cols);
    grid.className = 'grid';
    grid.id = 'myGrid';
    for (var r=1;r<=rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=1;c<=cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.innerValue = i;
            //gridArray[r][c]=false; // remove 
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                	allClicked.push(i);
                	gridArray[r][c]=true;
                    el.className='clicked';
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

// counts the active neighbors of a specific cell
var getNeighborCount  = function(cellRow, cellColumn) { //use foreach instead
    count=0;
    for ( var i=-1; i<= 1; i++) {
        for ( var j=-1; j<= 1; j++){
            if (!(i===0 && j===i) && isWithinBounds(cellRow+i, cellColumn+j) && gridArray[cellRow+i][cellColumn+j])
                count++;
        }
    }

    return count;
    console.log("Count is ", count);
}

// checks is a specific location is within borders
var isWithinBounds = function(cellRow, cellColumn) {
    return  ( (cellRow >= 1 && cellRow <= GRID_DIMENSION) && (cellColumn >= 1 && cellColumn <= GRID_DIMENSION) )
}

// sets current current State = Next State
var transition = function(gridArray, nextStateGridArray){
    for (var i=1; i<=GRID_DIMENSION; i++) {
        for (var j=1; j<=GRID_DIMENSION; j++){
                gridArray[i][j]=nextStateGridArray[i][j];
        }
    }
}


// computes the next state of the grid and stores it in nextStateGridArray
var buildNextState = function(nextStateGridArray){

    for (var i=1; i<=GRID_DIMENSION; i++) {
        for (var j=1; j<=GRID_DIMENSION; j++){
            if (( (getNeighborCount(i, j) === 3) || (getNeighborCount(i, j) === 2)) && gridArray[i][j] === true )
                { 
                    nextStateGridArray[i][j]=true; 
                }
            else if (( getNeighborCount(i, j) === 3 ) && gridArray[i][j]===false )
                { 
                    nextStateGridArray[i][j]=true; 
                    console.log(getNeighborCount(i, j));
                }
            else 
                { 
                    nextStateGridArray[i][j]=false; 
                }
        }
    }

return nextStateGridArray;

}


var propagate =function(){

  nextStateGridArray = initializeGrid();
  buildNextState(nextStateGridArray);
  transition(gridArray,nextStateGridArray);
  
   var i =0;
   grid = document.getElementById('myGrid');
    for (var r=1;r<=GRID_DIMENSION;r++)
    {
        var tr = grid.rows[r-1];
        for (var c=1;c<=GRID_DIMENSION;c++)
        {
            var cell = tr.cells[c-1];
            cell.innerHTML = ++i;
            cell.innerValue = i;
            cell.className ="";
            if (gridArray[r][c]) 
                {
                    cell.className = 'clicked';
                    //console.log("added click class")}
                }
            else 
                {
                    cell.className ="";
                    //console.log("did not add click class")}
                }
        }
    }
     //setInterval(propagate(),2000);
     //propagate();
}

var startGame = function(grid_dimension) {

         callBackVariable = setInterval(function() {          
         propagate();
          
        }, 2000);  
}