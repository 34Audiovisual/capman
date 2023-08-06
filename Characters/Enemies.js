let nameEnemy,hpEnemy, runMalusEnemy; 

let enemies = [];
let numCurrentEnemy;

function nextEnemy ()
{
  clearComment();
  takeButton.hide();
  
  if (numCurrentEnemy  > enemies.lenght - 1)
  {
    return;
  }
  else 
  {
    numCurrentEnemy += 1;
  
    hpPlayer += 5;
    hpPlayer = hpPlayer >= maxhp ? maxhp : hpPlayer;

    //background(backCol);
    showPlayerButton();
    initEnemy(numCurrentEnemy);
  }
}

function initEnemy( num) {
  
  switch (num)
    {
      case 0:
        nameEnemy = "Imbecille";
        hpEnemy = 1;
        runMalusEnemy = 1;
      break;
      
      case 1:
        nameEnemy = "Scarsissimo";
        hpEnemy = 5;
        runMalusEnemy = 2;
      break;
      
      case 2:
        nameEnemy = "Scarso";
        hpEnemy = 10;
        runMalusEnemy = 3;
      break;
      
      case 3:
        nameEnemy = "Medio";
        hpEnemy = 15;
        runMalusEnemy = 4;
      break;
      
      case 4:
        nameEnemy = "Forte";
        hpEnemy = 20;
        runMalusEnemy = 5;
      break;
      
      case 5:
        nameEnemy = "Fortissimo";
        hpEnemy = 25;
        runMalusEnemy = 6;
      break;
      
      case 6:
        nameEnemy = "BOSS";
        hpEnemy = 30;
        runMalusEnemy = 10;
      break;
      
      
    } 
  
}