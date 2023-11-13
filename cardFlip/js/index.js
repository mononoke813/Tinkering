const body = document.querySelector("body");

function keyupListener(event) {
    console.log(event.key);
    console.log(event.nodeValue);
}

body.addEventListener('keydown', keyupListener);


(() => {
	// TODO: Flip the card when clicked
    const flipCards = document.querySelectorAll('.flipped');
    for(let flipCard of flipCards){
        flipCard.addEventListener("click", (e) => {
            e.target.classList.toggle('flipped');
        });
    }

})();


