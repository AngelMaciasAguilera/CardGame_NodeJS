import { hollowsStructure } from "./hollowsStructure.js";
import { cardsStructure } from "./cardsStructure.js";
import { hollowMainContainerStructure } from "./hollowMainContainerStructure.js";
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
                hollowClone.dataset.club = item;
                hollowClone.addEventListener("dragover", (event) => {
                    event.preventDefault();
                });

                hollowClone.addEventListener("drop", (event) => {
                    event.preventDefault();  // Evitar el comportamiento por defecto
                
                    const data = JSON.parse(event.dataTransfer.getData("text"));
                
                    const draggedElement = document.getElementById(data.id);
                
                    // Movemos el elemento dentro del contenedor sin cambiar su posición
                    if (!event.target.contains(draggedElement) && data.club === event.target.dataset.club) {
                        console.log(data);
                        event.target.appendChild(draggedElement);
                    }
                });
                uiHollows.hollows.push(hollowClone);
            });

        }
    },

    generateHollows: ()=>{
        let hollowMainContainer = document.createElement(hollowMainContainerStructure.mainContainerElement);
        console.log(hollowMainContainer);
        hollowMainContainerStructure.classes.forEach(classelement => {
            hollowMainContainer.classList.add(classelement);
        });
        hollowMainContainer.setAttribute('id', hollowMainContainerStructure.id);
        uiHollows.hollows.forEach(hollow => {
            hollowMainContainer.appendChild(hollow);
        });
        document.body.appendChild(hollowMainContainer);
    }



}