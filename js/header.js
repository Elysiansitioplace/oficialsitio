const menu = document.querySelector('.headerpink');


function ativarscroll(){
menu.classList.toggle('ativar-scroll', scrollY > 0);}
window.addEventListener('scroll', ativarscroll) ;




const cliquemenu = document.querySelector('#menu');
const fundo = document.querySelector('.fundo-menu')
const fechar = document.querySelector('#icon-fecharmenu')

cliquemenu.addEventListener('click', ()=>{
 fundo.classList.add('ativar-menumob')
})
fechar.addEventListener('click', ()=>{
    fundo.classList.remove('ativar-menumob')
   })