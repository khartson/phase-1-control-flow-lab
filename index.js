function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return("This one is on me!"); 
  } else if (feet > 2000 && feet <= 2500) {
    return("I will gladly take your thirty bucks."); 
  } else if (feet > 2500) {
    return("No can do.")
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let message; 
  city === "NYC" ? (message = "Ok, sounds good.") : (message = "No go.");
  return message; 
}

function switchOnCharmFromTip(generosity){
  // Write your code here!
  switch(generosity) {
    case "generous":
      return("Thank you so much.");
      break;
    case "not as generous":
      return("Thank you.");
      break;
    default:
      return("Bye."); 
  }
}