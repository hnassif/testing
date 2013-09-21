// creates clickable grid      
var clickableGrid = function(rows, cols ){
    var i=0
    var grid = document.createElement('table');
    initializeGrid(rows, cols);
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
                	//gridArray[r][c]=true;
                    setCell(r,c,true);
                    el.className='clicked';
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}



var drawNextState = function() {
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
            if (isAlive(r,c)) 
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
