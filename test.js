
test( "Test of Basic Grid Methods ", function() {
      var testGame = makeBoard(GRID_DIMENSION);
      testGame.initializeGrid();
  ok(testGame.isAlive(1,1) === false, " test getCell()" );
  //ok( grid.getColumns().length() === 10, " test getColumns().length() " );
  //ok( grid.getRows().length() === 10, "test grid.getRows().length()" );
});


/*
  test( "Test of Basic Grid Methods ", function() {
      var grid = Grid(10, 10);
      grid.setCell(1,0,true);
  ok( grid.getCell(1,0) === true, " test getCell()" );
  ok( grid.getColumns().length() === 10, " test getColumns().length() " );
  ok( grid.getRows().length() === 10, "test grid.getRows().length()" );
});

// testing of Game progression 
  test( "Test of Game Progression ", function() {
      var grid = Grid(10, 10);
      grid.setCell(1,0,true);
      grid.setCell(0,1,true);
      grid.setCell(0,0,true);
      grid.iterate();
  ok( grid.getCell(1,0) === true, "(1,0) in the second state" );
  ok( grid.getCell(0,0) === true, "(0,0) in the second state" );
  ok( grid.getCell(0,1) === true, "(0,1) in the second state" );
  ok( grid.getCell(1,1) === true, "(1,1) in the second state" );
  grid.iterate();
  ok( grid.getCell(1,0) === true, "(1,0) in the third state" );
  ok( grid.getCell(0,0) === true, "(0,0) in the third state" );
  ok( grid.getCell(0,1) === true, "(0,1) in the third state" );
  ok( grid.getCell(1,1) === true, "(1,1) in the third state" );
  });

// testing of countNeighbors method
    test( "Test of Neighbors Count ", function() {
      var grid = Grid(10, 10);
      grid.setCell(5,5,true);
      grid.setCell(4,5,true);
      grid.setCell(6,5,true);
      grid.setCell(5,4,true);
      grid.setCell(5,6,true);
    
  ok( grid.countNeighbors(5,5) === 4, "(5,5) Neighbors" );
   ok( grid.countNeighbors(4,5) === 3, "(4,5) Neighbors" );
    ok( grid.countNeighbors(5,4) === 3, "(5,4) Neighbors" );
     ok( grid.countNeighbors(6,5) === 3, "(6,5) Neighbors" );
      ok( grid.countNeighbors(5,6) === 3, "(5,6) Neighbors" );

  });
  */