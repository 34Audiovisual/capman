class Weapons 
{
  constructor (name, bonus)
  {
    this.name = name;
    this.bonus = bonus;
  }
}

function selecWeapon(num)
{
  let w = new Weapons ('init', 0);
  
  switch (num)
    {
      case 0:
        w.name = "Mani Nude";
        w.bonus = 1;
      break;
      
      case 1:
        w.name = "Bastone";
        w.bonus = 5;
      break;
      
      case 2:
        w.name = "Spada di ferro";
        w.bonus = 8;
      break;
      
      case 3:
        w.name = "Mazza di ferro";
        w.bonus = 10;
      break;
      
      case 4:
        w.name = "Spada di acciaio";
        w.bonus = 12;
      break;
      
      case 5:
        w.name = "Ascia di acciaio";
        w.bonus = 15;
      break;
      
      case 6:
        w.name = "Spadone a due mani";
        w.bonus = 18;
      break;
          
    } 
  
  return w;
}