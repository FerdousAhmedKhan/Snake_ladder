 var player = [0,0];
 var cell = 0;
 while(cell < 25)
 {  for(var i=0; i<2; i++)
  { var dice = (Math.floor(Math.random()*6)+1);
   document.write("Player " + (i+1) + "  rolls =>>> Dice: " + dice + ", ");
   player[i] = player[i] + dice;
   if(player[i]==15)
   {
    player[i] = 5;
    document.write("Opps!!!, You are in snake cell. go back to position 5" + "<br>");
    }
    else if(player[i]==23)
    {
      player[i] = 16;
      document.write("Opps!!!, You are in snake cell. go back to position 16" + "<br>");
      }
    else if(player[i]==8)
       {
        player[i] = 15;
         document.write("Congrats!!! You stumble on a ladder, advance to position 12" + "<br>");
              }
    else if(player[i]==19)
              {
     player[i] = 24;
     document.write("You stumble on a ladder, advance to position 20" + "<br>");
              }
     else {
     document.write("Move to position " + player[i] + "<br>");
            }
     if(player[i] > 24)
        {   
        document.write("<br><br>Yahoo!!!!!!Player " + (i+1) + " passes the finishing cell. Player " + (i+1) + "won the games!!!" + "<br>");
         break;
              }
        }
        document.write("<br>");

        if (player[0] > player[1])
        {
          cell = player[0];
        }
        else {
          cell = player[1]
        }

      }document.write("Thank you for palying .." + "<br>");