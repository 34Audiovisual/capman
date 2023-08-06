let backCol;
let hitButtonPlayer, defButtonPlayer, runButtonPlayer, itemButtonPlayer;
let goButton;
let nextButton;
let takeButton;

let comment1, comment2;

let stop;
let vib = 0, vibTime = 50;

function setup() {
	new Canvas(500, 500);
    backCol = 'grey'
    background(backCol);
  enemies.lenght = 6;
  
  stop = false;
  
  comment1 = "";
  comment2 = "";  
  
  //Hit Button Player
  hitButtonPlayer = createButton('Attacca!');
  hitButtonPlayer.position(10, 200);
  hitButtonPlayer.mousePressed(attackPlayer);
  
    //Def Button Player
  defButtonPlayer = createButton('Difesa');
  defButtonPlayer.position(80, 200);
  defButtonPlayer.mousePressed(defensePlayer);
  
    //Run Button Player
  runButtonPlayer = createButton('Scappa');
  runButtonPlayer.position(10, 220);
  runButtonPlayer.mousePressed(runPlayer);
  
    //Item Button Player
  itemButtonPlayer = createButton('Usa Oggetto');
  itemButtonPlayer.position(80, 220);
  itemButtonPlayer.mousePressed(function() {manageItemsPlayer("take")});

  //framePlayer = rect(30, 20, 55, 55, 20);
  
      //Turn Button
  goButton = createButton('Turno nemico');
  goButton.position(10, 200);
  goButton.mousePressed(passTurn);
  goButton.hide();
  
        //Next Button
  nextButton = createButton('Prossimo nemico');
  nextButton.position(310, 220);
  nextButton.mousePressed(nextEnemy);
  nextButton.hide();

    //Tale Button
  takeButton = createButton('Prendi');
  takeButton.position(300, 300);
  takeButton.mousePressed(takeItem);
  takeButton.hide();
  
  maxhp = 200;
  initPlayer("Giocatore", maxhp);
  numCurrentEnemy = 0;
  initEnemy(numCurrentEnemy);
  
  
}

function draw() 
{
  //clear();
  if (stop) 
    return;
  background(backCol);
  drawFrame(5, 100, 200, 80); //frame Player
  drawFrame(290, 100, 200, 80); // frame Enemy
  drawFrame(5, 270, 480, 100); // frame Comment

  fill (0);
  textSize(15);
  text("CAPMAN ADVENTURE \n   Javascript Edition", 160 ,35);
  text("PLAYER", 70 ,95);
  text("ENEMY", 355 ,95);
  
  fill (255);
  textSize(12);
    //Player
  text("NOME: " + namePlayer, 10,115);
  text("HP: " + hpPlayer, 10,130);
  text("LIV: " + livPlayer, 10,145);
  text("ATTACCO: " + weaponPlayer.name + " (+"+ weaponPlayer.bonus +")", 10,160);
  text("DIFESA: " + shieldPlayer.name + " (- "+ shieldPlayer.bonus +")", 10,175);
  
  //Enemy
  text("NOME: " + nameEnemy, 295,115);
  text("HP: " + hpEnemy, 295,130);
  //text("LIV: " + livPlayer, 10,45);
  
    //Comments
  text(comment1, 50, 300);
  text(comment2, 50, 315);
  //text("LIV: " + livPlayer, 10,45);
  
  if (hpPlayer <= 0)
  {
    hidePlayerButton ();
    text("Hai perso, "+namePlayer + " è morto!", 150, 400);
  }


}

function drawFrame(x ,y, w, h)
{
  let frameX = 0, frameY = 0;
  frameX = random (-10,10) * vib/vibTime;
  frameY = random (-10,10) * vib/vibTime;

  if (vib > 0)
  {
    vib -= 1;
  }
  fill(100);
  rect(x + frameX, y + frameY, w, h, 10);
}

function hidePlayerButton ()
{
  hitButtonPlayer.hide();
  defButtonPlayer.hide();
  runButtonPlayer.hide();
  itemButtonPlayer.hide();
  //goButton.show();
  
}

function showPlayerButton ()
{
  goButton.hide();
  nextButton.hide();
  hitButtonPlayer.show();
  defButtonPlayer.show();
  runButtonPlayer.show();
  itemButtonPlayer.show();
  
}



