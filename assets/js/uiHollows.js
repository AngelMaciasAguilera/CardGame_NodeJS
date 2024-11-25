import { hollowsStructure } from "./hollowsStructure.js";
import { cardsStructure } from "./cardsStructure.js";
export const uiHollows = {

    hollows: [],
    hollowSchema: {},
    init: ()=>{
        uiHollows.hollowSchema = document.createElement(hollowsStructure.mainElement);
        uiHollows.hollowSchema.appendChild(document.createElement(hollowsStructure.titleTag));
        hollowsStructure.classes.forEach(classelement => {
            uiHollows.hollowSchema.classList.add(classelement);    
        })
    },

    fill: (typeInserted)=>{
        if(cardsStructure.clubs.hasOwnProperty(typeInserted)){
            //Recorro el array de tipos de  cartas de mi JSON 
            cardsStructure.clubs[typeInserted].forEach(item => {
                //Genero los 4 huecos con sus respectivos nombres y especificaciones
                let hollowClone = uiHollows.hollowSchema.cloneNode(true);
                hollowClone.children[0].textContent = item;
                hollowClone.id = item;
                hollowClone.addEventListener("dragover", (event) => {
                    event.preventDefault();
                });

                hollowClone.addEventListener("drop", (event) => {
                    event.preventDefault();  // Evitar el comportamiento por defecto
                
                    const data = JSON.parse(event.dataTransfer.getData("text"));
                    console.log(data);
                
                    const draggedElement = document.getElementById(data.id);
                
                    // Movemos el elemento dentro del contenedor sin cambiar su posición
                    if (!event.target.contains(draggedElement)) {
                        event.target.appendChild(draggedElement);
                    }
                });
                uiHollows.hollows.push(hollowClone);
            });

        }
    },

    generateHollows: (parent)=>{
        let parentElement = document.getElementById(parent);
        uiHollows.hollows.forEach(hollow => {
            parentElement.appendChild(hollow);
        });
    }



}