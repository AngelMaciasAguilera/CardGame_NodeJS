import {cardsStructure} from './cardsStructure.js';
import { containersStructure } from './containersStructure.js';
export const uiDesk = {
    desk: [],
    cardSchema: {},
    type: '',
    init: ()=>{
        uiDesk.cardSchema = document.createElement(cardsStructure.mainCardContainer);
        cardsStructure.cardClasses.forEach(classelement => {
            uiDesk.cardSchema.classList.add(classelement);    
        });
        
        cardsStructure.attributes.forEach(attribute => {
            for (const key in attribute) {
                console.log(attribute[key]);
                uiDesk.cardSchema.setAttribute(key, attribute[key]);
            }
        });

        cardsStructure.childElements.forEach(element => {
            uiDesk.cardSchema.appendChild(document.createElement(element));
        })
    },

    fillDesk: (typeInserted)=>{
        //Compruebo si el tipo de carta que se ha insertado es válido
        if(cardsStructure.clubs.hasOwnProperty(typeInserted)){
            //Recorro el array de tipos de  cartas de mi JSON 
            cardsStructure.clubs[typeInserted].forEach(item => {
                //Genero las 12 cartas de manera dinamica
                for(let i = 1; i <= 12; i++){
                    let cardClone = uiDesk.cardSchema.cloneNode(true);
                    cardClone.children[0].textContent = i;
                    cardClone.children[1].textContent = item;
                    cardClone.children[2].textContent = i;
                    uiDesk.desk.push(cardClone);
                }
            });

        }else{
            return false;
        }
    },

    generateDesk:()=>{
        let mainContainer = document.createElement(containersStructure.mainContainerElement);
        document.body.appendChild(mainContainer);
        mainContainer.classList.add(containersStructure.classes[0]);
        mainContainer.setAttribute('id', containersStructure.containers[0]);
        uiDesk.desk.forEach(card => {
            mainContainer.appendChild(card);
        });
    }
}


