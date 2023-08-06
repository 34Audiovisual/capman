function attackEnemy() {
  if (hpEnemy <= 0)
    return;
    
  flash();
  let valAttack = random(10);
  let damage = (round(valAttack) - defBonusPlayer);
  
  damage = damage < 0 ? 0 : damage;
  
  hpPlayer -= damage;
  
    if (damage == 0)
    {
      comment("Hai parato il colpo!", nameEnemy + " non è riuscito a colpirti!");
    }
    else
    {
      comment(nameEnemy + " ti ha colpito e ti ha tolto " + damage + " punti ferita!", defBonusPlayer == 0 ? "" : "Il colpo era da " + round(valAttack) + " ma hai assorbito "  + defBonusPlayer + " punti ferita perche eri in parata!");
    }
  defBonusPlayer = 0;
  showPlayerButton();

}