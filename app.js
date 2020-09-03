
//select elements for index page
const menuBtn = document.querySelector('.open');
const closeMenuBtn = document.querySelector('.close');
const menu = document.querySelector('.nav-list');



//function to open menu
function openMenu(){
    menu.classList.add('active');
}
//function to close menu
function closeMenu(){
    menu.classList.remove('active');
}

//Event listeners
menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);



