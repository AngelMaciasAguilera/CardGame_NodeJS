let card = document.getElementById('card');
let container = document.getElementById('card-desk');

let array = ['treboles', 'corazones', 'picas', 'diamantes']

array.forEach((element) => {
    for(let i = 1; i <= 12; i++){
        let cardElements = card.cloneNode(true);
        cardElements.children[0].textContent = i;
        cardElements.children[1].textContent = element;
        cardElements.children[2].textContent = i;
        console.log(cardElements);
        container.appendChild(cardElements);
    }
});