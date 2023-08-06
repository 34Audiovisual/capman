class Items 
{
  constructor (name, bonus, comment)
  {
    this.name = name;
    this.bonus = bonus;
    this.comment = "";
  }
}

function selectItem(num)
{
  let i = new Items ('Vuoto', 0, "");
  
  switch (num)
    {
      case 0:
        i.name = "Vuoto";
        i.bonus = 0;
        i.comment = ""
      break;
      
      case 1:
        i.name = "Pozione Piccola";
        i.bonus = 5;
        i.comment = ""
      break;
      
      case 2:
        i.name = "Pozione Media";
        i.bonus = 10;
        i.comment = ""
      break;
      
      case 3:
        i.name = "Pozione Grande";
        i.bonus = 15;
        i.comment = ""
      break;
      
      case 4:
        i.name = "Pozione Magica";
        i.bonus = 20;
        i.comment = ""
      break;
      
      case 5:
        i.name = "Pozione Druidica";
        i.bonus = 25;
        i.comment = ""
      break;
      
      case 4:
        i.name = "Pozione Leggendaria";
        i.bonus = 50;
        i.comment = ""
      break;

      default:
        i.name = "Boccetta";
        i.bonus = 1;
        i.comment = ""
      break;
          
    } 
  
  return i;
}