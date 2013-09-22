
var makeBoard = function(GRID_DIMENSION) { //call board 


var gridArray =[]



  

// counts the active neighbors of a specific cell
var getNeighborCount  = function(cellRow, cellColumn) 
{ //use foreach instead
    count=0;
    for ( var i=-1; i<= 1; i++) 
    {
        for ( var j=-1; j<= 1; j++)
        {
            if (!(i===0 && j===i) && isWithinBounds(cellRow+i, cellColumn+j) && gridArray[cellRow+i][cellColumn+j])
                count++;
        }
    }

    return count;
    console.log("Count is ", count);
}

// checks is a specific location is within borders
var isWithinBounds = function(cellRow, cellColumn) 
{
    return  ( (cellRow >= 1 && cellRow <= GRID_DIMENSION) && (cellColumn >= 1 && cellColumn <= GRID_DIMENSION) )
}

// sets current current State = Next State
var transition = function(gridArray, nextStateGridArray)
{
    for (var i=1; i<=GRID_DIMENSION; i++) 
    {
        for (var j=1; j<=GRID_DIMENSION; j++)
        {
                gridArray[i][j]=nextStateGridArray[i][j];
        }
    }
}


// computes the next state of the grid and stores it in nextStateGridArray
var buildNextState = function()
{
  var nextStateGridArray = [];
  for (var i=1;i<=GRID_DIMENSION;i++) 
  {
     nextStateGridArray[i] = [];
  }
    for (var i=1; i<=GRID_DIMENSION; i++) 
    {
        for (var j=1; j<=GRID_DIMENSION; j++)
        {
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




var propagate =function()
{

  //initializeGrid();
  //buildNextState(nextStateGridArray);
  transition(gridArray,buildNextState());
  
  drawNextState();

}

return {


            // creates and initializes empty grid 
            initializeGrid: function(rows, cols) 
            {
                 for (var r=1; r <= rows ; r++)
                 {  
                    gridArray[r] = [];
                    for (var c=1; c<=cols; c++)
                    {
                       gridArray[r][c]=false;
                    }
                 } 
            },

            isAlive: function(cellRow, cellCol)
            {
                return (gridArray[cellRow][cellCol] === true)
            },

            setCell: function(cellRow, cellCol, value)
            {
                gridArray[cellRow][cellCol] = true
            },

            startGame: function(grid_dimension) 
            {

                     callBackVariable = setInterval(function() {          
                     propagate();
                      
                    }, 2000);  

            },

            stopGame: function()
            {
                clearInterval(callBackVariable);
                document.getElementById("myGrid").remove();
            }

}


}






