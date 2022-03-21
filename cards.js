const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');



function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card')//closest() is like querySelectorAll for the closest card. However, it climbs up the nested tree of DOM elements, whereas querySelector all climbs down the tree of DOM elements.
    //Grab the image src
    const imgSrc = card.querySelector('img').src; //Gives the src of the image.
    const description = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    //Populate the modal with new info
    modalInner.innerHTML = `<img width='600' height= '600' src=${imgSrc.replace('200','600')} alt='${name}'></br>
    <p>${description}</p>`;
    //Show the modal
    modalOuter.classList.add('open');
    
}

function closeModal() {
    modalOuter.classList.remove('open');
}


cardButtons.forEach( button => button.addEventListener('click', handleCardButtonClick));
modalOuter.addEventListener('click', (event) => {
    const isOutside = event.target.closest('.modal-inner');
    if(isOutside === null){
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    console.log(event.key);
    if(event.key === 'Escape'){
        closeModal();
    }
});