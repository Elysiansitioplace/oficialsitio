window.confirm('Ola ! Bem Vindo ao Site Da Elysian Place')

let redes = document.querySelector('#dados-unico');

redes.addEventListener('mouseover', function(){
 redes.classList.add('fundo-contatos')
})

const cliquemenu = document.querySelector('#menu');
const fundo = document.querySelector('.fundo-menumob')
const fechar = document.querySelector('#fechar-menumob')

cliquemenu.addEventListener('click', ()=>{
 fundo.classList.add('ativar-menumob')
})
fechar.addEventListener('click', ()=>{
    fundo.classList.remove('ativar-menumob')
   })