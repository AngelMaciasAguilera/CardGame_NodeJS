import { uiDesk } from "./uiDesk.js";


uiDesk.init();

let type = prompt("Please specify the desk you want: english, spanish, etc.");
while(uiDesk.fillDesk(type) === false){
    type = prompt("We don't have the desk you specified, please try again");
}


treboles.addEventListener("dragover", (event) => {
    event.preventDefault();
});


treboles.addEventListener("drop", (event) => {
    event.preventDefault();  // Evitar el comportamiento por defecto

    const data = JSON.parse(event.dataTransfer.getData("text"));
    console.log(data);

    const draggedElement = document.getElementById(data.id);

    // Movemos el elemento dentro del contenedor sin cambiar su posición
    if (!event.target.contains(draggedElement)) {
        event.target.appendChild(draggedElement);
    }
});

uiDesk.generateDesk();
