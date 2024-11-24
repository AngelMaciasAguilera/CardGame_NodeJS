import { uiDesk } from "./uiDesk.js";
let card = document.getElementById('card');
let container = document.getElementById('card-desk');


uiDesk.init(card);
uiDesk.generateDesk(container);