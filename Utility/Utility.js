function flash() 
{
  stop = true;
  background( 'white');
  sleep(100).then (function() {
    background( backCol);
    stop = false;
  })
  
}

function comment(c1, c2) 
{
  comment1 = c1;
  comment2 = c2;
}

function clearComment() 
{
  comment1 = "";
  comment2 = "";
}

function passTurn() 
{
    attackEnemy() ;
  
}