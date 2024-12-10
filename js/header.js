const menu = document.querySelector('.headerpink');


function ativarscroll(){
menu.classList.toggle('ativar-scroll', scrollY > 0);}
window.addEventListener('scroll', ativarscroll) ;