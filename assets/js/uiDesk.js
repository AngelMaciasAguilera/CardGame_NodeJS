export const uiDesk = {
    desk: [],
    init: (card)=>{
        ['treboles', 'corazones', 'picas', 'diamantes'].forEach(item => {
            for(let i = 1; i <= 12; i++){
                let cardElements = card.cloneNode(true);
                cardElements.children[0].textContent = i;
                cardElements.children[1].textContent = item;
                cardElements.children[2].textContent = i;
                uiDesk.desk.push(cardElements);
            }
        });
    },

    generateDesk:(container)=>{
        uiDesk.desk.forEach(card => {
            container.appendChild(card);
        });
    }
}