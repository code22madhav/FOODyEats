const btnopen=document.querySelector
('.show-modal');
const  btnclose=document.querySelector('.close-modal');
const modal=document.querySelector('.modal')
const overlay=document.querySelector('.overlay')



const openbox = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


// close window
const closebox=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnopen.addEventListener('click', openbox);
btnclose.addEventListener('click', closebox);
overlay.addEventListener('click', closebox);