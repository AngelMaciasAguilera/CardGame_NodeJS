import { uiDesk } from "./uiDesk.js";
import { uiHollows } from "./uiHollows.js";

uiDesk.init();

let type = prompt("Please specify the desk you want: english, spanish, etc.");
while(uiDesk.fillDesk(type) === false){
    type = prompt("We don't have the desk you specified, please try again");
}
uiDesk.generateDesk();

//Generamos los huecos(hollows) de las cartas
uiHollows.init();
uiHollows.fill(type);
uiHollows.generateHollows();



