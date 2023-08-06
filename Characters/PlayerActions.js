

let namePlayer,hpPlayer, LivPlayer, maxhp, weaponPlayer, shieldPlayer, defBonusPlayer, itemToTake; 
let itemsPlayer = [4];

function initPlayer(name, hp) 
{
  
  namePlayer = name;
  hpPlayer = hp;
  livPlayer = 0;
  defBonusPlayer = 0;
  weaponPlayer = selecWeapon(5);
  shieldPlayer = selectShield(0);
  
  for ( i = 0; i < 4; ++i)
  {
     itemsPlayer[i] = selectItem(0); 
  }
  itemToTake = 0;
}


function attackPlayer() 
{
  clearComment();
  flash();
  
  let valAttack = random(weaponPlayer.bonus);
  hpEnemy -= round(valAttack);
  hidePlayerButton ();
  
  if (hpEnemy <= 0)
  {
    hidePlayerButton ();
    itemToTake = round(random(10));
    let item = selectItem(itemToTake);
    
    comment("HAI VINTO! "+ nameEnemy + " è morto!", nameEnemy + " ha lasciato una "+ item.name);
    
    takeButton.show();
    nextButton.show();
    
  }
  else
  {
    hidePlayerButton ();
    
    if (round(valAttack) == 0)
    {
      comment("Non sei riuscito a colpire "+ nameEnemy + "!", "");
    }
    else
    {
      comment("Hai colpito "+ nameEnemy + "!", "Gli hai tolto " + round(valAttack) + " punti ferita!");
    }
    
    goButton.show();
    
  }

}

function defensePlayer ()
{
  defBonusPlayer = shieldPlayer.bonus;
  hidePlayerButton ();
  comment ("Ti sei messo in parata!", "Puoi assorbire " + defBonusPlayer + " punti ferita!");
  goButton.show();
}

function runPlayer ()
{
  let runProb = round(random(10));
  hidePlayerButton ();
  
  if (runProb > runMalusEnemy)
  {
      comment ("Sei riuscito a sfuggire a " + nameEnemy + "!", "");
    nextButton.show();
  }
  else
  {
      comment (nameEnemy + " ha bloccato la tua fuga!", ""); 
      goButton.show();    
  }
}

function manageItemsPlayer(mode)
{
  if (mode == "take")
    hidePlayerButton ();
  else if (mode == "drop")
    takeButton.hide();
  
  let itemButton1 = createButton(itemsPlayer[0].name);
  itemButton1.position(10, 200);
  itemButton1.mousePressed(function() {useAction(0)});
  
  let itemButton2 = createButton(itemsPlayer[1].name);
  itemButton2.position(150, 200);
  itemButton2.mousePressed(function() {useAction(1)});
  
  let itemButton3 = createButton(itemsPlayer[2].name);
  itemButton3.position(10, 220);
  itemButton3.mousePressed(function() {useAction(2)});
  
  let itemButton4 = createButton(itemsPlayer[3].name);
  itemButton4.position(150, 220);
  itemButton4.mousePressed(function() {useAction(3)});
  
  let cancelButton = createButton('Cancel');
  cancelButton.position(10, 240);
  cancelButton.mousePressed(function() {useAction(5)});
  
  function useAction(num)
  {
    if (num == 5)
    {
      hideItemsButtons();

      if (mode == "take")
        showPlayerButton();
      else if (mode == "drop")
      {
        let item = selectItem(itemToTake);
        comment("", nameEnemy + " ha lasciato una "+ item.name);
        takeButton.show();
      }

      return;
    }

    if (itemsPlayer[num].name == "Vuoto")
      return;
      
    hideItemsButtons();
    if (mode == "take")
    {
      hpPlayer += itemsPlayer[num].bonus;
      hpPlayer = hpPlayer > maxhp ? maxhp : hpPlayer;
      itemsPlayer[num] = selectItem(0);

      goButton.show();  
    }
    else if (mode == "drop")  
    { 
      itemsPlayer[num] = selectItem(0);

      let item = selectItem(itemToTake);
      comment("", nameEnemy + " ha lasciato una "+ item.name);
      takeButton.show(); 
    }
  }
  
  function hideItemsButtons()
  {
    itemButton1.remove();
    itemButton2.remove();
    itemButton3.remove();
    itemButton4.remove();
    cancelButton.remove();
  }
}

function takeItem()
{
  takeButton.hide();
  let foundSocket = false;

  for ( i = 0; i < 4; ++i)
  {
    if (itemsPlayer[i].name == "Vuoto" && !foundSocket)
    {
      itemsPlayer[i] = selectItem(itemToTake); 
      foundSocket = true;
    }
  }

  if (foundSocket)
  {
    comment("Hai preso la " + selectItem(itemToTake).name,"");
    itemToTake = 0;
  }
  else
  {
    comment("Non hai piu spazio!" ,"Scegli cosa lasciare!");
    manageItemsPlayer("drop");
  }

}
