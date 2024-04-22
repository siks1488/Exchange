const eur = document.querySelector(`.amount`);
const ron = document.querySelector(`.number`);
const button = document.querySelector(`.Submit`)

button.addEventListener(`click`,function(){
    const euroValue = parseFloat(eur.value);
    ron.value = euroValue * 4.98;
})
