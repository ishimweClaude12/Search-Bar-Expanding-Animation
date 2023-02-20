const btn = document.querySelector('.btn');

const input = document.querySelector('.input')
btn.addEventListener('click', ()=>{
   if ( input.classList.contains('active')){
    input.classList.remove('active')
   }else{
    input.classList.add('active')
   }
})