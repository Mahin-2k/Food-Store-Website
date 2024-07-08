const navbar = document.querySelector('#navbar');
const menu = document.querySelector('#menu');

navbar.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
    }
})