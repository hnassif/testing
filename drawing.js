// This module handles manipulating the DOM


//creates a clickableGrid , given the number of rows, col, and an instance of the game 
var clickableGrid = function(rows, cols, game )
{
    var i=0
    var grid = document.createElement('table');
    grid.className = 'grid';
    grid.id = 'myGrid';
    for (var r=1;r<=rows;++r)
    {
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=1;c<=cols;++c)
        {
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.innerValue = i;
            cell.addEventListener('click',(function(el,r,c,i)
            {
                return function()
                {
                	allClicked.push(i);
                    game.setCell(r,c,true);
                    el.className='clicked';
                }
            })(cell,r,c,i),false);
        }
    }
    document.body.appendChild(grid);

    
return {
            // Draws the current state of the game 
            drawNextState: function() 
            {
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
                        if (game.isAlive(r,c)) 
                            {
                                cell.className = 'clicked';
                                
                            }
                        else 
                            {
                                cell.className ="";
                                
                            }
                    }
                }
            }

        }


}




 


