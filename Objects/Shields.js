class Shields 
{
  constructor (name, bonus)
  {
    this.name = name;
    this.bonus = bonus;
  }
}

function selectShield(num)
{
  let s = new Shields ('init', 0);
  
  switch (num)
    {
      case 0:
        s.name = "Mani Nude";
        s.bonus = 1;
      break;
      
      case 1:
        s.name = "Scudo di cuoio";
        s.bonus = 5;
      break;
      
      case 2:
        s.name = "Scudo di latta";
        s.bonus = 8;
      break;
      
      case 3:
        s.name = "Scudo di legno";
        s.bonus = 10;
      break;
      
      case 4:
        s.name = "Scudo di ferro";
        s.bonus = 12;
      break;
      
      case 5:
        s.name = "Scudo di acciaio";
        s.bonus = 15;
      break;
      
      case 6:
        s.name = "Armatura";
        s.bonus = 18;
      break;
          
    } 
  
  return s;
}